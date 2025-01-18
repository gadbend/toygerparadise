import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate WebP source if the original is not WebP
  const webPSrc = src.endsWith('.webp') ? src : `${src.split('.').slice(0, -1).join('.')}.webp`;
  const fallbackSrc = src;

  useEffect(() => {
    const img = new Image();
    img.src = webPSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [webPSrc]);

  return (
    <picture>
      {!error && <source srcSet={webPSrc} type="image/webp" />}
      <img
        src={error ? fallbackSrc : webPSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={cn(
          "transition-opacity duration-300",
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </picture>
  );
}
