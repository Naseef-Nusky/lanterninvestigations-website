import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileCallPill from './components/MobileCallPill';
import HomePage from './components/pages/Home';
import Services from './components/pages/Service';
import BlogPage from './components/pages/Blog';
import AboutUs from './components/pages/AboutUs';
import ContactPage from './components/pages/ContactUs';
import SingleBlogPost from './components/pages/SingleBlogPost';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsAndConditions from './components/pages/TermsAndConditions';
import Location from './components/pages/Location';
import NotFound from './components/pages/NotFound';
// Service pages
import BackgroundCheck from './components/pages/services/Background';
import Covert from './components/pages/services/Covert';
import FraudInvestigation from './components/pages/services/Fraud';
import MissingPersons from './components/pages/services/Missing';
import PersonalInvestigation from './components/pages/services/Personal';
import './App.css';

function App() {
  const [showContactPopup, setShowContactPopup] = React.useState(false);

  React.useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Show popup after 2 seconds
      setTimeout(() => {
        setShowContactPopup(true);
        localStorage.setItem('hasVisited', 'true');
      }, 2000);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs/:slug" element={<SingleBlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/location/:locationName" element={<Location />} />
          {/* Service pages */}
          <Route path="/service/background" element={<BackgroundCheck />} />
          <Route path="/service/covert" element={<Covert />} />
          <Route path="/service/fraud" element={<FraudInvestigation />} />
          <Route path="/service/missing" element={<MissingPersons />} />
          <Route path="/service/personal" element={<PersonalInvestigation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileCallPill />
        
        {/* Contact Us Popup */}
        {showContactPopup && (
          <div className="fixed inset-0 z-[200] bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowContactPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Popup Content */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Private Investigation Services?</h2>
                <p className="text-gray-600 mb-6">
                  Get in touch with Henderson Thomas Investigations for professional, confidential investigation services.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:07826416466"
                    className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    📞 Call: 07826 416466
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    📧 Get Your Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
