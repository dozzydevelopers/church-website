import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { CHURCH_NAME } from '../constants';
import { cn } from '../lib/utils';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'info' | 'prayer'>('info');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const campuses = [
    { name: "London Main", address: "123 Faith Way, London, UK", phone: "+44 20 1234 5678", email: "london@faithandgrace.com" },
    { name: "Lagos Cathedral", address: "Plot 10, Victoria Island, Lagos, NG", phone: "+234 1 800 2000", email: "lagos@faithandgrace.com" },
    { name: "New York City", address: "5th Avenue, Manhattan, NY, USA", phone: "+1 212 555 9999", email: "nyc@faithandgrace.com" },
  ];

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 inline-block">Get in Touch</span>
          <h1 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-8 leading-[0.9]">
            We're Here for <br />
            <span className="text-amber-500 italic">You.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-medium">Whatever you're going through, wherever you are in your journey, we want to hear from you. Reach out for information, prayer, or just to say hello.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form Side */}
          <div>
            <div className="flex items-center space-x-6 mb-12 border-b border-neutral-100 pb-2">
               <button
                  onClick={() => setActiveTab('info')}
                  className={cn("pb-4 text-sm font-black uppercase tracking-widest transition-all relative", activeTab === 'info' ? "text-neutral-900 border-b-4 border-amber-500" : "text-neutral-400")}
               >
                 General Inquiry
               </button>
               <button
                  onClick={() => setActiveTab('prayer')}
                  className={cn("pb-4 text-sm font-black uppercase tracking-widest transition-all relative", activeTab === 'prayer' ? "text-neutral-900 border-b-4 border-amber-500" : "text-neutral-400")}
               >
                 Prayer Request
               </button>
            </div>

            <form className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Your Full Name</label>
                     <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-amber-500/50 transition-all font-medium"
                     />
                  </div>
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Email Address</label>
                     <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-amber-500/50 transition-all font-medium"
                     />
                  </div>
               </div>
               <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500">{activeTab === 'prayer' ? 'Prayer Topic' : 'Subject'}</label>
                  <input
                     type="text"
                     placeholder={activeTab === 'prayer' ? "Healing, Strength, Guidance..." : "How can we help?"}
                     className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-amber-500/50 transition-all font-medium"
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500">{activeTab === 'prayer' ? 'Your Prayer' : 'Your message'}</label>
                  <textarea
                     rows={6}
                     placeholder="Tell us what's on your heart..."
                     className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-amber-500/50 transition-all font-medium resize-none"
                  ></textarea>
               </div>
               <button className="w-full bg-neutral-900 border-neutral-900 text-white px-8 py-6 rounded-[2rem] font-black text-xl hover:bg-amber-500 hover:text-neutral-900 transition-all flex items-center justify-center space-x-4 shadow-xl shadow-neutral-900/10 active:scale-95 group">
                  <span>{activeTab === 'prayer' ? 'Submit Prayer Request' : 'Send Message'}</span>
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
               </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
             {/* Map Placeholder */}
             <div className="aspect-video bg-neutral-100 rounded-[3rem] overflow-hidden relative border border-neutral-100 shadow-inner group">
                <div className="absolute inset-0 bg-neutral-200 animate-pulse group-hover:bg-neutral-100 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl text-amber-500">
                      <MapPin className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-black text-neutral-900 mb-2">Interactive Campus Map</h3>
                   <p className="text-neutral-500 font-medium max-w-xs mx-auto">Open in Google Maps for turn-by-turn directions to our locations.</p>
                </div>
             </div>

             <div className="space-y-10">
                <div className="flex items-center justify-between mb-2">
                   <h3 className="text-2xl font-black text-neutral-900 tracking-tight">Our Main Campuses</h3>
                   <Globe className="w-5 h-5 text-neutral-300" />
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                   {campuses.map((campus, i) => (
                     <div key={i} className="group p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-amber-200 transition-all hover:bg-white hover:shadow-xl">
                        <div className="flex items-start justify-between">
                           <div className="space-y-4">
                              <h4 className="text-xl font-bold text-neutral-900">{campus.name}</h4>
                              <div className="space-y-2">
                                 <div className="flex items-start space-x-3 text-sm text-neutral-500 font-medium">
                                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>{campus.address}</span>
                                 </div>
                                 <div className="flex items-center space-x-3 text-sm text-neutral-500 font-medium">
                                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span>{campus.phone}</span>
                                 </div>
                                 <div className="flex items-center space-x-3 text-sm text-neutral-500 font-medium">
                                    <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                                    <span>{campus.email}</span>
                                 </div>
                              </div>
                           </div>
                           <button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
                              <ChevronRight className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="p-10 bg-amber-500 rounded-[3rem] text-neutral-900">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                   <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-4">Pastoral Appointments</h3>
                <p className="text-neutral-900 font-bold opacity-80 leading-relaxed mb-8">Need specialized guidance? Our pastoral team is available for one-on-one sessions every Tuesday and Thursday.</p>
                <div className="flex items-center space-x-3 bg-neutral-900 text-white w-fit px-6 py-3 rounded-full font-bold text-sm cursor-pointer hover:scale-105 active:scale-95 transition-all">
                   <span>Book a Session</span>
                   <ChevronRight className="w-4 h-4" />
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
