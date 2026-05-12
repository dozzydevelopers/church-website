import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Filter, ChevronLeft, ChevronRight, UserPlus, X, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const categories = ['All', 'Conference', 'Worship Night', 'Youth', 'Outreach'];
  
  const events = [
    { title: "Victory Conference 2026", date: "May 24-26", time: "5 PM Daily", location: "Ikotun Main Auditorium", category: "Conference", image: "https://images.unsplash.com/photo-1475721027187-402ad2989a38?q=80&w=2070&auto=format&fit=crop" },
    { title: "Deep Worship Night", date: "June 02", time: "6 PM", location: "Grace Sanctuary", category: "Worship Night", image: "https://images.unsplash.com/photo-1511246011491-9b9fd3adcebc?q=80&w=2070&auto=format&fit=crop" },
    { title: "IGNITE Youth Camp", date: "July 12-15", time: "All Day", location: "Prayer City", category: "Youth", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
    { title: "Global Missions Week", date: "August 10-17", time: "9 AM Daily", location: "Regional Centers", category: "Outreach", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredEvents = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory);

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
           <div className="max-w-2xl">
             <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-6 inline-block px-4 py-1 border-l-4 border-brand-red italic">Global Gatherings</span>
             <h1 className="text-6xl md:text-[8rem] font-black text-neutral-900 tracking-tighter mb-8 leading-[0.8] uppercase italic">
               Holy <br />
               <span className="text-brand-red">Moments.</span>
             </h1>
             <p className="text-xl text-neutral-600 font-bold tracking-tight leading-relaxed italic">Experience God's power at any of our global expressions. <br className="hidden md:block" /> God of Wonders!</p>
           </div>
           
           <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic",
                    activeCategory === cat ? "bg-brand-red text-white shadow-2xl shadow-brand-red/30 scale-105" : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
                  )}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Featured Event */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-[21/9] md:aspect-[3/1] rounded-[3rem] overflow-hidden mb-20 shadow-[0_50px_100px_-20px_rgba(220,38,36,0.15)] group cursor-pointer border-2 border-transparent hover:border-brand-red transition-all"
        >
           <img src={events[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent flex items-center">
              <div className="p-12 md:p-20 max-w-3xl">
                 <div className="bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] w-fit mb-8 italic shadow-2xl">GLOBAL HIGHLIGHT</div>
                 <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] uppercase italic">{events[0].title}</h2>
                 <div className="flex flex-wrap gap-10 text-white/70 font-black uppercase tracking-widest text-xs mb-10 italic">
                    <div className="flex items-center space-x-3">
                       <CalendarIcon className="w-5 h-5 text-brand-red" />
                       <span>{events[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <MapPin className="w-5 h-5 text-brand-red" />
                       <span>{events[0].location}</span>
                    </div>
                 </div>
                 <button 
                    onClick={() => {
                      setSelectedEvent(events[0].title);
                      setIsModalOpen(true);
                    }}
                    className="bg-white text-neutral-900 px-10 py-5 rounded-full font-black flex items-center space-x-4 hover:scale-110 hover:bg-brand-red hover:text-white transition-all shadow-2xl shadow-black/50 uppercase italic text-lg tracking-widest"
                  >
                    <span>Secure Your Spot</span>
                    <ArrowRight className="w-6 h-6" />
                 </button>
              </div>
           </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {filteredEvents.slice(1).map((event, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden border-2 border-neutral-100 hover:border-brand-red hover:shadow-[0_40px_80px_-20px_rgba(220,38,36,0.1)] transition-all"
             >
                <div className="md:w-64 h-64 md:h-auto shrink-0 overflow-hidden">
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 flex flex-col justify-between">
                   <div>
                      <div className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px] mb-4 italic">{event.date}</div>
                      <h3 className="text-3xl font-black text-neutral-900 mb-6 tracking-tight leading-tight uppercase italic">{event.title}</h3>
                      <div className="space-y-3 mb-10">
                         <div className="flex items-center space-x-3 text-sm text-neutral-500 font-bold tracking-tight italic">
                            <Clock className="w-4 h-4 text-brand-red" />
                            <span>{event.time}</span>
                         </div>
                         <div className="flex items-center space-x-3 text-sm text-neutral-500 font-bold tracking-tight italic">
                            <MapPin className="w-4 h-4 text-brand-red" />
                            <span>{event.location}</span>
                         </div>
                      </div>
                   </div>
                   <button 
                      onClick={() => {
                        setSelectedEvent(event.title);
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-neutral-100 text-neutral-900 px-6 py-4 rounded-2xl font-black flex items-center justify-center space-x-3 hover:bg-brand-red hover:text-white transition-all uppercase italic tracking-widest text-xs"
                    >
                       <span>Reserve Your Spot</span>
                       <UserPlus className="w-4 h-4" />
                    </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Calendar View Placeholder */}
        <div className="mt-40 p-20 bg-neutral-900 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -mr-48 -mt-48" />
           <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter uppercase italic relative z-10">Interactive <br /> Calendar</h2>
           <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-neutral-800 relative z-10">
              <div className="flex items-center justify-between mb-16 px-4">
                 <h3 className="text-3xl font-black text-neutral-900 uppercase italic tracking-tighter">May 2026</h3>
                 <div className="flex space-x-4">
                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-brand-red hover:text-white transition-all"><ChevronLeft className="w-6 h-6" /></button>
                    <button className="p-3 bg-neutral-100 rounded-full hover:bg-brand-red hover:text-white transition-all"><ChevronRight className="w-6 h-6" /></button>
                 </div>
              </div>
              
              <div className="grid grid-cols-7 gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-10 px-4 italic">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                 {Array.from({length: 31}).map((_, i) => (
                   <div key={i} className={cn(
                     "aspect-square rounded-2xl flex flex-col items-center justify-center font-black text-lg relative group transition-all cursor-pointer",
                     i + 1 === 24 ? "bg-brand-red text-white shadow-2xl shadow-brand-red/40 scale-110" : "bg-neutral-50 text-neutral-400 hover:bg-white hover:shadow-xl hover:text-neutral-900 border-2 border-transparent hover:border-brand-red/20"
                   )}>
                      {i + 1}
                      {i + 1 === 24 && <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-brand-red animate-pulse" />}
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  if (formStatus !== 'submitting') setIsModalOpen(false);
                }}
                className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative max-w-xl w-full bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 p-3 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-400" />
                </button>

                {formStatus === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-4xl font-black text-neutral-900 uppercase italic tracking-tighter mb-4">Spot Secured!</h2>
                    <p className="text-neutral-500 font-bold mb-10 italic">We've sent a confirmation to your email. <br /> God of Wonders!</p>
                    <button 
                      onClick={() => {
                        setIsModalOpen(false);
                        setFormStatus('idle');
                      }}
                      className="w-full bg-brand-red text-white py-5 rounded-full font-black uppercase italic tracking-widest transition-all hover:scale-105"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 inline-block px-4 py-1 border-l-4 border-brand-red italic">Reservation</span>
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 uppercase italic tracking-tighter mb-10 leading-none">Holy <br /> <span className="text-brand-red">Reservation.</span></h2>
                    
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormStatus('submitting');
                        // Simulate API call
                        setTimeout(() => setFormStatus('success'), 1500);
                      }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4 italic">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold text-neutral-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4 italic">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold text-neutral-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4 italic">Selected Event</label>
                        <div className="relative">
                          <select 
                            required
                            value={selectedEvent || ''}
                            onChange={(e) => setSelectedEvent(e.target.value)}
                            className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 focus:border-brand-red focus:bg-white outline-none transition-all font-bold text-neutral-900 appearance-none italic"
                          >
                            <option value="" disabled>Select an event</option>
                            {events.map((e) => (
                              <option key={e.title} value={e.title}>{e.title}</option>
                            ))}
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            <Clock className="w-4 h-4 text-brand-red" />
                          </div>
                        </div>
                      </div>

                      <button 
                        disabled={formStatus === 'submitting'}
                        type="submit" 
                        className="w-full bg-neutral-900 text-white py-6 rounded-3xl font-black text-xl uppercase italic tracking-widest hover:bg-brand-red transition-all flex items-center justify-center space-x-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] disabled:opacity-50"
                      >
                        {formStatus === 'submitting' ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Reserve Spot</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
