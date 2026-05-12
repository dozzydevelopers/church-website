import { motion } from 'motion/react';
import { Sparkles, BookOpen, UserPlus, Heart, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

export default function NewBelievers() {
  const steps = [
    {
      title: "Salvation",
      desc: "Understand what it means to be saved and how to begin your new life in Christ.",
      icon: Sparkles,
      color: "bg-amber-500",
    },
    {
      title: "Water Baptism",
      desc: "Following the command of Jesus, a public declaration of your internal change.",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      title: "Holy Ghost",
      desc: "Being filled with power from on high to witness and live victoriously.",
      icon: Heart,
      color: "bg-red-500",
    }
  ];

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 border-l-4 border-brand-red text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 italic"
          >
            Welcome to the Family
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-black text-neutral-900 tracking-tighter mb-8 leading-[0.8] uppercase italic"
          >
            New <br />
            <span className="text-brand-red">Beginnings.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-2xl mx-auto font-bold tracking-tight italic"
          >
            If you just gave your life to Christ, you've made the most important decision of your life. We are here to walk with you.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 bg-white rounded-[3rem] border-2 border-neutral-100 hover:border-brand-red transition-all hover:shadow-[0_40px_80px_-20px_rgba(220,38,36,0.15)] flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black text-neutral-900 mb-6 uppercase italic tracking-tighter">{step.title}</h3>
              <p className="text-neutral-500 font-bold leading-relaxed italic">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="bg-neutral-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <UserPlus className="w-16 h-16 text-brand-red mx-auto mb-10" />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">Connect With <br /> A Mentor</h2>
              <p className="text-neutral-400 text-lg font-bold mb-12 italic tracking-tight">You don't have to figure this out alone. Join our First Steps class or request a spiritual mentor to guide you in these early days.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-brand-red text-white px-10 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest italic">
                  Join First Steps
                </button>
                <button className="bg-white text-neutral-900 px-10 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest italic">
                  Request Mentor
                </button>
              </div>
            </div>
        </section>

        {/* Resources for growth */}
        <div className="mt-40">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black text-neutral-900 uppercase italic tracking-tighter">Your Spirit Food</h2>
              <div className="w-20 h-1 bg-brand-red" />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex items-start space-x-6 group hover:bg-white hover:border-brand-red transition-all cursor-pointer">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <ShieldCheck className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black mb-2 uppercase italic">Bible Study Plan</h3>
                    <p className="text-neutral-500 font-bold text-sm italic">A 30-day journey through the Gospels to know Jesus better.</p>
                 </div>
              </div>
              <div className="p-10 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex items-start space-x-6 group hover:bg-white hover:border-brand-red transition-all cursor-pointer">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Star className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-xl font-black mb-2 uppercase italic">Prayer Essentials</h3>
                    <p className="text-neutral-500 font-bold text-sm italic">Learning how to talk to God and listen to His voice.</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
