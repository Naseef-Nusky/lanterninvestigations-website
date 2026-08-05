import React, { useState } from 'react';
import { sendContactEnquiry } from '../lib/sendContactEnquiry';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });
  const [submitTried, setSubmitTried] = useState(false);

  // Validation helpers
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const phoneOk = /^\+?\d[\d\s-]{6,}$/.test(formData.phone);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const onBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitTried(true);
    
    // Check if all required fields are valid
    if (!formData.name.trim() || !emailOk || !phoneOk || !formData.message.trim()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await sendContactEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        source: 'website',
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        message: false
      });
      setSubmitTried(false);
    } catch (err) {
      setSubmitStatus('error');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0047b2] mb-4">
              Submit Your Details Below For A Free Quote
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Book your 100% discreet consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-gray-50">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={onBlur}
                              required
                              placeholder="Enter your full name"
                              className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-[#0047b2] focus:border-transparent ${
                                formData.name.trim() 
                                  ? 'border-green-300 bg-green-50/30' 
                                  : 'border-gray-300'
                              }`}
                            />
                            {((touched.name || submitTried) && !formData.name.trim()) && (
                              <p className="text-red-500 text-sm mt-1">Please enter your name.</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                              Your Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={onBlur}
                              required
                              placeholder="Enter your email address"
                              className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-[#0047b2] focus:border-transparent ${
                                emailOk 
                                  ? 'border-green-300 bg-green-50/30' 
                                  : 'border-gray-300'
                              }`}
                            />
                            {((touched.email || submitTried) && !emailOk) && (
                              <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onBlur={onBlur}
                              required
                              placeholder="Enter your phone number"
                              className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-[#0047b2] focus:border-transparent ${
                                phoneOk 
                                  ? 'border-green-300 bg-green-50/30' 
                                  : 'border-gray-300'
                              }`}
                            />
                            {((touched.phone || submitTried) && !phoneOk) && (
                              <p className="text-red-500 text-sm mt-1">Please enter a valid phone number.</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                              Tell us about your case *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onBlur={onBlur}
                              required
                              rows={4}
                              placeholder="Tell us about your investigation needs..."
                              className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg focus:ring-2 focus:ring-[#0047b2] focus:border-transparent resize-none border-gray-300"
                            />
                            {((touched.message || submitTried) && !formData.message.trim()) && (
                              <p className="text-red-500 text-sm mt-1">Please enter a message.</p>
                            )}
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting || !formData.name.trim() || !emailOk || !phoneOk || !formData.message.trim()}
                            className={`w-full py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base transition-colors ${
                              !isSubmitting && formData.name.trim() && emailOk && phoneOk && formData.message.trim()
                                ? 'bg-[#0047b2] text-white hover:bg-blue-700'
                                : 'bg-gray-400 text-white cursor-not-allowed'
                            }`}
                          >
                            {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
                          </button>

                  {submitStatus === 'success' && (
                    <div className="p-3 md:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm md:text-base">
                      Thank you for your message. We'll get back to you as soon as possible.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-3 md:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm md:text-base">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6 md:space-y-8 text-left">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#0047b2] mb-4 text-left">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#0047b2] mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-left">
                      <p className="text-sm md:text-base text-gray-700 font-medium text-left">Phone</p>
                      <a 
                        href="tel:07979359508" 
                        className="text-sm md:text-base text-gray-600 hover:text-[#0047b2] transition-colors text-left"
                      >
                        07979 359508
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-[#0047b2] mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3 text-left">
                      <p className="text-sm md:text-base text-gray-700 font-medium text-left">Email</p>
                      <a 
                        href="mailto:info@lanterninvestigations.com" 
                        className="text-xs md:text-base text-gray-600 hover:text-[#0047b2] transition-colors text-left whitespace-nowrap"
                      >
                        info@lanterninvestigations.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

