import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
// eslint-disable-next-line
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { getBlogPostBySlug, formatBlogPost, getImageUrl } from '../lib/contentful';
import SEO from '../SEO';

const SingleBlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const blogPost = await getBlogPostBySlug(slug);
        
        if (!blogPost) {
          setError('Post not found');
          return;
        }
        
        const formattedPost = formatBlogPost(blogPost);
        setPost(formattedPost);
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatReadingTime = (content) => {
    if (!content) return '1 min read';
    const wordsPerMinute = 200;
    // Convert rich text to plain text first, then count words
    const plainText = documentToPlainTextString(content);
    const wordCount = plainText.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <Navigate to="/blogs" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt ? documentToPlainTextString(post.excerpt) : "Private investigation insights and tips from Lantern Investigations",
    "url": `https://hendersonthomasinvestigations.com/blogs/${post.slug}`,
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "author": {
      "@type": "Person",
      "name": post.author || "Lantern Investigations"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hendersonthomasinvestigations.com/logo-new.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hendersonthomasinvestigations.com/blogs/${post.slug}`
    },
    "image": post.featuredImage ? {
      "@type": "ImageObject",
      "url": getImageUrl({ fields: { file: { url: post.featuredImage } } }),
      "caption": post.title
    } : undefined,
    "articleBody": post.content ? documentToPlainTextString(post.content) : undefined,
    "wordCount": post.content ? documentToPlainTextString(post.content).split(' ').length : undefined,
    "timeRequired": formatReadingTime(post.content)
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-32 pb-24">
      <SEO 
        title={`${post.title} | Lantern Investigations Blog`}
        description={post.excerpt ? documentToPlainTextString(post.excerpt) : "Private investigation insights and tips from Lantern Investigations"}
        keywords={`${post.title}, private investigation, detective insights, investigation tips, Lantern Investigations`}
        url={`/blogs/${post.slug}`}
        structuredData={structuredData}
      />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Article */}
        <article className="max-w-none text-left md:text-justify">
          {/* Header */}
          <header className="mb-8 mt-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{formatReadingTime(post.content)}</span>
              </div>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed mb-6 text-left md:text-justify">
                {documentToPlainTextString(post.excerpt)}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={getImageUrl({ fields: { file: { url: post.featuredImage } } })}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none text-left md:text-justify">
            {post.content && (
              <div className="text-gray-700 leading-relaxed">
                {documentToReactComponents(post.content)}
              </div>
            )}
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-[#0047b2] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Need Professional Investigation Services?</h2>
            <p className="text-lg mb-6">
              Contact Lantern Investigations for confidential, professional assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#0047b2] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/our-services"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0047b2] transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleBlogPost;
