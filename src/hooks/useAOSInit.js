import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOSInit(options = {}) {  useEffect(() => {
    AOS.init(options);
    
    const refreshTimeout = setTimeout(() => {
      AOS.refresh();
    }, 500);
    
    return () => clearTimeout(refreshTimeout);
  }, [options]);
}
