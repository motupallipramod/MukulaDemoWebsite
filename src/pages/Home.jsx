import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import SiliconWaferCanvas from '../components/canvas/SiliconWaferCanvas';
import { ArrowRight, Cpu, ShieldAlert, Zap, Layers, RefreshCw, Radio, Award, Shield, Settings } from 'lucide-react';

// ─── Reusable animation variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

// ─── Tilt card ───
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 18}deg) rotateY(${x / 18}deg)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className={`${className} transition-transform duration-200 ease-out`}
      style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

const Home = () => {
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  // Parallax scroll effect for hero section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const smoothHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroTitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out', delay: 0.2 }
      );
      gsap.fromTo(heroDescRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.7 }
      );
      gsap.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 1 }
      );
    });
    return () => ctx.revert();
  }, []);

  const chooseUsCards = [
    { title: '20+ Years Experience', desc: 'Two decades of semiconductor expertise delivering solutions that balance cutting-edge innovation with real-world reliability.', icon: <Award className="w-8 h-8" />, color: 'text-[#007f7f] dark:text-[#00D4FF]', bg: 'bg-[#007f7f]/8 dark:bg-[#00D4FF]/8' },
    { title: 'Security First', desc: 'Bank-grade encryption and tamper-resistant architecture protecting billions of transactions daily.', icon: <Shield className="w-8 h-8" />, color: 'text-[#0d9488] dark:text-[#00FF88]', bg: 'bg-[#0d9488]/8 dark:bg-[#00FF88]/8' },
    { title: 'Versatile Solutions', desc: 'From financial services to healthcare — scalable technology for every industry.', icon: <Settings className="w-8 h-8" />, color: 'text-[#007f7f] dark:text-[#00D4FF]', bg: 'bg-[#007f7f]/8 dark:bg-[#00D4FF]/8' },
    { title: 'Innovation Driven', desc: "Continuously pushing the boundaries of what's possible in silicon design.", icon: <Zap className="w-8 h-8" />, color: 'text-[#0d9488] dark:text-[#00FF88]', bg: 'bg-[#0d9488]/8 dark:bg-[#00FF88]/8' }
  ];

  const platformFeatures = [
    { icon: <Cpu className="w-8 h-8 text-[#007f7f] dark:text-[#00D4FF]" />, title: 'Multi-Interface Support', desc: 'Contact, contactless, and dual-interface technology for universal compatibility across all systems.' },
    { icon: <Layers className="w-8 h-8 text-[#0d9488] dark:text-[#00FF88]" />, title: 'Smart Memory', desc: 'Advanced EEPROM, Flash, and Dynamic Buffer management for optimal performance.' },
    { icon: <Zap className="w-8 h-8 text-[#007f7f] dark:text-[#00D4FF]" />, title: 'Advanced Cryptography', desc: 'Industry-leading AES, RSA, and Elliptic Curve encryption for uncompromising security.' },
    { icon: <ShieldAlert className="w-8 h-8 text-[#0d9488] dark:text-[#00FF88]" />, title: 'Global Standards', desc: 'Full compliance with EMV, ISO/IEC, and other international smart card specifications.' },
    { icon: <RefreshCw className="w-8 h-8 text-[#007f7f] dark:text-[#00D4FF]" />, title: 'Flexible Architecture', desc: 'Scalable 8-bit to 32-bit processing optimized for diverse application requirements.' },
    { icon: <Radio className="w-8 h-8 text-[#0d9488] dark:text-[#00FF88]" />, title: 'Power Efficiency', desc: 'Ultra-low power consumption enabling extended battery life and passive NFC operation.' }
  ];

  return (
    <div className="overflow-hidden">

      {/* ─── 1. Hero Section ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-[#f8faff] dark:bg-[#080d18]">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#007f7f]/6 dark:bg-[#00D4FF]/5 rounded-full blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0d9488]/5 dark:bg-[#00FF88]/4 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(to_right,#007f7f_1px,transparent_1px),linear-gradient(to_bottom,#007f7f_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <motion.div
          style={{ y: smoothHeroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          <div>
            <div ref={heroDescRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#007f7f]/20 dark:border-[#00D4FF]/20 bg-[#007f7f]/5 dark:bg-[#00D4FF]/5 mb-6"
              style={{ fontFamily: 'Space Mono, monospace' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#007f7f] dark:bg-[#00FF88] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF]">Semiconductor IP & Silicon Design</span>
            </div>

            <h1 ref={heroTitleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}>
              Intelligent Silicon{' '}<br />
              <span className="bg-gradient-to-r from-[#007f7f] via-[#0d9488] to-[#059669] dark:from-[#00D4FF] dark:via-[#00E5FF] dark:to-[#00FF88] bg-clip-text text-transparent">
                for Tomorrow
              </span>
            </h1>

            <p className="text-lg text-[#4a5568] dark:text-[#94a3b8] max-w-md leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Designing next-generation semiconductor IP, secure microprocessor ICs, and mixed-signal chips for the modern digital world.
            </p>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-[#007f7f] dark:bg-[#00D4FF] text-white dark:text-[#080d18] rounded-full font-bold hover:opacity-90 transition-all glow-button flex items-center gap-2 shadow-lg shadow-[#007f7f]/20 dark:shadow-[#00D4FF]/20"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>Explore Technology</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-[#007f7f]/30 dark:border-[#00D4FF]/30 text-[#007f7f] dark:text-[#00D4FF] rounded-full font-bold hover:bg-[#007f7f]/8 dark:hover:bg-[#00D4FF]/8 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                View Capabilities
              </motion.button>
            </div>

            <div ref={scrollRef} className="mt-12 text-sm text-[#4a5568] dark:text-[#94a3b8] flex items-center gap-2"
              style={{ fontFamily: 'Space Mono, monospace' }}>
              <span className="inline-block w-2 h-2 rounded-full bg-[#007f7f] dark:bg-[#00FF88] animate-ping" />
              <span>Scroll to explore</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-[450px] md:h-[600px] w-full relative z-0"
          >
            <SiliconWaferCanvas />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. Why Industry Leaders Choose Us ─── */}
      <section className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Why Choose Us</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Why Industry Leaders Choose Us</h2>
            <p className="mt-4 text-[#4a5568] dark:text-[#94a3b8] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Two decades of semiconductor expertise delivering solutions that balance cutting-edge innovation with real-world reliability.
            </p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chooseUsCards.map((card, i) => (
              <motion.div
                key={i}
                variants={scaleIn} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <TiltCard className="p-8 bg-[#f8faff] dark:bg-[#0d1627] rounded-2xl border border-[rgba(0,127,127,0.12)] dark:border-[rgba(0,212,255,0.1)] shadow-sm card-hover cursor-pointer h-full">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center mb-6 ${card.color}`}
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-3 text-[#0d1b2a] dark:text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}>{card.title}</h3>
                  <p className="text-[#4a5568] dark:text-[#94a3b8] text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{card.desc}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Technology Platform ─── */}
      <section className="py-24 bg-[#f8faff] dark:bg-[#080d18] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-xs uppercase tracking-widest text-[#007f7f] dark:text-[#00D4FF] font-bold mb-3 block"
              style={{ fontFamily: 'Space Mono, monospace' }}>// Platform</span>
            <h2 className="text-4xl font-extrabold text-[#0d1b2a] dark:text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}>Comprehensive Technology Platform</h2>
            <p className="mt-4 text-[#4a5568] dark:text-[#94a3b8]"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Full-stack smart card solutions engineered for the modern digital ecosystem.
            </p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,127,127,0.15)' }}
                className="p-6 bg-white dark:bg-[#0d1627] border border-[rgba(0,127,127,0.12)] dark:border-[rgba(0,212,255,0.1)] rounded-xl cursor-pointer group"
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-[#0d1b2a] dark:text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}>{feature.title}</h3>
                <p className="text-[#4a5568] dark:text-[#94a3b8] text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Founder Quote ─── */}
      <section className="py-24 bg-white dark:bg-[#0a0f1e] transition-colors duration-500 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#007f7f]/5 dark:bg-[#00D4FF]/4 rounded-full blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-serif text-[#007f7f]/15 dark:text-[#00D4FF]/15 block h-8 leading-none select-none"
          >"</motion.span>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-2xl md:text-3xl italic font-light text-[#0d1b2a] dark:text-[#e2e8f0] mb-8 leading-relaxed mt-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our founders emerged from celebrated institutions that defined industry standards — carrying two decades of direct experience in silicon design, global manufacturing partnerships, and large-scale deployment.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-1"
          >
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] rounded-full mb-3" />
            <h4 className="text-base font-bold text-[#007f7f] dark:text-[#00D4FF]"
              style={{ fontFamily: 'Syne, sans-serif' }}>Industry-proven expertise since 20 years</h4>
            <p className="text-xs text-[#4a5568] dark:text-[#94a3b8]"
              style={{ fontFamily: 'Space Mono, monospace' }}>Mukula Technologies R&D Wing</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 5. CTA Banner ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#007f7f]/10 via-[#f8faff] to-[#0d9488]/10 dark:from-[#00D4FF]/8 dark:via-[#080d18] dark:to-[#00FF88]/6" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#007f7f]/40 dark:via-[#00D4FF]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#007f7f]/40 dark:via-[#00D4FF]/40 to-transparent" />

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-[#0d1b2a] dark:text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}>Ready to Transform Your Product?</h2>
          <p className="text-lg text-[#4a5568] dark:text-[#94a3b8] mb-8 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Partner with Mukula to integrate world-class silicon intelligence into your technology infrastructure.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-[#007f7f] dark:bg-[#00D4FF] text-white dark:text-[#080d18] font-bold rounded-full shadow-xl shadow-[#007f7f]/20 dark:shadow-[#00D4FF]/20 hover:opacity-90 transition-opacity glow-button"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get Started Today
          </motion.button>
          <p className="text-xs text-[#4a5568] dark:text-[#94a3b8] mt-4"
            style={{ fontFamily: 'Space Mono, monospace' }}>
            Pioneering next-generation solutions for consumer electronics and mission-critical applications
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
