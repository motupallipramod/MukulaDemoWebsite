import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Server } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & IP', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-[92%] max-w-7xl top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <nav className="relative bg-white dark:bg-[#0f172a]/80 backdrop-blur-2xl border border-[rgba(0,127,127,0.2)] dark:border-[rgba(0,212,255,0.15)] rounded-2xl shadow-[0_8px_32px_rgba(0,127,127,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 px-6 py-3">

        {/* Accent underline */}
        <div className="absolute inset-x-10 -bottom-[1px] h-[1px] bg-gradient-to-r from-transparent via-[#007f7f] dark:via-[#00D4FF] to-transparent opacity-50" />

        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#007f7f] to-[#0d9488] dark:from-[#00D4FF] dark:to-[#00FF88] rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-700 animate-pulse" />
              <div className="relative p-2.5 bg-[#f0fafa] dark:bg-[#0a1628] border border-[rgba(0,127,127,0.25)] dark:border-[rgba(0,212,255,0.2)] rounded-xl">
                <Cpu className="w-5 h-5 text-[#007f7f] dark:text-[#00D4FF] group-hover:rotate-180 transition-transform duration-700" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-widest text-[#0d1b2a] dark:text-white leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>
                MUKULA
              </span>
              {/* <span className="text-[8px] text-[#007f7f] dark:text-[#00D4FF] uppercase tracking-widest mt-1" style={{ fontFamily: 'Space Mono, monospace' }}>
                SILICON.SYS // v1.0
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="flex space-x-1 bg-[#f0fafa]/60 dark:bg-[#0a1628]/60 p-1 rounded-full border border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 group"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    <span className={`relative z-10 flex items-center gap-1 transition-colors ${
                      isActive
                        ? 'text-[#007f7f] dark:text-[#00D4FF] font-bold'
                        : 'text-[#4a5568] dark:text-[#94a3b8] group-hover:text-[#007f7f] dark:group-hover:text-[#00D4FF]'
                    }`}>
                      <span className="opacity-0 group-hover:opacity-100 text-[#0d9488] dark:text-[#00FF88] transition-opacity duration-300 select-none">[</span>
                      {link.name}
                      <span className="opacity-0 group-hover:opacity-100 text-[#0d9488] dark:text-[#00FF88] transition-opacity duration-300 select-none">]</span>
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white dark:bg-[#0f172a] shadow-sm rounded-full -z-0 border border-[rgba(0,127,127,0.2)] dark:border-[rgba(0,212,255,0.2)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Status & Toggle */}
            <div className="flex items-center space-x-4 border-l border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)] pl-4">
              {/* <div className="hidden lg:flex items-center space-x-1.5 text-[9px] text-[#007f7f] dark:text-[#00D4FF] bg-[#007f7f]/5 dark:bg-[#00D4FF]/5 px-3 py-1.5 rounded-full border border-[#007f7f]/15 dark:border-[#00D4FF]/15"
                style={{ fontFamily: 'Space Mono, monospace' }}>
                <Server className="w-3 h-3" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#007f7f] dark:bg-[#00FF88] animate-pulse" />
                <span>SYS: CONNECTED</span>
              </div> */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#f0fafa] dark:bg-[#0a1628] text-[#0d1b2a] dark:text-white border border-[rgba(0,127,127,0.2)] dark:border-[rgba(0,212,255,0.15)]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 bg-[#f8faff] dark:bg-[#0a1628] rounded-2xl border border-[rgba(0,127,127,0.15)] dark:border-[rgba(0,212,255,0.12)] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2 flex flex-col items-center">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`w-full text-center py-3 rounded-xl text-xs uppercase tracking-widest border transition-all ${
                        isActive
                          ? 'bg-[#007f7f]/10 dark:bg-[#00D4FF]/10 text-[#007f7f] dark:text-[#00D4FF] border-[#007f7f]/20 dark:border-[#00D4FF]/20 font-bold'
                          : 'text-[#4a5568] dark:text-[#94a3b8] hover:text-[#007f7f] dark:hover:text-[#00D4FF] border-transparent'
                      }`}
                      style={{ fontFamily: 'Space Mono, monospace' }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.div>
  );
};

export default Navbar;
