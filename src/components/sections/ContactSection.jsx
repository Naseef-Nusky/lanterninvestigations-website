import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', message: '' });
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const phoneOk = /^\+?\d[\d\s-]{6,}$/.test(form.phone);
  const handle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  
  const [status, setStatus] = useState({ sending: false, ok: null, error: '' });
  const [touched, setTouched] = useState({ name: false, phone: false, email: false, message: false });
  const [submitTried, setSubmitTried] = useState(false);

  const onBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitTried(true);
    
    // Check if all required fields are valid
    if (!form.name.trim() || !emailOk || !phoneOk || !form.message.trim()) {
      return;
    }
    
    setStatus({ sending: true, ok: null, error: '' });
    
    try {
      const EMAILJS_CONFIG = {
        serviceId: 'service_z9nrpnh',
        templateId: 'template_o96o6re',
        publicKey: 'KMtxeuThzMItKsmDc',
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          title: `New Website Contact from ${form.name}`,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          time: new Date().toLocaleString(),
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        setStatus({ sending: false, ok: true, error: '' });
        setForm({ name: '', phone: '', email: '', message: '' });
        setTouched({ name: false, phone: false, email: false, message: false });
        setSubmitTried(false);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err?.text || err?.message || 'Failed to send' });
      console.error('EmailJS Error:', err);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/contact.png)'}}>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Call Us Today For A Free Confidential Discussion
          </h2>
          <p className="text-gray-700 mb-6 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Professional private investigation services in London and across the UK. We deliver results with discretion, integrity, and professionalism.
          </p>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Call Now</h3>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-600">07826 416466</div>
          </div>
        </div>

        {/* Main Content - Merged Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div className="grid lg:grid-cols-3 min-h-[600px]">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src="/contact1.jpg" 
                  alt="Contact Henderson Thomas Investigations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-indigo-900/20"></div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
              {/* Form Header */}
              <div className="mb-6 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2">Submit Your Details Below For A Free Quote</h3>
                <p className="text-gray-600 text-sm md:text-base">
                Book your 100% discreet consultation</p>
                {status.ok && (
                  <div className="mt-3 text-green-600 text-sm font-semibold">Message sent successfully.</div>
                )}
                {status.ok === false && (
                  <div className="mt-3 text-red-600 text-sm font-semibold">{status.error}</div>
                )}
              </div>

              {/* Contact Form */}
              <form onSubmit={submit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-left">Your Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handle} 
                    onBlur={onBlur}
                    required 
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                      form.name.trim() 
                        ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`} 
                    placeholder="Enter your full name" 
                  />
                  {((touched.name || submitTried) && !form.name.trim()) && (
                    <p className="text-red-400 text-sm mt-1">Please enter your name.</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-white text-left">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handle} 
                      onBlur={onBlur}
                      required 
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        emailOk 
                          ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your email address" 
                    />
                    {((touched.email || submitTried) && !emailOk) && (
                      <p className="text-red-400 text-sm mt-1">Please enter a valid email address.</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-white text-left">Phone Number *</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handle} 
                      onBlur={onBlur}
                      required 
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        phoneOk 
                          ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                          : 'border-gray-300 focus:border-blue-500'
                      }`} 
                      placeholder="Enter your phone number" 
                    />
                    {((touched.phone || submitTried) && !phoneOk) && (
                      <p className="text-red-400 text-sm mt-1">Please enter a valid phone number.</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-white text-left">Tell us about your case *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    value={form.message} 
                    onChange={handle} 
                    onBlur={onBlur}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none ${
                      form.message.trim() 
                        ? 'border-green-300 focus:border-green-500 bg-green-50/30' 
                        : 'border-gray-300 focus:border-blue-500'
                    }`} 
                    placeholder="Tell us about your investigation needs..." 
                  />
                  {((touched.message || submitTried) && !form.message.trim()) && (
                    <p className="text-red-400 text-sm mt-1">Please enter a message.</p>
                  )}
                </div>
                
                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status.sending || !form.name.trim() || !emailOk || !phoneOk || !form.message.trim()} 
                    className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                      !status.sending && form.name.trim() && emailOk && phoneOk && form.message.trim()
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <svg className={`w-5 h-5 mr-2 ${status.sending ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {status.sending ? 'Sending...' : 'Get Your Free Quote'}
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;