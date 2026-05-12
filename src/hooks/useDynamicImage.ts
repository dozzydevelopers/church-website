import { useState, useEffect } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function useDynamicImage(key: string, defaultUrl: string) {
  const [url, setUrl] = useState(defaultUrl);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(doc(db, 'images', key), (docSnap) => {
      if (docSnap.exists() && docSnap.data().url) {
        setUrl(docSnap.data().url);
      } else {
        setUrl(defaultUrl);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching dynamic image:', error);
      setUrl(defaultUrl);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [key, defaultUrl]);

  return { url, loading };
}
