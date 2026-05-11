import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="font-bold text-white text-xl tracking-tight whitespace-nowrap">
              {CHURCH_NAME}
            </span>
          </Link>
          <p className="text-sm leading-relaxed">
            Leading people into a growing relationship with Jesus Christ. Join us this week at one of our locations or online.
          </p>
          <div className="flex space-x-5">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/ministries" className="hover:text-white transition-colors">Ministries</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Events Calendar</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Find a Location</Link></li>
            <li><Link to="/give" className="hover:text-white transition-colors">Give Online</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/sermons" className="hover:text-white transition-colors">Latest Sermons</Link></li>
            <li><Link to="/live" className="hover:text-white transition-colors">Live Stream</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Prayer Request</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">New Believers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Growth Track</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
              <span>123 Faith Way, London, UK</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-amber-500 shrink-0" />
              <span>+44 20 1234 5678</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-amber-500 shrink-0" />
              <span>contact@thesanctuary.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© {currentYear} {CHURCH_NAME}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
