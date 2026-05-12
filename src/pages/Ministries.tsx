import { motion } from 'motion/react';
import { Users, Heart, Star, BookOpen, Music, ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { CHURCH_NAME } from '../constants';

export default function Ministries() {
  const categories = [
    { name: "Children & Youth", icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10" },
    { name: "Worship & Arts", icon: Music, color: "text-brand-red", bg: "bg-brand-red/10" },
    { name: "Community Outreach", icon: Globe, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Education", icon: BookOpen, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Community", icon: Users, color: "text-neutral-900", bg: "bg-neutral-100" },
  ];

  const ministries = [
    { title: "Kingdom Kids", category: "Children & Youth", desc: "Nurturing the next generation in the love and ways of God through creativity and fun.", image: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2070&auto=format&fit=crop" },
    { title: "One Voice Worship", category: "Worship & Arts", desc: "A collective of musicians and artists dedicated to leading the church into deep worship.", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" },
    { title: "The Outreach Project", category: "Community Outreach", desc: "Our hands-on mission to provide for the needy and share the Gospel in underserved areas.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Foundation School", category: "Education", desc: "Equipping believers with solid biblical foundations for their walk with Christ.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" },
    { title: "Men of Valor", category: "Community", desc: "Building strong, godly men who lead their families and communities with integrity.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2073&auto=format&fit=crop" },
    { title: "Women of Excellence", category: "Community", desc: "Empowering women to walk in their God-given beauty, grace, and purpose.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
           <div className="max-w-2xl">
             <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red italic">Find Your Place</span>
             <h1 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-8 leading-[0.9] uppercase italic">
               Discover Your <br />
               <span className="text-brand-red">Call.</span>
             </h1>
             <p className="text-xl text-neutral-600 font-bold tracking-tight leading-relaxed">At {CHURCH_NAME}, ministry is not just about serving; it is about discovering your purpose and exercising your unique gifts for the glory of God.</p>
           </div>
           <div className="flex flex-wrap gap-4 justify-end">
              {categories.map((cat, i) => (
                <div key={i} className={cn("px-6 py-4 rounded-2xl flex items-center space-x-3 border font-black text-xs uppercase tracking-widest cursor-pointer hover:scale-105 transition-all shadow-sm italic", cat.bg, cat.color)}>
                   <cat.icon className="w-5 h-5" />
                   <span>{cat.name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {ministries.map((min, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group flex flex-col h-full overflow-hidden bg-white rounded-[3rem] border-2 border-neutral-100 hover:border-brand-red transition-all hover:shadow-[0_40px_80px_-20px_rgba(220,38,36,0.15)]"
             >
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                   <img
                     src={min.image}
                     alt={min.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-brand-red/40 transition-colors" />
                   <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/30">{min.category}</span>
                   </div>
                </div>
                <div className="p-10 flex flex-col justify-between flex-1">
                   <div>
                      <h3 className="text-3xl font-black text-neutral-900 group-hover:text-brand-red transition-colors mb-6 tracking-tight uppercase italic">{min.title}</h3>
                      <p className="text-neutral-500 font-bold leading-relaxed mb-10 text-sm">{min.desc}</p>
                   </div>
                   <div className="flex items-center justify-between mt-auto">
                      <button className="text-[10px] font-black uppercase tracking-widest text-neutral-900 bg-neutral-100 px-6 py-3 rounded-full hover:bg-brand-red hover:text-white transition-all shadow-sm italic">Learn More</button>
                      <div className="w-10 h-10 border border-neutral-100 rounded-full flex items-center justify-center text-neutral-300 group-hover:text-brand-red group-hover:border-brand-red transition-colors">
                         <ArrowUpRight className="w-5 h-5" />
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Volunteer CTA */}
        <section className="mt-40 p-20 bg-neutral-900 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl" />
           <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <Users className="w-12 h-12 text-brand-red mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none uppercase italic">Ready to <br /> Make a Difference?</h2>
              <p className="text-neutral-400 text-lg font-bold mb-12 italic tracking-tight">Whether you can serve once a week or once a month, we have a place for you to impact lives.</p>
              <button className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest italic">
                 Apply to Volunteer
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
