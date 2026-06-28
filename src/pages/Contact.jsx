import React, { useState } from 'react';
import FaizPhoneCanvas from '../components/canvas/FaizPhoneCanvas';
import { Send, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    useCase: 'smart_card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-[#f8faff] dark:bg-[#080d18] text-[#0d1b2a] dark:text-[#e2e8f0] min-h-screen pt-20">
      
      {/* ─── 1. Hero Section ─── */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#007f7f]/6 dark:bg-[#00D4FF]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,#007f7f_1px,transparent_1px),linear-gradient(to_bottom,#007f7f_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#007f7f]/20 dark:border-[#00D4FF]/20 bg-[#007f7f]/5 dark:bg-[#00D4FF]/5 mb-6"
              style={{ fontFamily: 'Space Mono, monospace' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#007f7f] dark:bg-[#00FF88] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF]">Inquire & Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Connect with <br />
              <span className="bg-gradient-to-r from-[#007f7f] via-[#0d9488] to-[#059669] dark:from-[#00D4FF] dark:via-[#00E5FF] dark:to-[#00FF88] bg-clip-text text-transparent">
                Our Architects
              </span>
            </h1>
            <p className="text-lg text-[#4a5568] dark:text-[#94a3b8] max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Have questions about custom chip packages, semiconductor licensing, or smart card firmware? Drop us a line.
            </p>
          </div>
          <div className="h-[300px] w-full">
            <FaizPhoneCanvas />
          </div>
        </div>
      </section>

      {/* ─── 2. Form & Address Grid ─── */}
      <section className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="bg-[#f8faff] dark:bg-[#0d1627] p-8 rounded-3xl border border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)] shadow-xl relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Inquiry Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4a5568] dark:text-[#94a3b8] mb-2">Full Name</label>
                  <input value={formData.name} onChange={handleChange} type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-[rgba(0,127,127,0.18)] dark:border-[rgba(0,212,255,0.15)] bg-white dark:bg-[#080d18] text-[#0d1b2a] dark:text-white focus:ring-2 focus:ring-[#007f7f] dark:focus:ring-[#00D4FF] focus:border-transparent outline-none transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#4a5568] dark:text-[#94a3b8] mb-2">Company Name</label>
                  <input value={formData.company} onChange={handleChange} type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-[rgba(0,127,127,0.18)] dark:border-[rgba(0,212,255,0.15)] bg-white dark:bg-[#080d18] text-[#0d1b2a] dark:text-white focus:ring-2 focus:ring-[#007f7f] dark:focus:ring-[#00D4FF] focus:border-transparent outline-none transition-shadow" placeholder="Acme Semiconductors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4a5568] dark:text-[#94a3b8] mb-2">Email Address</label>
                  <input value={formData.email} onChange={handleChange} type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-[rgba(0,127,127,0.18)] dark:border-[rgba(0,212,255,0.15)] bg-white dark:bg-[#080d18] text-[#0d1b2a] dark:text-white focus:ring-2 focus:ring-[#007f7f] dark:focus:ring-[#00D4FF] focus:border-transparent outline-none transition-shadow" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-[#4a5568] dark:text-[#94a3b8] mb-2">Primary Use Case</label>
                  <select value={formData.useCase} onChange={handleChange} id="useCase" className="w-full px-4 py-3 rounded-lg border border-[rgba(0,127,127,0.18)] dark:border-[rgba(0,212,255,0.15)] bg-white dark:bg-[#080d18] text-[#0d1b2a] dark:text-white focus:ring-2 focus:ring-[#007f7f] dark:focus:ring-[#00D4FF] focus:border-transparent outline-none cursor-pointer">
                    <option value="smart_card">Smart Card SoC</option>
                    <option value="secure_element">Secure Element IP</option>
                    <option value="microprocessor">Microprocessors / IoT</option>
                    <option value="nfc">NFC / Transceivers</option>
                  </select>
                </div>
              </div>
              <div className="font-sans">
                <label htmlFor="message" className="block text-sm font-medium text-[#4a5568] dark:text-[#94a3b8] mb-2">Project Outline / Message</label>
                <textarea value={formData.message} onChange={handleChange} id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-[rgba(0,127,127,0.18)] dark:border-[rgba(0,212,255,0.15)] bg-white dark:bg-[#080d18] text-[#0d1b2a] dark:text-white focus:ring-2 focus:ring-[#007f7f] dark:focus:ring-[#00D4FF] focus:border-transparent outline-none resize-none transition-shadow" placeholder="Outline your requirements..."></textarea>
              </div>
              <button type="button" className="w-full py-4 px-6 bg-[#007f7f] dark:bg-[#00D4FF] text-white dark:text-[#080d18] font-bold rounded-lg hover:opacity-90 transition-all glow-button flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-md shadow-[#007f7f]/10 dark:shadow-[#00D4FF]/10"
                style={{ fontFamily: 'Space Mono, monospace' }}>
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Address Card & Map */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8 mb-8">
              <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold block"
                style={{ fontFamily: 'Space Mono, monospace' }}>// Headquarters</span>
              <h2 className="text-3xl font-extrabold text-[#0d1b2a] dark:text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}>Hyderabad Headquarters</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#007f7f]/8 dark:bg-[#00D4FF]/8 flex items-center justify-center shrink-0 text-[#007f7f] dark:text-[#00D4FF] border border-[#007f7f]/15 dark:border-[#00D4FF]/15">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0d1b2a] dark:text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}>Office Address</h3>
                  <p className="text-[#4a5568] dark:text-[#94a3b8] mt-1 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
                    WeWork Rajapushpa Summit, ISB Road,<br />
                    Financial District, Hyderabad 500032,<br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#007f7f]/8 dark:bg-[#00D4FF]/8 flex items-center justify-center shrink-0 text-[#007f7f] dark:text-[#00D4FF] border border-[#007f7f]/15 dark:border-[#00D4FF]/15">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0d1b2a] dark:text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}>Electronic Inquiries</h3>
                  <p className="text-[#007f7f] dark:text-[#00D4FF] mt-1 text-sm"
                    style={{ fontFamily: 'Space Mono, monospace' }}>info@mukula.co</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 w-full bg-[#f8faff] dark:bg-[#0d1627] rounded-3xl overflow-hidden border border-[rgba(0,127,127,0.12)] dark:border-[rgba(0,212,255,0.1)] flex items-center justify-center shadow-inner card-hover">
              <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#007f7f_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <div className="text-center z-10 px-4">
                <div className="w-12 h-12 rounded-full bg-[#007f7f]/15 dark:bg-[#00D4FF]/15 text-[#007f7f] dark:text-[#00D4FF] flex items-center justify-center mx-auto mb-3">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-sm text-[#0d1b2a] dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}>Hyderabad Tech District</h4>
                <p className="text-xs text-[#4a5568] dark:text-[#94a3b8] mt-1"
                  style={{ fontFamily: 'Space Mono, monospace' }}>Geographic Coordinates: 17.4172° N, 78.3418° E</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
