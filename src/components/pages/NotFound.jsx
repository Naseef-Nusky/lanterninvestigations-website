import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
      <SEO
        title="404 Not Found | Lantern Investigations"
        description="The page you’re looking for doesn’t exist."
        url={window.location.pathname}
        robots="noindex, nofollow"
      />
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold text-blue-600 mb-2">404 error</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Go to Homepage</Link>
          <Link to="/contact" className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Contact Us</Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;


