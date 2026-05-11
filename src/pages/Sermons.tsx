import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Play, Calendar, User, Tag, Filter, Grid, List as ListIcon } from 'lucide-react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../services/firebase';
import { Sermon } from '../types';
import { cn } from '../lib/utils';

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
              speaker: "Pastor David Stone",
              date: "2024-05-10",
              topic: "Faith",
              description: "Discovery how faith can move mountains in your personal and professional life.",
              thumbnail: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2070&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
              id: '2',
              title: "Walking in Divine Purpose",
              speaker: "Associate Pastor Mary Jane",
              date: "2024-05-03",
              topic: "Purpose",
              description: "In this session, we explore how to identify and pursue the calling of God on your life.",
              thumbnail: "https://images.unsplash.com/photo-1493236295731-9359a601e857?q=80&w=2070&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
              id: '3',
              title: "Overcoming Life's Giants",
              speaker: "Guest Speaker John Doe",
              date: "2024-04-26",
              topic: "Courage",
              description: "A deep dive into the story of David and Goliath and how it applies to our modern struggles.",
              thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
              videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Sermon Archive</span>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter mb-8">Watch & Listen.</h1>
          <p className="text-xl text-neutral-600 max-w-2xl font-medium">Catch up on our latest messages or dive into our archives to find spiritual nourishment for every season of life.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, speaker, or topic..."
              className="w-full bg-neutral-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500 transition-all font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 bg-neutral-100 p-2 rounded-2xl">
            <button
               onClick={() => setViewMode('grid')}
               className={cn("p-2 rounded-xl transition-all", viewMode === 'grid' ? "bg-white shadow-sm text-neutral-900" : "text-neutral-400")}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
               onClick={() => setViewMode('list')}
               className={cn("p-2 rounded-xl transition-all", viewMode === 'list' ? "bg-white shadow-sm text-neutral-900" : "text-neutral-400")}
            >
              <ListIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sermons Grid/List */}
        {loading ? (
          <div className="flex justify-center py-40">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredSermons.length > 0 ? (
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              : "flex flex-col space-y-6"
          )}>
            {filteredSermons.map((sermon) => (
              <motion.div
                key={sermon.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={cn(
                  "group overflow-hidden bg-white rounded-[2rem] border border-neutral-100 hover:border-amber-200 transition-all shadow-sm hover:shadow-xl",
                  viewMode === 'list' && "flex flex-col md:flex-row h-auto md:h-64"
                )}
              >
                <div className={cn(
                  "relative overflow-hidden shrink-0",
                  viewMode === 'grid' ? "aspect-video" : "md:w-96 h-64 md:h-full"
                )}>
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-500">{sermon.topic}</span>
                      <span className="text-xs text-neutral-400 font-medium">{new Date(sermon.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors leading-tight">{sermon.title}</h3>
                    <p className="text-neutral-500 text-sm font-medium line-clamp-2">{sermon.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center space-x-2">
                       <User className="w-4 h-4 text-amber-500" />
                       <span className="text-xs font-bold text-neutral-700">{sermon.speaker}</span>
                    </div>
                    <button className="text-xs font-black uppercase tracking-widest text-neutral-900 border-b-2 border-amber-500 pb-1">Watch Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <h3 className="text-2xl font-bold text-neutral-400">No sermons found matching your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
