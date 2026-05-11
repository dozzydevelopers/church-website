import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Users, MessageSquare, Send, Heart, Share2, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { CHURCH_NAME } from '../constants';

export default function Live() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{user: string, text: string}[]>([]);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 34, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChat(prev => [...prev, { user: 'Guest', text: message }]);
    setMessage('');
  };

  return (
    <div className="pt-20 bg-neutral-950 min-h-screen text-white">
      <div className="max-w-[1600px] mx-auto px-6 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Stream Area */}
        <div className="lg:col-span-3 space-y-8">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group">
             {/* Live Indicators */}
             <div className="absolute top-6 left-6 z-20 flex items-center space-x-3">
                <div className="bg-red-600 px-3 py-1 rounded-md flex items-center space-x-2 animate-pulse">
                   <div className="w-2 h-2 bg-white rounded-full" />
                   <span className="text-[10px] font-black tracking-widest uppercase">Live</span>
                </div>
                <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-md flex items-center space-x-2">
                   <Users className="w-3 h-3 text-neutral-400" />
                   <span className="text-[10px] font-bold text-neutral-200">1,245 watching</span>
                </div>
             </div>

             {/* Placeholder for Video Player */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                   <div className="w-24 h-24 bg-amber-500/10 backdrop-blur-3xl rounded-full border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                      <Play className="w-8 h-8 text-amber-500 fill-current ml-1" />
                   </div>
                   <h2 className="text-3xl font-black tracking-tighter">Wait for Service to Start</h2>
                   <div className="mt-6 flex items-center justify-center space-x-4">
                      <div className="text-center">
                         <span className="block text-2xl font-black">{timeLeft.h.toString().padStart(2, '0')}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Hrs</span>
                      </div>
                      <span className="text-2xl font-black text-amber-500">:</span>
                      <div className="text-center">
                         <span className="block text-2xl font-black">{timeLeft.m.toString().padStart(2, '0')}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Min</span>
                      </div>
                      <span className="text-2xl font-black text-amber-500">:</span>
                      <div className="text-center">
                         <span className="block text-2xl font-black">{timeLeft.s.toString().padStart(2, '0')}</span>
                         <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Sec</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-20">
                <div className="flex items-center space-x-4">
                   <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all">
                      <Share2 className="w-5 h-5" />
                   </button>
                   <button className="flex items-center space-x-2 bg-amber-500 px-6 py-3 rounded-full text-neutral-900 font-black text-sm">
                      <Heart className="w-4 h-4 fill-current" />
                      <span>Support the Stream</span>
                   </button>
                </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-neutral-900">
             <div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Divine Encounter Service</h1>
                <p className="text-neutral-400 text-lg font-medium">with Pastor David Stone · {CHURCH_NAME}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                   <span className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-bold text-neutral-400 uppercase tracking-widest">Worship</span>
                   <span className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-bold text-neutral-400 uppercase tracking-widest">Word of God</span>
                   <span className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-bold text-neutral-400 uppercase tracking-widest">Global Live</span>
                </div>
             </div>
             <Link to="/give" className="shrink-0 bg-white text-neutral-900 px-8 py-4 rounded-full font-black hover:bg-amber-100 transition-all flex items-center space-x-3">
                <Heart className="w-5 h-5 fill-current" />
                <span>Tithes & Offerings</span>
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
             <div className="p-8 bg-neutral-900/50 rounded-3xl border border-neutral-900">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
                   <Users className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold text-xl mb-3">Join a Community</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Don't watch alone. Connect with a life group in your area during or after the service.</p>
             </div>
             <div className="p-8 bg-neutral-900/50 rounded-3xl border border-neutral-900">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
                   <MessageSquare className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold text-xl mb-3">Prayer Request</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Our online prayer team is ready to stand with you in faith. Reach out anytime.</p>
             </div>
             <div className="p-8 bg-neutral-900/50 rounded-3xl border border-neutral-900">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
                   <Timer className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold text-xl mb-3">Next Service</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">Join our Midweek Communion Service every Wednesday at 6 PM GMT.</p>
             </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-1 bg-neutral-900/50 rounded-[2.5rem] border border-neutral-900 overflow-hidden flex flex-col h-[600px] lg:h-auto border border-neutral-800">
           <div className="p-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                 <MessageSquare className="w-5 h-5 text-amber-500" />
                 <h2 className="font-bold uppercase tracking-widest text-xs">Live Interaction</h2>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           </div>

           <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <p className="text-center text-[10px] text-neutral-600 uppercase tracking-widest font-bold py-4">Welcome to our Live Chat</p>
              
              {chat.length === 0 && (
                 <div className="flex flex-col items-center justify-center h-full text-neutral-600 space-y-4">
                    <MessageSquare className="w-12 h-12 opacity-20" />
                    <p className="text-sm font-medium">Be the first to say something!</p>
                 </div>
              )}

              {chat.map((msg, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col space-y-1"
                 >
                    <span className={cn("text-[10px] font-black uppercase tracking-wider", msg.user === 'Guest' ? "text-amber-500" : "text-blue-400")}>{msg.user}</span>
                    <p className="text-sm text-neutral-300 font-medium">{msg.text}</p>
                 </motion.div>
              ))}
           </div>

           <form onSubmit={handleSend} className="p-6 bg-neutral-900 border-t border-neutral-800">
              <div className="relative">
                 <input
                    type="text"
                    placeholder="Say something..."
                    className="w-full bg-neutral-950 border-neutral-800 rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-amber-500/50 transition-all focus:border-amber-500/50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                 />
                 <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-amber-500 text-neutral-900 rounded-lg hover:bg-amber-400 transition-colors"
                 >
                    <Send className="w-4 h-4" />
                 </button>
              </div>
           </form>
        </div>

      </div>
    </div>
  );
}
