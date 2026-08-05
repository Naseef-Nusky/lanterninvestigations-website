import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-800 py-8 md:py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-left">
            <div className="mb-4 flex items-center space-x-3">
              <img 
                src="/logo-new.png" 
                alt="Lantern Investigations Logo" 
                className="h-14 md:h-16 w-auto"
              />
            </div>
             <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed text-left">
              UK's top-rated private detective agency specializing in corporate investigations, 
              covert surveillance, and discreet investigative services. We provide professional, 
              confidential solutions for all your investigation needs.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-left">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="text-sm md:text-base font-semibold">07979 359508</span>
              </div>
              <div className="flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                 <span className="text-xs md:text-sm text-gray-600">AVAILABLE 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-600 text-left">Quick Links</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              <li><Link to="/about" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">About Us</Link></li>
              <li><Link to="/our-services" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Our Services</Link></li>
              <li><Link to="/blogs" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Blog</Link></li>
              <li><Link to="/contact" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-600 text-left">Our Services</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              <li><Link to="/service/background" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Background Checks</Link></li>
              <li><Link to="/service/covert" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Covert Surveillance</Link></li>
              <li><Link to="/service/fraud" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Fraud Investigation</Link></li>
              <li><Link to="/service/missing" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Missing Persons</Link></li>
              <li><Link to="/service/personal" className="text-sm md:text-base hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Personal Investigation</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row - Locations and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* UK Locations */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-600 text-left">Investigator Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 text-sm md:text-base">
              <Link to="/location/london-south-east" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                London & South East
              </Link>
              <Link to="/location/south-west-england" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                South West England
              </Link>
              <Link to="/location/south-central-east" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                South Central & East England
              </Link>
              <Link to="/location/midlands" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                Midlands
              </Link>
              <Link to="/location/north-england" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                North of England
              </Link>
              <Link to="/location/scotland" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                Scotland
              </Link>
              <Link to="/location/wales-region" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                Wales
              </Link>
              <Link to="/location/northern-ireland" className="hover:text-blue-600 transition-colors duration-300 text-gray-700">
                Northern Ireland
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-blue-600 text-left">Contact Us</h3>
            <div className="space-y-3 text-sm md:text-base text-gray-700">
              <div>
                <p className="font-semibold mb-1">📍 Head Office</p>
                <p>Lantern Investigations</p>
                <p>51 Lime Street,</p>
                <p>London EC3M 7DQ</p>
              </div>
              <div>
                <p className="font-semibold mb-1">📧 Email</p>
                <p>info@lanterninvestigations.com</p>
              </div>
              <div>
                <p className="font-semibold mb-1">📞 Phone</p>
                <p>07979 359508</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="text-center space-y-2">
            <div className="text-gray-500 text-xs md:text-sm leading-relaxed space-y-1">
              <p>
                Lantern Investigations is the trading name of West Green Consultancy Limited. Registered in England and Wales
              </p>
              <p>Company Number 16300477.</p>
            </div>
            <div className="text-gray-500 text-xs md:text-sm">© Copyright {new Date().getFullYear()} | All Rights Reserved</div>
            <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-3 text-xs md:text-sm">
              <Link to="/contact" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">Contact</Link>
              <span className="text-gray-300">|</span>
              <Link to="/privacy-policy" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms-and-conditions" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
