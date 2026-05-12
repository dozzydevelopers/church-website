import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Heart, MapPin, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { CHURCH_NAME, CHURCH_SHORT_NAME } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Give', path: '/give' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4',
        scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center transform group-hover:rotate-[15deg] transition-transform duration-300 shadow-lg shadow-brand-red/20">
            <span className="text-white font-black text-xl italic">{CHURCH_SHORT_NAME[0]}</span>
          </div>
          <span className={cn(
            'font-black text-xl tracking-tighter transition-colors duration-300 uppercase italic',
            scrolled || !isHome ? 'text-neutral-900' : 'text-white'
          )}>
            {CHURCH_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-xs font-black tracking-[0.2em] uppercase hover:text-brand-red transition-colors',
                scrolled || !isHome ? 'text-neutral-900' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/live"
            className="flex items-center space-x-2 bg-brand-red hover:bg-brand-red/90 px-6 py-3 rounded-full text-white text-xs font-black tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/30"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>WATCH LIVE</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors',
            scrolled || !isHome ? 'text-neutral-900 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
          )}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black uppercase italic text-neutral-900 hover:text-brand-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/live"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-brand-red p-4 rounded-xl text-white font-black uppercase italic shadow-lg shadow-brand-red/20"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>WATCH LIVE</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
