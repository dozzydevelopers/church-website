import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Play, Pause, Calendar, User, Tag, Filter, Grid, List as ListIcon, X, Volume2, SkipBack, SkipForward, Music } from 'lucide-react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../services/firebase';
import { Sermon } from '../types';
import { cn } from '../lib/utils';

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const q = query(collection(db, 'sermons'), orderBy('date', 'desc'), limit(12));
        const querySnapshot = await getDocs(q);
        const fetchedSermons = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Sermon[];
        
        // Dummy data if empty for demo
        if (fetchedSermons.length === 0) {
          setSermons([
            {
              id: '1',
              title: "The Power of Greater Faith",
              speaker: "Pastor Jerry I. Akabuike",
              date: "2026-05-10",
              topic: "Faith",
              description: "Discover how faith can move mountains in your personal and professional life. Experience the tangible power of God through His word.",
              thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2070&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=nFdgSc_WSlc",
              audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            },
            {
              id: '2',
              title: "Walking in Divine Purpose",
              speaker: "Pastor Chukwudi Michael",
              date: "2026-05-03",
              topic: "Purpose",
              description: "In this session, we explore how to identify and pursue the calling of God on your life. Your purpose is divine and unique.",
              thumbnail: "https://images.unsplash.com/photo-1493236295731-9359a601e857?q=80&w=2070&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=nFdgSc_WSlc",
              audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            },
            {
              id: '3',
              title: "Overcoming Life's Giants",
              speaker: "Apostle John Nzeadibe",
              date: "2026-04-26",
              topic: "Courage",
              description: "A deep dive into the story of David and Goliath and how it applies to our modern struggles. Victory is your inheritance.",
              thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=nFdgSc_WSlc"
            }
          ]);
        } else {
          setSermons(fetchedSermons);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, 'sermons');
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  const filteredSermons = sermons.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-4 inline-block px-4 py-1 border-l-4 border-brand-red italic">Sermon Archive</span>
          <h2 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-8 uppercase italic leading-none">
            Holy <br />
            <span className="text-brand-red">Words.</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl font-bold tracking-tight">Catch up on our latest messages or dive into our archives to find spiritual nourishment for every season of life.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5 group-focus-within:text-brand-red transition-colors" />
            <input
              type="text"
              placeholder="Search by title, speaker, or topic..."
              className="w-full bg-neutral-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-red transition-all font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 bg-neutral-100 p-2 rounded-2xl">
            <button
               onClick={() => setViewMode('grid')}
               className={cn("p-3 rounded-xl transition-all", viewMode === 'grid' ? "bg-white shadow-xl text-brand-red scale-110" : "text-neutral-400 hover:text-neutral-600")}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
               onClick={() => setViewMode('list')}
               className={cn("p-3 rounded-xl transition-all", viewMode === 'list' ? "bg-white shadow-xl text-brand-red scale-110" : "text-neutral-400 hover:text-neutral-600")}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sermons Grid/List */}
        {loading ? (
          <div className="flex justify-center py-40">
            <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredSermons.length > 0 ? (
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              : "flex flex-col space-y-8"
          )}>
            {filteredSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedSermon(sermon)}
                className={cn(
                  "group overflow-hidden bg-white rounded-[2.5rem] border-2 border-neutral-100 hover:border-brand-red transition-all cursor-pointer shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(220,38,36,0.15)]",
                  viewMode === 'list' && "flex flex-col md:flex-row h-auto md:h-72"
                )}
              >
                <div className={cn(
                   "relative overflow-hidden shrink-0",
                  viewMode === 'grid' ? "aspect-video" : "md:w-[28rem] h-64 md:h-full"
                )}>
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-brand-red/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 scale-125">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="px-4 py-1.5 bg-neutral-100 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-500 border border-neutral-200">{sermon.topic}</span>
                      <span className="text-[10px] text-neutral-400 font-black uppercase tracking-widest italic">{new Date(sermon.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h3 className="text-3xl font-black text-neutral-900 mb-4 group-hover:text-brand-red transition-colors leading-[1.1] uppercase italic">{sermon.title}</h3>
                    <p className="text-neutral-500 text-sm font-bold line-clamp-2 leading-relaxed">{sermon.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                          <User className="w-4 h-4 text-brand-red" />
                       </div>
                       <span className="text-xs font-black uppercase italic tracking-tighter text-neutral-700">{sermon.speaker}</span>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-900 border-b-4 border-brand-red pb-1 group-hover:translate-x-2 transition-transform italic">Listen Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h3 className="text-3xl font-black text-neutral-400 italic">No sermons found matching your search.</h3>
          </div>
        )}
      </div>

      {/* Audio Player Modal */}
      <AnimatePresence>
        {selectedSermon && (
          <AudioPlayerModal 
            sermon={selectedSermon} 
            onClose={() => setSelectedSermon(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function AudioPlayerModal({ sermon, onClose }: { sermon: Sermon; onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (sermon.audioUrl && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [sermon.audioUrl]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center px-6"
    >
      <div 
        className="absolute inset-0 bg-neutral-950/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="relative w-full max-w-4xl bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-brand-red text-white rounded-full transition-all z-10 group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Cover Art */}
          <div className="md:w-[45%] aspect-square relative group">
            <img 
              src={sermon.thumbnail} 
              alt={sermon.title} 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[3s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
               <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center shadow-2xl animate-bounce">
                  <Music className="w-6 h-6 text-white" />
               </div>
            </div>
          </div>

          {/* Controls */}
          <div className="md:w-[55%] p-12 flex flex-col justify-center">
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-block italic">Now Playing</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase italic leading-none">{sermon.title}</h2>
            <div className="flex items-center space-x-3 mb-12">
               <div className="w-6 h-6 bg-white/5 rounded-lg flex items-center justify-center">
                  <User className="w-3 h-3 text-brand-red" />
               </div>
               <p className="text-neutral-400 font-black uppercase italic tracking-widest text-xs">{sermon.speaker}</p>
            </div>

            {sermon.audioUrl ? (
              <div className="space-y-8">
                <audio 
                  ref={audioRef}
                  src={sermon.audioUrl}
                  onTimeUpdate={onTimeUpdate}
                  onLoadedMetadata={onLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Progress Bar */}
                <div className="space-y-3">
                  <input 
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={onProgressChange}
                    className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-red h-1.5"
                  />
                  <div className="flex justify-between text-[10px] font-black font-mono text-neutral-500 uppercase tracking-widest">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Playback Buttons */}
                <div className="flex items-center justify-center space-x-10">
                  <button 
                    onClick={() => skip(-15)}
                    className="p-3 text-neutral-400 hover:text-white transition-colors"
                  >
                    <SkipBack className="w-8 h-8" />
                  </button>

                  <button 
                    onClick={togglePlay}
                    className="w-24 h-24 bg-white text-neutral-900 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl group"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-current" />
                    ) : (
                      <Play className="w-8 h-8 fill-current ml-1" />
                    )}
                  </button>

                  <button 
                    onClick={() => skip(15)}
                    className="p-3 text-neutral-400 hover:text-white transition-colors"
                  >
                    <SkipForward className="w-8 h-8" />
                  </button>
                </div>

                {/* Volume */}
                <div className="flex items-center space-x-4 pt-8 border-t border-white/5">
                  <Volume2 className="w-5 h-5 text-neutral-500" />
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={onVolumeChange}
                    className="w-32 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-red h-1"
                  />
                </div>
              </div>
            ) : (
              <div className="p-12 border-2 border-dashed border-white/10 rounded-3xl text-center">
                 <Music className="w-12 h-12 text-neutral-700 mx-auto mb-6" />
                 <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-2">Audio Unavailable</h3>
                 <p className="text-neutral-500 font-bold text-sm">Please check back later or watch the video expression.</p>
                 {sermon.videoUrl && (
                   <a 
                    href={sermon.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 inline-block px-8 py-4 bg-brand-red text-white font-black uppercase italic tracking-widest rounded-full hover:scale-105 transition-all"
                   >
                     Watch Video
                   </a>
                 )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
