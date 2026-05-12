import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LogIn, 
  LogOut, 
  Upload, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  Image as ImageIcon,
  Loader2,
  Lock,
  Globe,
  X
} from 'lucide-react';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  setDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface dynamicImage {
  id: string;
  key: string;
  url: string;
  label: string;
}

const ADMIN_EMAIL = 'dozzydevelopers01@gmail.com';

const PRESET_IMAGES = [
  { key: 'home_hero', label: 'Home Page Hero Background' },
  { key: 'go_portrait', label: 'General Overseer Portrait' },
  { key: 'about_mission', label: 'About Page - Mission Image' },
  { key: 'contact_bg', label: 'Contact Page Header' }
];

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [images, setImages] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    if (status) {
      const timeout = status.type === 'error' ? 10000 : 5000;
      const timer = setTimeout(() => {
        setStatus(null);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAdmin(u?.email === ADMIN_EMAIL);
      setLoading(false);
    });

    const imagesUnsubscribe = onSnapshot(collection(db, 'images'), (snapshot) => {
      const imgs: Record<string, string> = {};
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        imgs[data.key] = data.url;
      });
      setImages(imgs);
    });

    return () => {
      unsubscribe();
      imagesUnsubscribe();
    };
  }, []);

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to sign in' });
    }
  };

  const logout = () => signOut(auth);

  const handleFileUpload = async (key: string, file: File) => {
    setUploading(key);
    setStatus(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      
      // Update Firestore
      await setDoc(doc(db, 'images', key), {
        key,
        url: data.url,
        updatedAt: serverTimestamp(),
        updatedBy: user?.uid
      });

      setStatus({ type: 'success', message: 'Image updated successfully!' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to upload image' });
    } finally {
      setUploading(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900">
        <Loader2 className="w-12 h-12 text-brand-red animate-spin" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-neutral-800 rounded-[2.5rem] p-12 text-center border border-neutral-700 shadow-2xl"
        >
          <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-red/20">
            <Lock className="w-10 h-10 text-brand-red" />
          </div>
          <h1 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">Admin Portal</h1>
          <p className="text-neutral-400 mb-10 font-medium">Access restricted to authorized personnel. Please sign in with your administrative account.</p>
          
          <button 
            onClick={login}
            className="w-full flex items-center justify-center space-x-3 bg-white text-neutral-900 px-8 py-5 rounded-full font-black text-lg hover:bg-neutral-200 transition-all shadow-xl"
          >
            <LogIn className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>

          {!isAdmin && user && (
            <p className="mt-6 text-brand-red font-bold text-sm">
              Current account ({user.email}) does not have admin privileges.
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Media <br /><span className="text-brand-red">Management.</span></h1>
            <p className="text-neutral-400 mt-4 font-medium flex items-center space-x-2 text-lg">
              <Globe className="w-5 h-5" />
              <span>Live Website Updates</span>
            </p>
          </div>
          <button 
            onClick={logout}
            className="flex items-center space-x-3 bg-neutral-800 text-white px-8 py-4 rounded-full font-black hover:bg-neutral-700 transition-all border border-neutral-700"
          >
            <LogOut className="w-5 h-5 text-brand-red" />
            <span>Sign Out</span>
          </button>
        </header>

        <AnimatePresence>
          {status && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className={`mb-12 p-6 rounded-[1.5rem] flex items-center justify-between border ${
                status.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-brand-red/10 border-brand-red/20 text-brand-red'
              }`}
            >
              <div className="flex items-center space-x-4">
                {status.type === 'success' ? <CheckCircle2 className="w-6 h-6 shrink-0" /> : <AlertCircle className="w-6 h-6 shrink-0" />}
                <p className="font-bold">{status.message}</p>
              </div>
              <button 
                onClick={() => setStatus(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Dismiss message"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRESET_IMAGES.map((img) => (
            <motion.div 
              key={img.key}
              layout
              className="bg-neutral-800 border border-neutral-700 rounded-[2.5rem] overflow-hidden flex flex-col group"
            >
              <div className="aspect-video bg-neutral-900 relative overflow-hidden">
                {images[img.key] ? (
                  <img 
                    src={images[img.key]} 
                    alt={img.label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600 gap-4">
                    <ImageIcon className="w-16 h-16 opacity-20" />
                    <p className="font-black uppercase tracking-widest text-xs">No Image Set</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 leading-none">{img.label}</h3>
                <p className="text-neutral-500 text-sm font-medium mb-8">Location: {img.key}</p>

                <div className="mt-auto space-y-4">
                  <label className="relative cursor-pointer">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(img.key, file);
                      }}
                      disabled={!!uploading}
                    />
                    <div className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-full font-black transition-all ${
                      uploading === img.key ? 'bg-neutral-700 text-neutral-500' : 'bg-white text-neutral-900 hover:bg-brand-red hover:text-white'
                    }`}>
                      {uploading === img.key ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                      <span>{uploading === img.key ? 'Uploading...' : 'Replace Photo'}</span>
                    </div>
                  </label>
                  
                  {images[img.key] && (
                    <button 
                      onClick={() => {
                        setDoc(doc(db, 'images', img.key), { key: img.key, url: '', updatedAt: serverTimestamp() });
                      }}
                      className="w-full flex items-center justify-center space-x-3 bg-neutral-700/50 text-neutral-400 px-8 py-4 rounded-full font-bold hover:bg-brand-red/10 hover:text-brand-red transition-all border border-neutral-600/50"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 p-12 bg-brand-red rounded-[3rem] text-white">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Pro Tip: Image Optimization</h2>
          <p className="text-white/80 text-xl font-medium leading-relaxed max-w-3xl">
            For the best performance and visual quality, ensure your images are sized appropriately for their location. 
            Hero backgrounds should be high resolution (at least 1920x1080), while portraits (like the GO) work best in a 4:5 aspect ratio.
          </p>
        </section>
      </div>
    </div>
  );
}
