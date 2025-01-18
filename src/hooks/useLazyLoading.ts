import { useEffect } from 'react';

export function useLazyLoading() {
  useEffect(() => {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || "";
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
    
    return () => imageObserver.disconnect();
  }, []);
}
