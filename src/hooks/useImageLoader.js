import { useState, useEffect } from 'react';

export function useImageLoader(imageSrc) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;    
    const handleLoad = () => setImageLoaded(true);
    img.onload = handleLoad;
    img.onerror = handleLoad;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]);
  
  return imageLoaded;
}
