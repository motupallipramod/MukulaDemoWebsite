import React, { useEffect, useRef } from 'react';
import FloatingChipCanvas from '../components/canvas/FloatingChipCanvas';
import gsap from 'gsap';
import { Shield, Lightbulb, Workflow } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
  })
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const About = () => {
  const titleRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(storyRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: '2005', title: 'Company Founded', desc: 'Established in Hyderabad as a boutique microchip layout and layout verification firm.' },
    { year: '2012', title: 'Secure Element IP', desc: 'Released our first proprietary 32-bit hardware cryptographic secure element layout.' },
    { year: '2018', title: 'Dual-Interface SoCs', desc: 'Launched contactless and contact dual-interface smart card chips for banking pipelines.' },
    { year: '2024', title: 'Semiconductor Expansion', desc: 'Partnered with global fabrication nodes to build sub-22nm secure processors.' }
  ];

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Security',
      desc: 'Zero-compromise approach to chip defense, side-channel attack countermeasures, and cryptographic assurance.',
      color: 'text-[#007f7f] dark:text-[#00D4FF]',
      bg: 'bg-[#007f7f]/8 dark:bg-[#00D4FF]/8',
      ring: 'ring-[#007f7f]/20 dark:ring-[#00D4FF]/20',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      desc: 'Pioneering sub-micron architectures and creative memory allocation routines to maximize processing velocity.',
      color: 'text-[#0d9488] dark:text-[#00FF88]',
      bg: 'bg-[#0d9488]/8 dark:bg-[#00FF88]/8',
      ring: 'ring-[#0d9488]/20 dark:ring-[#00FF88]/20',
    },
    {
      icon: <Workflow size={32} />,
      title: 'Versatility',
      desc: 'Cross-compatible hardware configurations running Java Card OS, proprietary kernels, and custom firmware modules.',
      color: 'text-[#007f7f] dark:text-[#00D4FF]',
      bg: 'bg-[#007f7f]/8 dark:bg-[#00D4FF]/8',
      ring: 'ring-[#007f7f]/20 dark:ring-[#00D4FF]/20',
    }
  ];

  const badges = ['ISO/IEC 7816', 'ISO/IEC 14443', 'EMVCo COMPLIANT', 'EAL5+ READY'];

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
              <span className="text-[10px] uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF]">Our Story & Values</span>
            </div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Engineering <br />
              <span className="bg-gradient-to-r from-[#007f7f] via-[#0d9488] to-[#059669] dark:from-[#00D4FF] dark:via-[#00E5FF] dark:to-[#00FF88] bg-clip-text text-transparent">
                Trust in Silicon
              </span>
            </h1>
            <p className="text-lg text-[#4a5568] dark:text-[#94a3b8] max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
              Combining physics, mathematics, and high-assurance hardware layout to configure secure interfaces for the next century.
            </p>
          </div>
          <div className="h-[350px] w-full">
            <FloatingChipCanvas />
          </div>
        </div>
      </section>

      {/* ─── 2. Story Section ─── */}
      <section ref={storyRef} className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-4 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Our Story</span>
            <h2 className="text-3xl font-extrabold mb-6 text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Two Decades of Semiconductor Expertise</h2>
            <p className="text-[#4a5568] dark:text-[#94a3b8] mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Founded in Hyderabad, India, Mukula Technologies began with a single vision: to build secure, robust, and highly optimized microchip elements. Over the years, we have transitioned from a specialized IP layout shop to a comprehensive fabless chip design organization.
            </p>
            <p className="text-[#4a5568] dark:text-[#94a3b8] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Today, our microprocessors and Secure Elements are embedded in millions of secure access, transit, and IoT units globally, backed by leading-edge design centers in Hyderabad.
            </p>
          </div>

          <div className="relative border border-[#007f7f]/20 dark:border-[#00D4FF]/15 p-8 rounded-2xl bg-[#f8faff] dark:bg-[#0d1627] shadow-lg">
            <div className="absolute top-0 right-0 p-4 text-xs text-[#007f7f] dark:text-[#00D4FF]"
              style={{ fontFamily: 'Space Mono, monospace' }}>MUKULA // CONFIDENTIAL</div>
            {/* Glowing corner accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#007f7f]/10 dark:from-[#00D4FF]/10 to-transparent rounded-tl-2xl rounded-br-3xl pointer-events-none" />
            <h3 className="text-xl font-bold mb-6 text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Core Competencies</h3>
            <ul className="space-y-3 text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>
              {[
                'CMOS Mixed-Signal Hardware Layout',
                'Elliptic Curve Cryptographic Coprocessors',
                'Smart Card Contact/Contactless ISO Interfaces',
                'Ultra Low-Power Energy Harvesting',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#4a5568] dark:text-[#94a3b8]">
                  <span className="text-[#007f7f] dark:text-[#00FF88] font-bold shrink-0">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 3. Values Section ─── */}
      <section className="py-24 bg-[#f8faff] dark:bg-[#080d18] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Values</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Our Foundational Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 bg-white dark:bg-[#0d1627] rounded-2xl border border-[rgba(0,127,127,0.12)] dark:border-[rgba(0,212,255,0.1)] text-center card-hover"
              >
                <div className={`w-16 h-16 rounded-2xl ${val.bg} ring-2 ${val.ring} flex items-center justify-center mx-auto mb-6 ${val.color}`}>
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0d1b2a] dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}>{val.title}</h3>
                <p className="text-[#4a5568] dark:text-[#94a3b8] text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Milestone Timeline ─── */}
      <section className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// History</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Milestones Timeline</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative border-l-2 border-[#007f7f]/20 dark:border-[#00D4FF]/20 ml-4 md:ml-32">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={slideLeft} custom={idx} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mb-12 ml-8 relative"
              >
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
                  className="absolute -left-[37px] top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] border-4 border-white dark:border-[#0a0f1e] shadow-md shadow-[#007f7f]/30 dark:shadow-[#00D4FF]/30"
                />
                <div className="text-xl font-bold text-[#007f7f] dark:text-[#00D4FF] mb-1"
                  style={{ fontFamily: 'Space Mono, monospace' }}>{milestone.year}</div>
                <h3 className="text-xl font-bold mt-1 mb-2 text-[#0d1b2a] dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}>{milestone.title}</h3>
                <p className="text-[#4a5568] dark:text-[#94a3b8] max-w-xl text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default About;
