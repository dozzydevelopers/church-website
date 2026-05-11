import { motion } from 'motion/react';
import { Play, ArrowRight, Calendar, Users, Heart, MapPin, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHURCH_NAME, CHURCH_TAGLINE, IMAGES, SERVICE_TIMES } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Worship"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold tracking-widest uppercase mb-6">
              Welcome to {CHURCH_NAME}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
              {CHURCH_TAGLINE.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-4">{word}</span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-medium">
              Join our global community in a journey of faith, hope, and transformation. Every Sunday, lives are changed by the power of God.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/live"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>WATCH LIVE</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95"
              >
                <MapPin className="w-5 h-5" />
                <span>FIND CAMPUS</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-white py-12 md:py-0 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:-translate-y-1/2 bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl">
            {SERVICE_TIMES.map((time, i) => (
              <div key={i} className={cn(
                "p-10 border-neutral-800",
                i !== SERVICE_TIMES.length - 1 && "md:border-r"
              )}>
                <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">{time.day}</h3>
                <div className="space-y-3">
                  {time.services.map((s, j) => (
                    <p key={j} className="text-white font-bold text-lg">{s}</p>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/contact" className="p-10 bg-amber-500 group flex items-center justify-between col-span-1 md:col-span-2 lg:col-span-1">
              <div>
                <h3 className="text-neutral-900 font-bold uppercase tracking-widest text-xs mb-2">Join us in person</h3>
                <p className="text-neutral-900 font-black text-2xl group-hover:underline underline-offset-4 decoration-2">Find a Location</p>
              </div>
              <ChevronRight className="w-8 h-8 text-neutral-900 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pastor Message */}
      <section className="py-24 md:py-40 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src={IMAGES.pastor}
                alt="Lead Pastor"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-neutral-200 rounded-full" />
            <div className="absolute bottom-10 left-10 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-neutral-900 font-bold text-xl mb-1">Pastor David Stone</p>
              <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">Lead Pastor, {CHURCH_NAME}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 inline-block">A Message of Hope</span>
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 leading-tight mb-8 tracking-tighter">
              There is a Place for <br />
              <span className="text-amber-500 italic">You</span> Here.
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-medium">
              <p>Welcome home. Whether you are new to the area, looking for a church community, or just exploring the claims of Christ, we're glad you're here. At {CHURCH_NAME}, we are committed to seeing people discover their God-given purpose and walk in the fullness of His grace.</p>
              <p>Our heart is to be a sanctuary for the weary, a school for the growing, and a launching pad for the called. We can't wait to meet you this Sunday.</p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-start">
              <Link to="/about" className="group flex items-center space-x-2 text-neutral-900 font-bold hover:text-amber-500 transition-colors">
                <span>Discovery Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="group flex items-center space-x-2 text-neutral-900 font-bold hover:text-amber-500 transition-colors">
                <span>View Our Values</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section Banner */}
      <section className="relative py-32 md:py-48 overflow-hidden group">
        <div className="absolute inset-0">
          <img
            src={IMAGES.worship}
            alt="Banner"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Experience God Tomorrow.</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">From soul-stirring worship to life-changing messages, join us for an experience you won't forget.</p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <div className="text-5xl font-black text-amber-500 mb-2">15k+</div>
              <div className="text-white text-sm font-bold uppercase tracking-widest">Global Community</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-amber-500 mb-2">24</div>
              <div className="text-white text-sm font-bold uppercase tracking-widest">Campus Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-amber-500 mb-2">800+</div>
              <div className="text-white text-sm font-bold uppercase tracking-widest">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 inline-block">Impact Stories</span>
              <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter leading-none">
                Real People. <br />
                <span className="text-amber-500">Real Change.</span>
              </h2>
            </div>
            <Link to="/contact" className="bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors">
              Share Your Story
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:border-amber-200 transition-colors group"
              >
                <Quote className="w-10 h-10 text-amber-500 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                <p className="text-lg text-neutral-700 font-medium mb-10 leading-relaxed italic">
                  "{i === 1 ? "Since I joined this church, my life has found meaning. I felt lost for a long time, but the community and the teachings here brought me back to Christ." : i === 2 ? "The youth ministry has been a blessing to my children. They are growing in faith and making friends who share their values. I'm so grateful." : "I was struggling with addiction for years. Through the outreach program and constant prayer support, I am now two years sober and serving in the auditorium."}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                  <div>
                    <p className="text-neutral-900 font-bold">{i === 1 ? "Sarah Jenkins" : i === 2 ? "Michael Thorne" : "Alicia Keys"}</p>
                    <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest">Member since 2018</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-neutral-900 tracking-tighter mb-10 leading-[0.9]">
            We Can't Wait <br /> to Welcome You.
          </h2>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-neutral-900 text-white px-10 py-5 rounded-full font-black text-xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span>Find a Service Near You</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
