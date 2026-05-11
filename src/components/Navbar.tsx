import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Heart, MapPin, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { CHURCH_NAME } from '../constants';

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
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-amber-400 font-bold text-xl">S</span>
          </div>
          <span className={cn(
            'font-bold text-xl tracking-tight transition-colors duration-300',
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
                'text-sm font-medium tracking-wide hover:opacity-70 transition-opacity',
                scrolled || !isHome ? 'text-neutral-900' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/live"
            className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
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
                  className="text-lg font-semibold text-neutral-900 hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/live"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-amber-500 p-4 rounded-xl text-white font-bold"
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
