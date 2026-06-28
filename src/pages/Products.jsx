import React, { useState, useEffect, useRef } from 'react';
import SmartCardCanvas from '../components/canvas/SmartCardCanvas';
import gsap from 'gsap';
import { CreditCard, ShieldCheck, Cpu, Smartphone, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const Products = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: 'Microprocessor ICs',
      subtitle: '8-bit to 32-bit cores',
      icon: <Cpu className="w-12 h-12 text-[#007f7f] dark:text-[#00D4FF]" />,
      frontDesc: 'Designed for energy-constrained smart modules and industrial automation platforms.',
      backSpecs: [
        'Architecture: RISC-V 32-bit',
        'Clock Speed: Up to 120MHz',
        'Memory: 512KB Flash / 64KB SRAM',
        'Interface: SPI, I2C, UART, GPIO'
      ]
    },
    {
      title: 'Smart Card SoCs',
      subtitle: 'Contact, Contactless & Dual-Interface',
      icon: <CreditCard className="w-12 h-12 text-[#0d9488] dark:text-[#00FF88]" />,
      frontDesc: 'Advanced secure microcontrollers tailored for transit networks and corporate identification systems.',
      backSpecs: [
        'Frequency: 13.56MHz (NFC)',
        'Standard: ISO/IEC 14443 & 7816',
        'Anti-Collision: Hardware level',
        'Co-Processor: Symmetric crypto engine'
      ]
    },
    {
      title: 'Secure Elements',
      subtitle: 'Hardware Root-of-Trust',
      icon: <ShieldCheck className="w-12 h-12 text-[#007f7f] dark:text-[#00D4FF]" />,
      frontDesc: 'Tamper-resistant silicon chips designed to protect critical device keys and cryptographic state.',
      backSpecs: [
        'Certification: CC EAL5+ Ready',
        'Key Storage: ECC 256/384, RSA 2048',
        'Physical Security: Active shields',
        'Power Consumption: < 5µA sleep mode'
      ]
    },
    {
      title: 'NFC Solutions',
      subtitle: 'Proximity Transceivers',
      icon: <Smartphone className="w-12 h-12 text-[#0d9488] dark:text-[#00FF88]" />,
      frontDesc: 'High-performance near-field communication controllers for mobile transit gates and reader terminals.',
      backSpecs: [
        'Operating Mode: Reader/Writer & Card Emulation',
        'RF Output Power: Up to 250mW',
        'Baud Rate: Up to 848 kbit/s',
        'Supply Voltage: 2.7V to 5.5V'
      ]
    }
  ];

  const industries = [
    { title: 'Finance & Banking', desc: 'EMV compliant contact and contactless banking card solutions securing daily consumer payment structures.' },
    { title: 'Healthcare', desc: 'Secure patient record modules preventing identity spoofing and maintaining strict privacy laws.' },
    { title: 'IoT Ecosystems', desc: 'Lightweight secure element blocks providing zero-touch provisioning and cloud certificate handshakes.' },
    { title: 'Consumer Electronics', desc: 'Embedded transceivers for quick mobile accessory syncing and authentic hardware validation.' }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="bg-[#f8faff] dark:bg-[#080d18] text-[#0d1b2a] dark:text-[#e2e8f0] min-h-screen pt-20">
      
      {/* ─── 1. Hero Section ─── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#007f7f]/6 dark:bg-[#00D4FF]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,#007f7f_1px,transparent_1px),linear-gradient(to_bottom,#007f7f_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#007f7f]/20 dark:border-[#00D4FF]/20 bg-[#007f7f]/5 dark:bg-[#00D4FF]/5 mb-6"
              style={{ fontFamily: 'Space Mono, monospace' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#007f7f] dark:bg-[#00FF88] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF]">Products & Silicon IP</span>
            </div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Silicon Core <br />
              <span className="bg-gradient-to-r from-[#007f7f] via-[#0d9488] to-[#059669] dark:from-[#00D4FF] dark:via-[#00E5FF] dark:to-[#00FF88] bg-clip-text text-transparent">
                Products & IP
              </span>
            </h1>
            <p className="text-lg text-[#4a5568] dark:text-[#94a3b8] max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Secure microcontrollers and mixed-signal semiconductors configured for finance, IoT networks, and smart city devices.
            </p>
          </div>
          <div className="h-[350px] w-full">
            <SmartCardCanvas />
          </div>
        </div>
      </section>

      {/* ─── 2. Products Flip Grid ─── */}
      <section className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Interactive Catalog</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}>Product Categories</h2>
            <p className="text-sm text-[#4a5568] dark:text-[#94a3b8]"
              style={{ fontFamily: 'Inter, sans-serif' }}>Hover over a category card to inspect hardware engineering specifications.</p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="flip-card cursor-pointer">
                <div className="flip-card-inner">
                  
                  {/* Front Side */}
                  <div className="flip-card-front bg-[#f8faff] dark:bg-[#0d1627] border border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)] p-8 flex flex-col items-center justify-center text-center shadow-md">
                    <div className="mb-6">{cat.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-[#0d1b2a] dark:text-white"
                      style={{ fontFamily: 'Syne, sans-serif' }}>{cat.title}</h3>
                    <div className="text-[10px] text-[#007f7f] dark:text-[#00D4FF] mb-4 uppercase tracking-widest"
                      style={{ fontFamily: 'Space Mono, monospace' }}>{cat.subtitle}</div>
                    <p className="text-sm text-[#4a5568] dark:text-[#94a3b8] leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}>{cat.frontDesc}</p>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-to-br from-[#007f7f]/10 to-[#0d9488]/10 dark:from-[#00D4FF]/10 dark:to-[#00FF88]/10 border-2 border-[#007f7f] dark:border-[#00D4FF] p-8 flex flex-col justify-center text-left shadow-lg">
                    <h3 className="text-base font-bold mb-6 text-[#007f7f] dark:text-[#00D4FF]"
                      style={{ fontFamily: 'Space Mono, monospace' }}>TECHNICAL SPECS</h3>
                    <ul className="space-y-3" style={{ fontFamily: 'Space Mono, monospace' }}>
                      {cat.backSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#0d1b2a] dark:text-[#e2e8f0]">
                          <span className="text-[#0d9488] dark:text-[#00FF88]">&gt;</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Industry Applications Carousel ─── */}
      <section className="py-24 bg-[#f8faff] dark:bg-[#080d18] transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Case Studies</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Industry Applications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative bg-white dark:bg-[#0a0f1e] border border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)] p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px] card-hover">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="flex-1"
              >
                <span className="text-[#007f7f] dark:text-[#00D4FF] text-xs tracking-widest uppercase block mb-3"
                  style={{ fontFamily: 'Space Mono, monospace' }}>Application 0{activeSlide + 1}</span>
                <h3 className="text-3xl font-extrabold mb-4 text-[#0d1b2a] dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}>{industries[activeSlide].title}</h3>
                <p className="text-[#4a5568] dark:text-[#94a3b8] text-lg leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{industries[activeSlide].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-4">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} onClick={prevSlide} className="w-12 h-12 rounded-full border border-[#007f7f]/30 dark:border-[#00D4FF]/30 flex items-center justify-center hover:bg-[#007f7f]/10 dark:hover:bg-[#00D4FF]/10 text-[#007f7f] dark:text-[#00D4FF] transition-colors">
                <ArrowLeft size={20} />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} onClick={nextSlide} className="w-12 h-12 rounded-full border border-[#007f7f]/30 dark:border-[#00D4FF]/30 flex items-center justify-center hover:bg-[#007f7f]/10 dark:hover:bg-[#00D4FF]/10 text-[#007f7f] dark:text-[#00D4FF] transition-colors">
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
