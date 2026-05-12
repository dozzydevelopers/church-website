import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { CHURCH_NAME, IMAGES } from '../constants';
import { useDynamicImage } from '../hooks/useDynamicImage';

export default function About() {
  const { url: goPortraitUrl } = useDynamicImage('go_portrait', 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop');
  
  const values = [
    { title: "Faith", desc: "We believe in the unwavering power of faith in God and His Word.", icon: Target },
    { title: "Excellence", desc: "We strive for excellence in everything we do, reflecting God's glory.", icon: Shield },
    { title: "Community", desc: "We are a family, growing together and supporting one another.", icon: Users },
    { title: "Worship", desc: "Our lives are a continuous expression of worship to our Creator.", icon: Heart },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src={IMAGES.community} alt="History" className="w-full h-full object-cover opacity-20 grayscale" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-brand-red text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 rounded-full shadow-2xl shadow-brand-red/50"
          >
            ESTABLISHED IN GRACE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-black text-white tracking-tighter mb-8 leading-[0.8] uppercase italic"
          >
            A Story of <br />
            <span className="text-brand-red">Faith.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed"
          >
            From a prophetic whisper to a global faith altar, our journey is defined by the one tagline: God of Wonders!
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-white font-display overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 bg-neutral-900 rounded-[3rem] text-white overflow-hidden relative group"
            >
               <Eye className="w-16 h-16 text-brand-red mb-10 group-hover:scale-110 transition-transform" />
               <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase italic">Our Vision</h2>
               <p className="text-2xl text-neutral-300 leading-tight font-medium">To establish an altar of faith where lives are delivered, souls are saved, and the extraordinary power of God is made manifest globally.</p>
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[10rem] font-black italic select-none">VISION</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 bg-brand-red rounded-[3rem] text-white shadow-[0_50px_100px_-20px_rgba(220,38,36,0.5)] relative overflow-hidden group"
            >
               <Target className="w-16 h-16 text-white mb-10 group-hover:scale-110 transition-transform" />
               <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase italic">Our Mission</h2>
               <p className="text-2xl text-white leading-tight font-black">Preparing a people for the second coming of Christ through intense prayer, prophetic guidance, and the word of deliverance.</p>
               <div className="absolute bottom-0 right-0 p-8 opacity-10 text-[10rem] font-black italic select-none translate-y-1/2">MISSION</div>
            </motion.div>
         </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-neutral-950 text-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-8 inline-block italic">The Spirit of Excellence</span>
               <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">Our Core <span className="text-brand-red">Values.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-brand-red transition-all group overflow-hidden relative"
                 >
                    <div className="relative z-10">
                       <value.icon className="w-12 h-12 text-brand-red group-hover:text-white mb-10 transition-colors" />
                       <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tight">{value.title}</h3>
                       <p className="text-neutral-400 group-hover:text-white/80 font-medium">{value.desc}</p>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform">
                       <value.icon className="w-24 h-24 text-white" />
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 font-display">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
               <div className="max-w-3xl">
                 <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block">The Watchmen</span>
                 <h2 className="text-6xl md:text-9xl font-black text-neutral-900 tracking-tighter uppercase italic leading-none">Global <br /> <span className="text-brand-red">Stewards.</span></h2>
               </div>
               <p className="text-neutral-500 font-bold max-w-sm mb-4 leading-relaxed uppercase tracking-widest text-[10px]">Chosen by Grace, commissioned for the nations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[
                 { name: "Pastor Jerry I. Akabuike", role: "General Overseer", img: goPortraitUrl },
                 { name: "Pastor Chukwudi Michael", role: "Assistant Pastor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
                 { name: "Apostle John Nzeadibe", role: "Apostle in Church", img: "https://images.unsplash.com/photo-1504194081510-4351639739b6?q=80&w=1974&auto=format&fit=crop" }
               ].map((leader, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group"
                 >
                    <div className="aspect-[4/5] bg-neutral-900 rounded-[2.5rem] overflow-hidden mb-10 relative shadow-2xl">
                       <img
                         src={leader.img}
                         alt={leader.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] grayscale group-hover:grayscale-0"
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                    <h3 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tight group-hover:text-brand-red transition-colors leading-none">{leader.name}</h3>
                    <p className="text-neutral-400 font-black uppercase tracking-[0.2em] text-[10px] mt-4">{leader.role}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* History Timeline CTA */}
      <section className="py-24 md:py-48 bg-brand-red text-white overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-none">The Best is <br /> <span className="text-neutral-900">Right Now!</span></h2>
            <p className="text-white/80 text-xl font-bold mb-16 tracking-tight">Your life is the next testimony waiting to happen. Step into your season.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="w-full sm:w-auto bg-white text-brand-red px-12 py-6 rounded-full font-black flex items-center justify-center space-x-4 hover:scale-110 transition-all shadow-2xl uppercase italic text-xl">
                  <span>Visit a Service</span>
                  <ArrowRight className="w-6 h-6" />
               </button>
               <button className="w-full sm:w-auto bg-neutral-900 text-white px-12 py-6 rounded-full font-black flex items-center justify-center space-x-4 hover:scale-110 transition-all shadow-2xl uppercase italic text-xl">
                  <span>Join a FaithCell</span>
               </button>
            </div>
         </div>
         <div className="absolute inset-x-0 bottom-0 opacity-10 text-[20rem] font-black italic tracking-tighter select-none pointer-events-none translate-y-1/2">SEASON</div>
      </section>
    </div>
  );
}
