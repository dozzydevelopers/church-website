import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { CHURCH_NAME } from '../constants';
import { cn } from '../lib/utils';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'info' | 'prayer'>('info');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const headquarters = [
    { name: "Headquarters", address: "No 12 Remilekun Bankole Street, By Arida Bus-Stop, Ikotun", phone: "+234 818 136 7118, 0803 540 6735", email: "info@faithandgrace.com", lat: 6.5492, lng: 3.2568 },
  ];

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red italic">Connect With Grace</span>
          <h1 className="text-6xl md:text-[8rem] font-black text-neutral-900 tracking-tighter mb-8 leading-[0.8] uppercase italic">
            Faith & <br />
            <span className="text-brand-red">Grace.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-bold tracking-tight">Your testimony is one message away. Reach out to the Faith Altar for prayer, partnership, or global expressions. God of Wonders!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Form Side */}
          <div>
            <div className="flex items-center space-x-6 mb-12 border-b border-neutral-100 pb-2">
               <button
                  onClick={() => setActiveTab('info')}
                  className={cn("pb-4 text-[10px] font-black uppercase tracking-[0.15em] transition-all relative italic", activeTab === 'info' ? "text-neutral-900 border-b-4 border-brand-red" : "text-neutral-400")}
               >
                 General Inquiry
               </button>
               <button
                  onClick={() => setActiveTab('prayer')}
                  className={cn("pb-4 text-[10px] font-black uppercase tracking-[0.15em] transition-all relative italic", activeTab === 'prayer' ? "text-neutral-900 border-b-4 border-brand-red" : "text-neutral-400")}
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
                        className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-brand-red/50 transition-all font-medium"
                     />
                  </div>
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase tracking-widest text-neutral-500">Email Address</label>
                     <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-brand-red/50 transition-all font-medium"
                     />
                  </div>
               </div>
               <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500">{activeTab === 'prayer' ? 'Prayer Topic' : 'Subject'}</label>
                  <input
                     type="text"
                     placeholder={activeTab === 'prayer' ? "Healing, Strength, Guidance..." : "How can we help?"}
                     className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-brand-red/50 transition-all font-medium"
                  />
               </div>
               <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-neutral-500">{activeTab === 'prayer' ? 'Your Prayer' : 'Your message'}</label>
                  <textarea
                     rows={6}
                     placeholder="Tell us what's on your heart..."
                     className="w-full bg-neutral-100 border-none rounded-2xl py-5 px-6 focus:ring-2 focus:ring-brand-red/50 transition-all font-medium resize-none"
                  ></textarea>
               </div>
                <button className="w-full bg-neutral-900 border-neutral-900 text-white px-8 py-6 rounded-[2rem] font-black text-2xl uppercase italic tracking-widest hover:bg-brand-red hover:shadow-[0_30px_60px_-12px_rgba(220,38,36,0.3)] transition-all flex items-center justify-center space-x-6 shadow-2xl active:scale-95 group">
                  <span>{activeTab === 'prayer' ? 'Release the Faith' : 'Send Message'}</span>
                  <Send className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-12">
             {/* Map Placeholder */}
             <div className="aspect-video bg-neutral-900 rounded-[3rem] overflow-hidden relative border border-white/10 shadow-2xl group border-2 hover:border-brand-red transition-all">
                <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm group-hover:bg-neutral-950/60 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                   <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mb-6 shadow-2xl text-white animate-pulse">
                      <MapPin className="w-10 h-10" />
                   </div>
                   <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Global Faith Map</h3>
                   <p className="text-neutral-400 font-bold max-w-xs mx-auto text-sm uppercase tracking-widest">Connect to your nearest Altar of Grace.</p>
                </div>
             </div>

             <div className="space-y-10">
                <div className="flex items-center justify-between mb-2 px-4">
                   <h3 className="text-2xl font-black text-neutral-900 tracking-tight uppercase italic">Our Headquarters</h3>
                   <Globe className="w-5 h-5 text-brand-red border border-brand-red rounded p-1 box-content" />
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                   {headquarters.map((campus, i) => (
                     <div key={i} className="group p-8 rounded-[2.5rem] bg-neutral-50 border-2 border-neutral-100 hover:border-brand-red transition-all hover:bg-white hover:shadow-2xl">
                        <div className="flex items-start justify-between">
                           <div className="space-y-4">
                              <h4 className="text-xl font-bold text-neutral-900 uppercase italic tracking-tighter">{campus.name}</h4>
                              <div className="space-y-2">
                                 <div className="flex items-start space-x-3 text-sm text-neutral-500 font-bold italic tracking-tight">
                                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                                    <span>{campus.address}</span>
                                 </div>
                                 <div className="flex items-center space-x-3 text-sm text-neutral-500 font-bold italic tracking-tight">
                                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                                    <span>{campus.phone}</span>
                                 </div>
                                 <div className="flex items-center space-x-3 text-sm text-neutral-500 font-bold italic tracking-tight">
                                    <Mail className="w-4 h-4 text-brand-red shrink-0" />
                                    <span>{campus.email}</span>
                                 </div>
                              </div>
                           </div>
                           <button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all">
                              <ChevronRight className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

              <div className="p-12 bg-black text-white rounded-[3rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-10 opacity-10 text-8xl font-black italic select-none translate-x-1/4 -translate-y-1/4">FAITH</div>
                 <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-4xl font-black mb-6 uppercase italic tracking-tighter">Prophetic Counseling</h3>
                 <p className="text-neutral-400 font-bold leading-relaxed mb-10 text-lg italic tracking-tight">Seeking a word from the Lord? Our prophetic team is available for spiritual consultation and direction.</p>
                 <div className="flex items-center space-x-4 bg-brand-red text-white w-fit px-10 py-5 rounded-full font-black text-lg cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase italic tracking-widest">
                    <span>Book Your Turn</span>
                    <ChevronRight className="w-6 h-6" />
                 </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
}
