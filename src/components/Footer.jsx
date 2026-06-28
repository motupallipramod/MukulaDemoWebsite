import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, MapPin, Globe, Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0E1A] text-white py-20 border-t border-gray-800/80 overflow-hidden font-mono">
      {/* Sci-fi layout elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-gray-800/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-gray-800/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16">
        
        {/* Column 1: Logo, Tagline & System Status */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg">
              <Cpu className="w-6 h-6 text-[#00D4FF]" />
            </div>
            <span className="text-xl font-bold tracking-widest text-white">MUKULA</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            Intelligent Silicon for Tomorrow. Designing next-generation semiconductor IP and secure microprocessor ICs.
          </p>
          <div className="inline-flex items-center space-x-2 bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-lg text-[10px] text-[#00FF88]">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-ping"></span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-6 border-b border-gray-800 pb-2">Platform</h3>
          <ul className="space-y-3 text-xs text-gray-400">
            <li>
              <Link to="/" className="hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
                <span className="text-[#00FF88] text-[9px]">&gt;</span> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
                <span className="text-[#00FF88] text-[9px]">&gt;</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
                <span className="text-[#00FF88] text-[9px]">&gt;</span> Products & IP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
                <span className="text-[#00FF88] text-[9px]">&gt;</span> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-6 border-b border-gray-800 pb-2">Corporate</h3>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-gray-500" />
              <span>REG NO: U72200AP2005PTC047</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <span>SECURE INTERFACES NODE</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-6 border-b border-gray-800 pb-2">Headquarters</h3>
          <div className="flex items-start gap-3 text-xs text-gray-400 font-sans leading-relaxed">
            <MapPin className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
            <span>
              WeWork Rajapushpa Summit,<br />
              ISB Road, Financial District,<br />
              Hyderabad 500032, India
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <Mail className="w-4 h-4 text-[#00D4FF]" />
            <a href="mailto:info@mukula.co" className="hover:text-[#00D4FF] transition-colors font-mono">
              info@mukula.co
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Tech Info Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
        <p className="font-sans">&copy; {new Date().getFullYear()} Mukula Technologies Pvt Ltd. All rights reserved.</p>
        
        {/* Latency and Legal Links */}
        <div className="flex flex-wrap gap-6 mt-4 md:mt-0 items-center justify-center">
          <span className="bg-gray-900 border border-gray-800/80 px-3 py-1 rounded text-gray-400">
            LATENCY: 12ms // HYD NODE
          </span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
