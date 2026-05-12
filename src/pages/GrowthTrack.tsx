import { motion } from 'motion/react';
import { Route, Map, Award, Users, ChevronRight, Zap, Target, Flame } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

export default function GrowthTrack() {
  const tracks = [
    {
      id: "Step 01",
      title: "Follow",
      desc: "Connect with the church and learn about our mission, vision, and core values.",
      icon: Zap,
      accent: "text-blue-500"
    },
    {
      id: "Step 02",
      title: "Discover",
      desc: "Uncover your unique spiritual gifts and see how your design reveals your purpose.",
      icon: Target,
      accent: "text-amber-500"
    },
    {
      id: "Step 03",
      title: "Develop",
      desc: "Learn how to practicalize your calling and grow in leadership skills.",
      icon: Users,
      accent: "text-emerald-500"
    },
    {
      id: "Step 04",
      title: "Deploy",
      desc: "Join a dream team and start making a difference in the lives of others.",
      icon: Flame,
      accent: "text-brand-red"
    }
  ];

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
           <div className="max-w-2xl">
             <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red italic">Purpose Pipeline</span>
             <h1 className="text-6xl md:text-[8rem] font-black text-neutral-900 tracking-tighter mb-8 leading-[0.8] uppercase italic">
               Growth <br />
               <span className="text-brand-red">Track.</span>
             </h1>
             <p className="text-xl text-neutral-600 font-bold tracking-tight italic">Growth Track is designed to help you take your next step in your relationship with God and find your place in the house of {CHURCH_NAME}.</p>
           </div>
           <div className="hidden lg:block shrink-0">
              <Award className="w-32 h-32 text-brand-red opacity-10" />
           </div>
        </div>

        {/* Timeline Desktop */}
        <div className="relative space-y-12">
           {/* Vertical Line */}
           <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-100 -translate-x-1/2 hidden md:block" />
           
           {tracks.map((track, i) => (
             <motion.div
               key={track.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
             >
                <div className="flex-1 w-full">
                   <div className={`p-10 bg-white rounded-[3rem] border-2 border-neutral-100 hover:border-brand-red transition-all hover:shadow-2xl relative group cursor-default`}>
                      <div className="flex items-center space-x-4 mb-6">
                         <span className="text-xs font-black uppercase tracking-widest text-brand-red italic">{track.id}</span>
                         <div className="h-0.5 flex-1 bg-neutral-100 group-hover:bg-brand-red/20 transition-colors" />
                      </div>
                      <h3 className="text-4xl font-black text-neutral-900 mb-6 uppercase italic tracking-tighter leading-none">{track.title}</h3>
                      <p className="text-neutral-500 font-bold text-lg italic tracking-tight mb-8">{track.desc}</p>
                      <button className="flex items-center space-x-2 text-neutral-900 font-black text-sm uppercase tracking-widest group-hover:text-brand-red transition-colors italic">
                         <span>Register Now</span>
                         <ChevronRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
                
                <div className="relative z-10 w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center border-4 border-white shadow-xl shadow-black/10 shrink-0 transform hover:scale-110 transition-transform">
                   <track.icon className={`w-8 h-8 ${track.accent}`} />
                </div>
                
                <div className="flex-1 hidden md:block" />
             </motion.div>
           ))}
        </div>

        {/* Next Steps CTA */}
        <section className="mt-40 p-20 bg-neutral-950 rounded-[4rem] text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">Become a <br /> <span className="text-brand-red">Dream Team</span> Member</h2>
              <p className="text-neutral-400 text-xl font-bold mb-12 italic tracking-tight">The ultimate goal of Growth Track is to equip you to serve others. Your calling is active, not passive.</p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                 <div className="text-left">
                    <p className="text-xs font-black uppercase tracking-widest text-brand-red italic mb-2">Next Session</p>
                    <p className="text-xl font-bold text-white tracking-tight italic">Sunday, June 14th @ 1:30 PM</p>
                 </div>
                 <button className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest italic">
                    Reserve My Seat
                 </button>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}
