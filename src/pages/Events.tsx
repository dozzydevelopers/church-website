import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Filter, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Conference', 'Worship Night', 'Youth', 'Outreach'];
  
  const events = [
    { title: "Victory Conference 2024", date: "May 24-26", time: "5 PM Daily", location: "Main Auditorium", category: "Conference", image: "https://images.unsplash.com/photo-1475721027187-402ad2989a38?q=80&w=2070&auto=format&fit=crop" },
    { title: "Deep Worship Night", date: "June 02", time: "6 PM", location: "Grace Hall", category: "Worship Night", image: "https://images.unsplash.com/photo-1511246011491-9b9fd3adcebc?q=80&w=2070&auto=format&fit=crop" },
    { title: "IGNITE Youth Camp", date: "July 12-15", time: "All Day", location: "Greenwood Retreat", category: "Youth", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" },
    { title: "Global Missions Week", date: "August 10-17", time: "9 AM Daily", location: "Multiple Venues", category: "Outreach", image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredEvents = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory);

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
           <div className="max-w-2xl">
             <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Join the Movement</span>
             <h1 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-8 leading-[0.9]">
               Upcoming <br />
               <span className="text-amber-500 italic">Moments.</span>
             </h1>
             <p className="text-xl text-neutral-600 font-medium">Gathering together to grow, worship, and change the world. See what's happening at Faith and Grace.</p>
           </div>
           
           <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                    activeCategory === cat ? "bg-neutral-900 text-white shadow-xl" : "bg-neutral-100 text-neutral-400 hover:bg-neutral-200"
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
           className="relative aspect-[21/9] md:aspect-[3/1] rounded-[3rem] overflow-hidden mb-20 shadow-2xl group cursor-pointer"
        >
           <img src={events[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/40 to-transparent flex items-center">
              <div className="p-12 md:p-20 max-w-2xl">
                 <div className="bg-amber-500 text-neutral-900 px-4 py-1 rounded text-[10px] font-black uppercase tracking-widest w-fit mb-6">Biggest Event of the Year</div>
                 <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">{events[0].title}</h2>
                 <div className="flex flex-wrap gap-6 text-white/70 font-bold text-sm mb-10">
                    <div className="flex items-center space-x-2">
                       <CalendarIcon className="w-4 h-4 text-amber-500" />
                       <span>{events[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                       <MapPin className="w-4 h-4 text-amber-500" />
                       <span>{events[0].location}</span>
                    </div>
                 </div>
                 <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-black flex items-center space-x-3 hover:bg-amber-500 transition-colors shadow-2xl shadow-black/20">
                    <span>Register Now</span>
                    <ArrowRight className="w-5 h-5" />
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
               className="group flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all"
             >
                <div className="md:w-64 h-64 md:h-auto shrink-0 overflow-hidden">
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 flex flex-col justify-between">
                   <div>
                      <div className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-4">{event.date}</div>
                      <h3 className="text-3xl font-black text-neutral-900 mb-4 tracking-tight leading-tight">{event.title}</h3>
                      <div className="space-y-2 mb-8">
                         <div className="flex items-center space-x-2 text-sm text-neutral-400 font-medium">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                         </div>
                         <div className="flex items-center space-x-2 text-sm text-neutral-400 font-medium">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                         </div>
                      </div>
                   </div>
                   <button className="w-full bg-neutral-900 text-white px-6 py-4 rounded-2xl font-black flex items-center justify-center space-x-3 hover:bg-amber-500 hover:text-neutral-900 transition-all">
                      <span>Reserve Your Spot</span>
                      <UserPlus className="w-4 h-4" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Calendar View Placeholder */}
        <div className="mt-40 p-20 bg-neutral-50 rounded-[4rem] text-center border border-neutral-100">
           <h2 className="text-4xl font-black text-neutral-900 mb-12 tracking-tight">Interactive Calendar</h2>
           <div className="bg-white rounded-[3rem] p-12 shadow-inner border border-neutral-100">
              <div className="flex items-center justify-between mb-16 px-4">
                 <h3 className="text-3xl font-black text-neutral-900">May 2024</h3>
                 <div className="flex space-x-4">
                    <button className="p-3 bg-neutral-50 rounded-full hover:bg-amber-500 hover:text-white transition-all"><ChevronLeft className="w-6 h-6" /></button>
                    <button className="p-3 bg-neutral-50 rounded-full hover:bg-amber-500 hover:text-white transition-all"><ChevronRight className="w-6 h-6" /></button>
                 </div>
              </div>
              
              <div className="grid grid-cols-7 gap-4 text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-8 px-4">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
              </div>
              
              <div className="grid grid-cols-7 gap-4">
                 {Array.from({length: 31}).map((_, i) => (
                   <div key={i} className={cn(
                     "aspect-square rounded-2xl flex flex-col items-center justify-center font-bold text-lg relative group transition-all cursor-pointer",
                     i + 1 === 24 ? "bg-amber-500 text-neutral-900 shadow-xl shadow-amber-500/30 scale-110" : "bg-neutral-50 text-neutral-400 hover:bg-white hover:shadow-md hover:text-neutral-900 border border-transparent hover:border-neutral-100"
                   )}>
                      {i + 1}
                      {i + 1 === 24 && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />}
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
