import { motion } from 'motion/react';
import { Heart, Landmark, Smartphone, CreditCard, ChevronRight, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { CHURCH_NAME } from '../constants';
import { cn } from '../lib/utils';

export default function Give() {
  const goals = [
    { title: "Building Project Phase II", current: 750000, target: 1000000, color: "bg-amber-500" },
    { title: "Outreach 2024 Fund", current: 45000, target: 100000, color: "bg-blue-500" },
    { title: "Global Missions", current: 120000, target: 200000, color: "bg-green-500" },
  ];

  const paymentMethods = [
    { name: "Online Payment", desc: "Securely give via Card or Apple/Google Pay", icon: CreditCard },
    { name: "Bank Transfer", desc: "Direct deposit to our bank accounts", icon: Landmark },
    { name: "Mobile Money", desc: "Instant transfer via mobile wallets", icon: Smartphone },
  ];

  return (
    <div className="pt-32 pb-40 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 inline-block"
          >
            Faithful Stewardship
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-8 leading-[0.9]"
          >
            Giving with <br />
            <span className="text-amber-500 italic text-4xl md:text-7xl block md:inline">Purpose & Joy.</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium"
          >
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Donation Progress */}
          <div className="lg:col-span-2 space-y-12">
             <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100">
                <div className="flex items-center justify-between mb-10">
                   <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Current Vision Goals</h2>
                   <TrendingUp className="w-6 h-6 text-amber-500" />
                </div>
                
                <div className="space-y-10">
                   {goals.map((goal, i) => {
                     const progress = (goal.current / goal.target) * 100;
                     return (
                       <div key={i} className="space-y-4">
                          <div className="flex justify-between items-end">
                             <div>
                                <h4 className="font-bold text-neutral-900">{goal.title}</h4>
                                <p className="text-xs text-neutral-500 font-bold uppercase tracking-widest mt-1">Goal: £{goal.target.toLocaleString()}</p>
                             </div>
                             <div className="text-right">
                                <span className="text-2xl font-black text-neutral-900">{progress.toFixed(0)}%</span>
                             </div>
                          </div>
                          <div className="h-4 bg-neutral-100 rounded-full overflow-hidden border border-neutral-100/50">
                             <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progress}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className={cn("h-full rounded-full shadow-lg", goal.color)}
                             />
                          </div>
                          <p className="text-xs text-neutral-400 font-medium">Raised: £{goal.current.toLocaleString()}</p>
                       </div>
                     );
                   })}
                </div>
             </div>

             <div className="bg-neutral-900 p-10 rounded-[3rem] text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                   <Heart className="w-64 h-64 text-amber-500 fill-current" />
                </div>
                <div className="relative z-10">
                   <h2 className="text-3xl font-black mb-6 tracking-tight">Become a Ministry Partner</h2>
                   <p className="text-neutral-400 text-lg mb-10 max-w-xl leading-relaxed">Join a group of dedicated individuals who commit to supporting the global vision of {CHURCH_NAME} with regular monthly giving. Your partnership enables us to reach more lives than ever before.</p>
                   <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-black hover:bg-amber-100 transition-all flex items-center space-x-3 shadow-xl shadow-white/5">
                      <span>Learn About Partnership</span>
                      <ChevronRight className="w-5 h-5" />
                   </button>
                </div>
             </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-neutral-100">
                <h3 className="font-black text-xl mb-8 tracking-tight">Select Payment Method</h3>
                <div className="space-y-4">
                   {paymentMethods.map((method, i) => (
                     <div key={i} className="group p-6 rounded-2xl border border-neutral-100 hover:border-amber-500 cursor-pointer transition-all hover:bg-amber-50/50">
                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                              <method.icon className="w-6 h-6" />
                           </div>
                           <div className="flex-1">
                              <p className="font-bold text-neutral-900">{method.name}</p>
                              <p className="text-xs text-neutral-500 font-medium">{method.desc}</p>
                           </div>
                           <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-amber-500/10 border border-amber-500/20 p-8 rounded-[2.5rem]">
                <div className="flex items-center space-x-3 mb-6">
                   <ShieldCheck className="w-6 h-6 text-amber-500" />
                   <h4 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">Secure Giving</h4>
                </div>
                <p className="text-sm text-neutral-600 font-medium leading-relaxed">All transactions are encrypted and secured. We use industry-standard payment processors to ensure your data is always protected.</p>
             </div>

             <div className="text-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Supported Systems</p>
                <div className="flex justify-center flex-wrap gap-4">
                   {/* Icons representation */}
                   <div className="w-8 h-8 bg-neutral-200 rounded" />
                   <div className="w-8 h-8 bg-neutral-200 rounded" />
                   <div className="w-8 h-8 bg-neutral-200 rounded" />
                   <div className="w-8 h-8 bg-neutral-200 rounded" />
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
