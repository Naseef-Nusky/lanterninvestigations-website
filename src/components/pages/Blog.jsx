import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { getBlogPosts, formatBlogPost, getImageUrl } from '../lib/contentful';
import SEO from '../SEO';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const blogPosts = await getBlogPosts();
        const formattedPosts = blogPosts.map(formatBlogPost).filter(Boolean);
        setPosts(formattedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Lantern Investigations Blog",
    "description": "Stay informed with the latest insights, tips, and updates from Lantern Investigations. Expert team shares valuable knowledge about private investigation services and industry trends.",
    "url": "https://hendersonthomasinvestigations.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hendersonthomasinvestigations.com/logo-new.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt ? documentToPlainTextString(post.excerpt) : "Private investigation insights and tips",
      "url": `https://hendersonthomasinvestigations.com/blogs/${post.slug}`,
      "datePublished": post.publishedDate,
      "author": {
        "@type": "Person",
        "name": post.author || "Lantern Investigations"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lantern Investigations"
      }
    }))
  };

  return (
    <div className="bg-gray-50 pt-16 md:pt-20">
      <SEO 
        title="Our Blog - Private Investigation Insights & Tips | Lantern Investigations"
        description="Stay informed with the latest insights, tips, and updates from Lantern Investigations. Expert team shares valuable knowledge about private investigation services and industry trends."
        keywords="private investigation blog, investigation tips, private detective insights, investigation news, detective agency blog, investigation advice, private investigation trends"
        url="/blogs"
        structuredData={structuredData}
      />
      {/* Page Header - Full Width */}
      <section className="relative mb-14 h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/blogsPagebg.jpg" 
            alt="Our Blog Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Blog
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Stay informed with the latest insights, tips, and updates from Lantern Investigations. 
              Our expert team shares valuable knowledge about private investigation services and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="pb-24">
        <div className="container mx-auto px-4">

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No blog posts yet</h2>
            <p className="text-gray-500">Check back soon for our latest insights and updates.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
              >
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={getImageUrl({ fields: { file: { url: post.featuredImage } } })}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#0047b2] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt ? documentToPlainTextString(post.excerpt) : 'No excerpt available'}
                  </p>

                  {/* Read More Link - Bottom Right */}
                  <div className="flex justify-end mt-auto">
                    <span className="inline-flex items-center text-[#0047b2] font-semibold hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
