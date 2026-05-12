import { motion } from 'motion/react';
import { Play, ArrowRight, Calendar, Users, Heart, MapPin, ChevronRight, Quote, Music, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHURCH_NAME, CHURCH_TAGLINE, IMAGES, SERVICE_TIMES } from '../constants';
import { cn } from '../lib/utils';
import { useDynamicImage } from '../hooks/useDynamicImage';

export default function Home() {
  const { url: heroUrl } = useDynamicImage('home_hero', 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop');
  const { url: goPortraitUrl } = useDynamicImage('go_portrait', 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop');

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroUrl}
            alt="Worship Atmosphere"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-brand-red text-white text-xs font-black tracking-[0.3em] uppercase mb-8 rounded-full shadow-2xl shadow-brand-red/50"
            >
              {CHURCH_NAME} Presents
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 max-w-6xl mx-auto uppercase italic">
              {CHURCH_TAGLINE.split(' ').map((word, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className={cn(
                    "inline-block mr-4",
                    word.toLowerCase() === "cannot" && "text-brand-red drop-shadow-[0_0_30px_rgba(220,38,36,0.5)]"
                  )}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 font-medium tracking-tight"
            >
              Experience the faith of prayer and the manifestation of God's power at our sanctuary. Your season of Joy has arrived.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/live"
                className="w-full sm:w-auto flex items-center justify-center space-x-4 bg-white text-black hover:bg-brand-red hover:text-white px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-110 active:scale-95 shadow-2xl group"
              >
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play className="w-5 h-5 fill-current text-white group-hover:text-brand-red" />
                </div>
                <span>WATCH LIVE</span>
              </Link>
              <Link
                to="/events"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 px-10 py-5 rounded-full text-white font-black text-lg transition-all"
              >
                <Calendar className="w-6 h-6" />
                <span>UPCOMING EVENTS</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating "Faith" Elements or Badges */}
        <div className="absolute bottom-10 right-10 z-20 hidden lg:block">
           <div className="bg-brand-red/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl rotate-3">
              <p className="text-white font-black text-sm uppercase tracking-widest mb-1 italic">Now Trending</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-none">Global Testimony Day</p>
           </div>
        </div>
      </section>

      {/* Weekly Activities Highlights */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 font-display">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
              <div className="max-w-2xl">
                 <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 leading-none uppercase">
                    Weekly <br />
                    <span className="text-brand-red">Activities.</span>
                 </h2>
                 <p className="text-xl text-neutral-400 font-bold italic">Join us as we wait on the Lord and activate the faith of the Holy Spirit.</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="text-right">
                    <p className="text-4xl font-black text-white uppercase italic">Sunday</p>
                    <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">8:00 AM - 11:30 AM</p>
                 </div>
                 <div className="w-16 h-16 border-2 border-brand-red rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-brand-red rounded-full" />
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Bible Study", time: "Tue | 6:00 PM - 7:30 PM", desc: "Digging deep into the word of life to grow in grace.", icon: BookOpen },
                { title: "Counseling Day", time: "Thu | 10:00 AM - 4:00 PM", desc: "Spiritual guidance and prophetic direction for your life.", icon: Users },
                { title: "Night Vigil", time: "Last Fri | 10:00 PM - 5:00 AM", desc: "Intense prayer and deliverance at the altar of faith.", icon: Play },
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-white/5 border-2 border-white/10 rounded-[3rem] hover:bg-brand-red transition-all cursor-default overflow-hidden relative">
                   <div className="relative z-10">
                      <div className="text-xs font-black text-brand-red group-hover:text-white mb-4 uppercase tracking-[0.2em] italic">{item.time}</div>
                      <h3 className="text-3xl font-black mb-4 uppercase italic leading-none">{item.title}</h3>
                      <p className="text-neutral-400 group-hover:text-white/80 font-bold italic leading-relaxed">{item.desc}</p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform">
                      <item.icon className="w-32 h-32 text-white" />
                   </div>
                </div>
              ))}
           </div>
        </div>
        
        {/* Background Text Shadow */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap">
           <p className="text-[30rem] font-black italic uppercase tracking-tighter leading-none">FAITH FAITH FAITH</p>
        </div>
      </section>

      {/* Pastor Intro Redesign */}
      <section className="py-24 md:py-40 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative z-10 group">
              <img
                src={goPortraitUrl}
                alt="General Overseer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 text-white">
                 <p className="text-3xl font-black uppercase italic tracking-tighter mb-1 leading-none">Pastor Jerry I. Akabuike</p>
                 <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">General Overseer</p>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-red/10 rounded-full border border-brand-red/20 flex items-center justify-center backdrop-blur-sm -z-0">
               <p className="text-brand-red font-black text-center text-xs tracking-widest uppercase">Streams <br /> of <br /> Grace</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red">The Visionary</span>
            <h2 className="text-5xl md:text-8xl font-black text-neutral-900 leading-[0.85] mb-10 tracking-tighter uppercase italic">
              A Watchman for the <br />
              <span className="text-brand-red">Nations.</span>
            </h2>
            <div className="space-y-8 text-xl text-neutral-600 leading-relaxed font-medium">
              <p>Pastor Jerry I. Akabuike is a passionate preacher, a visionary leader, and a General Overseer dedicated to the spiritual growth and deliverance of the people. His ministry is marked by an extraordinary manifestation of the prophetic and a deep commitment to seeing people walk in the reality of God's Word.</p>
              <p>With a heart for the broken and a faith for the gospel, he continues to lead {CHURCH_NAME} into a new era of spiritual awakening and global impact.</p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-8 items-start">
              <Link to="/about" className="inline-flex items-center space-x-4 bg-neutral-900 text-white px-8 py-5 rounded-full font-black text-lg hover:bg-brand-red transition-all">
                <span>Our Divine Mission</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <div className="flex flex-col">
                 <p className="text-neutral-400 font-bold uppercase tracking-widest text-[10px] mb-2">Connect with us</p>
                 <div className="flex gap-4">
                    {['FB', 'TW', 'IG', 'YT'].map(social => (
                       <div key={social} className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 font-black text-xs hover:border-brand-red hover:text-brand-red cursor-pointer transition-colors">
                          {social}
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section Banner */}
      <section className="relative py-32 md:py-48 overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            alt="Global Banner"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-none">The God that <br /><span className="text-brand-red">Sees Me.</span></h2>
          <p className="text-xl text-neutral-400 mb-16 max-w-3xl mx-auto font-medium">Join us at our sanctuary in Ikotun and experience the tangible power of God. No distance is a barrier in the realm of the spirit.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-brand-red mb-3 italic tracking-tighter">10k+</div>
              <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Weekly Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-3 italic tracking-tighter">1</div>
              <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Sanctuary</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-brand-red mb-3 italic tracking-tighter">2.5k+</div>
              <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Testimonies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-3 italic tracking-tighter">∞</div>
              <div className="text-white/60 text-xs font-black uppercase tracking-[0.2em]">Grace Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-24 md:py-40 bg-black overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 translate-x-1/2" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
               <div className="max-w-2xl text-left">
                  <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red italic">Find Your expression</span>
                  <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                     Our <br />
                     <span className="text-brand-red">Heartbeat.</span>
                  </h2>
               </div>
               <Link to="/ministries" className="group flex items-center space-x-4 text-white hover:text-brand-red transition-colors mb-4">
                  <span className="font-black uppercase tracking-widest text-sm italic">Explore All Ministries</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red transition-all">
                     <ArrowRight className="w-6 h-6" />
                  </div>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { name: "Children & Youth", icon: Heart, desc: "Nurturing the future kings and queens." },
                  { name: "Worship & Arts", icon: Music, desc: "Leading the global sound of heaven." },
                  { name: "Community Outreach", icon: Globe, desc: "Touching lives beyond the four walls." },
                  { name: "Education", icon: BookOpen, desc: "Equipping saints for the work of ministry." }
               ].map((min, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="group bg-white/5 border-2 border-white/10 rounded-[3rem] p-10 hover:border-brand-red hover:bg-brand-red/5 transition-all cursor-pointer h-full flex flex-col"
                  >
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <min.icon className="w-8 h-8 text-brand-red group-hover:text-white" />
                     </div>
                     <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter leading-none">{min.name}</h3>
                     <p className="text-neutral-500 group-hover:text-neutral-300 font-bold text-sm leading-relaxed mb-10 flex-1 italic">{min.desc}</p>
                     <div className="flex items-center space-x-2 text-brand-red font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all italic">
                        <span>Get Involved</span>
                        <ChevronRight className="w-4 h-4" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-3xl">
              <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-8 inline-block px-4 py-1 border-l-4 border-brand-red">Testimonies</span>
              <h2 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.85] uppercase italic">
                It's My <br />
                <span className="text-brand-red">Turn!</span>
              </h2>
            </div>
            <Link to="/contact" className="bg-neutral-900 text-white px-10 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-brand-red transition-all shadow-2xl">
              SHARE YOUR PROOF
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-12 rounded-[2rem] border-2 border-neutral-100 hover:border-brand-red transition-all group relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-red opacity-[0.05] group-hover:opacity-10 transition-opacity" />
                <p className="text-xl text-neutral-800 font-bold mb-12 leading-relaxed italic relative z-10">
                  "{i === 1 ? "After joining our prayer sessions for just 3 days, a long-standing court case was settled in my favor. God of Wonders!" : i === 2 ? "My business was on the verge of collapse, but during a prophetic session, the Pastor gave a word that shifted everything. Today, we are expanding!" : "I was diagnosed with an incurable condition, but I kept connecting to the altar of faith. Last week, all tests came back negative! Doctors are still in shock."}"
                </p>
                <div className="flex items-center space-x-5 relative z-10">
                  <div className="w-14 h-14 bg-neutral-200 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform overflow-hidden shadow-lg border-2 border-white">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                  <div>
                    <p className="text-neutral-900 font-black uppercase italic">{i === 1 ? "Gloria Mensah" : i === 2 ? "Chidi Okafor" : "Bolanle Cole"}</p>
                    <p className="text-brand-red text-xs font-black uppercase tracking-widest">Lagos, NIGERIA</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-48 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
           <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-[0.8] uppercase italic drop-shadow-2xl">
            What are you <br /><span className="text-neutral-900">Waiting for?</span>
          </h2>
          <Link to="/contact" className="inline-flex items-center space-x-6 bg-white text-neutral-900 px-12 py-6 rounded-full font-black text-2xl uppercase italic hover:scale-110 transition-all shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] active:scale-95 group">
            <span>Find Your Expression</span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </Link>
          <p className="mt-12 text-white/70 font-black uppercase tracking-[0.3em] text-sm italic">Come and see what the Lord has done!</p>
        </div>
      </section>
    </div>
  );
}
