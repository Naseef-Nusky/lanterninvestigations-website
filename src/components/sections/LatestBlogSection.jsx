import React from 'react';
import { Link } from 'react-router-dom';

const LatestBlogSection = () => {
  const latestPosts = [
    {
      title: "The Importance of Hiring a Licensed Private Investigator in the UK",
      excerpt: "Discover why working with a licensed private investigator ensures reliability, confidentiality, and legal compliance in your case.",
      date: "October 15, 2024",
      readTime: "5 min read",
      category: "Legal",
      image: "/blog1.jpeg"
    },
    {
      title: "Corporate Fraud — How Investigations Protect Your Business",
      excerpt: "Understand how professional fraud investigations can safeguard your company from financial and reputational loss.",
      date: "October 10, 2024",
      readTime: "4 min read",
      category: "Business",
      image: "/blog2.jpeg"
    },
    {
      title: "How Covert Surveillance Helps Uncover the Truth",
      excerpt: "Learn how discreet surveillance operations can provide solid evidence in personal and corporate investigations.",
      date: "October 5, 2024",
      readTime: "6 min read",
      category: "Surveillance",
      image: "/blog3.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blogs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights and expert advice on private investigations
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
            <article key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div></div>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/blogs" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700"
          >
            View All Blog Posts
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
