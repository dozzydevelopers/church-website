import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { CHURCH_NAME, IMAGES } from '../constants';

export default function About() {
  const values = [
    { title: "Faith", desc: "We believe in the unwavering power of faith in God and His Word.", icon: Target },
    { title: "Excellence", desc: "We strive for excellence in everything we do, reflecting God's glory.", icon: Shield },
    { title: "Community", desc: "We are a family, growing together and supporting one another.", icon: Users },
    { title: "Worship", desc: "Our lives are a continuous expression of worship to our Creator.", icon: Heart },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img src={IMAGES.community} alt="History" className="w-full h-full object-cover opacity-30 grayscale" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-500 text-xs font-bold tracking-widest uppercase mb-8"
          >
            Since 1996
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.8]"
          >
            Built on the <br />
            <span className="text-amber-500 italic">Rock.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed"
          >
            From a small living room gathering to a global movement, our story is a testament to God's faithfulness and the power of a shared vision.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 bg-neutral-50 rounded-[4rem] border border-neutral-100"
            >
               <Eye className="w-12 h-12 text-amber-500 mb-8" />
               <h2 className="text-4xl font-black text-neutral-900 mb-6 tracking-tight">Our Vision</h2>
               <p className="text-xl text-neutral-600 leading-relaxed font-medium">To raise a generation of leaders who will influence their world through the power of the Gospel and the excellence of their characters.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-16 bg-amber-500 rounded-[4rem] text-neutral-950 shadow-2xl shadow-amber-500/20"
            >
               <Target className="w-12 h-12 text-white mb-8" />
               <h2 className="text-4xl font-black mb-6 tracking-tight">Our Mission</h2>
               <p className="text-xl text-neutral-900 font-bold leading-relaxed opacity-90">Transforming lives through the message of Grace, and equipping believers to possess their inheritance in Christ Jesus.</p>
            </motion.div>
         </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-neutral-50 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">The Faith & Grace Way</span>
               <h2 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter">Our Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {values.map((value, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="text-center group"
                 >
                    <div className="w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center mx-auto mb-8 border border-neutral-100 group-hover:scale-110 group-hover:border-amber-500 transition-all duration-500">
                       <value.icon className="w-10 h-10 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-4">{value.title}</h3>
                    <p className="text-neutral-500 font-medium">{value.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
               <div className="max-w-2xl">
                 <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Global Shepherd</span>
                 <h2 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter">Leadership.</h2>
               </div>
               <p className="text-neutral-500 font-medium max-w-sm mb-4 leading-relaxed">Dedicated to serving the flock and stewarding the vision God has placed in our hearts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
               {[1, 2, 3].map((i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="group cursor-pointer"
                 >
                    <div className="aspect-[4/5] bg-neutral-100 rounded-[3rem] overflow-hidden mb-8 relative">
                       <img
                         src={i === 1 ? IMAGES.pastor : `https://images.unsplash.com/photo-${i === 2 ? '1548142813-c348350df52b' : '1544005313-94ddf0286df2'}?q=80&w=2070&auto=format&fit=crop`}
                         alt="Leader"
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 group-hover:text-amber-500 transition-colors">{i === 1 ? 'Pastor David Stone' : i === 2 ? 'Pastor Maria Elena' : 'Rev. Julian Thorne'}</h3>
                    <p className="text-neutral-400 font-bold uppercase tracking-widest text-xs mt-1">{i === 1 ? 'Founding Pastor' : i === 2 ? 'Lead Pastor, Lagos' : 'Global Outreach Director'}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* History Timeline CTA */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-black mb-8">We are just getting started.</h2>
            <p className="text-neutral-400 text-lg mb-12">Be part of the next chapter of our story. Discover how you can find your place in our family.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="w-full sm:w-auto bg-amber-500 text-neutral-950 px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 hover:scale-105 transition-all">
                  <span>Visit a Service</span>
                  <ArrowRight className="w-5 h-5" />
               </button>
               <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 hover:scale-105 transition-all">
                  <span>Join a LifeGroup</span>
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
