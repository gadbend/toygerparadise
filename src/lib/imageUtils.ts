import imageCompression from 'browser-image-compression';

export async function optimizeImage(file: File) {
  // High quality WebP conversion options
  const options = {
    maxSizeMB: 5,              // Increased max file size to 5MB
    maxWidthOrHeight: 2560,    // Increased to 2K resolution
    useWebWorker: true,        // Use Web Worker for better performance
    fileType: 'image/webp',    // Convert to WebP
    quality: 0.95,             // Very high quality (0-1)
    initialQuality: 0.95,      // Initial quality for WebP
    alwaysKeepResolution: true // Never downscale unless absolutely necessary
  };

  try {
    // Check if the image is already small enough
    if (file.size <= 5 * 1024 * 1024) { // 5MB
      // If the file is already small enough, just convert to WebP without compression
      const options = {
        maxSizeMB: 5,
        useWebWorker: true,
        fileType: 'image/webp',
        quality: 1,            // Maximum quality
        initialQuality: 1,     // Maximum initial quality
        alwaysKeepResolution: true
      };
      const convertedFile = await imageCompression(file, options);
      const fileName = file.name.replace(/\.[^/.]+$/, "");
      return new File([convertedFile], `${fileName}.webp`, { type: 'image/webp' });
    }

    // For larger files, use high-quality compression
    const compressedFile = await imageCompression(file, options);
    
    // Create a new File with .webp extension
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    return new File(
      [compressedFile], 
      `${fileName}.webp`,
      { type: 'image/webp' }
    );
  } catch (error) {
    console.error('Error optimizing image:', error);
    throw error;
  }
}
