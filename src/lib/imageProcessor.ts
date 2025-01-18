import imageCompression from 'browser-image-compression';

interface ProcessedImage {
  blob: Blob;
  format: string;
  size: number;
  width: number;
  height: number;
}

interface ImageProcessingOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  preserveExif?: boolean;
  useWebP?: boolean;
}

const defaultOptions: ImageProcessingOptions = {
  maxWidth: 1920,
  maxHeight: 1080,
  quality: 0.92,
  preserveExif: true,
  useWebP: true
};

export async function processImage(
  file: File,
  options: ImageProcessingOptions = {}
): Promise<ProcessedImage> {
  const settings = { ...defaultOptions, ...options };
  
  // Log original file info
  console.log(`Original file: ${file.name}`);
  console.log(`Size: ${formatFileSize(file.size)}`);
  console.log(`Type: ${file.type}`);

  try {
    // Check WebP support
    const webpSupported = await isWebPSupported();
    const targetFormat = settings.useWebP && webpSupported ? 'image/webp' : 'image/jpeg';
    
    // First pass: resize and basic compression
    const firstPassOptions = {
      maxWidthOrHeight: Math.max(settings.maxWidth!, settings.maxHeight!),
      useWebWorker: true,
      fileType: targetFormat,
      preserveExif: settings.preserveExif,
    };

    const compressedFile = await imageCompression(file, firstPassOptions);
    
    // Create image for dimension check
    const img = await createImage(compressedFile);
    const { width, height } = calculateDimensions(
      img.width,
      img.height,
      settings.maxWidth!,
      settings.maxHeight!
    );

    // Second pass: precise compression with canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    // Convert to WebP with high quality
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (result) {
            resolve(result);
          } else {
            reject(new Error('Failed to convert image'));
          }
        },
        targetFormat,
        settings.quality
      );
    });

    // Verify the conversion
    const finalFormat = await getImageFormat(blob);
    const processedImage: ProcessedImage = {
      blob,
      format: finalFormat,
      size: blob.size,
      width,
      height,
    };

    // Log processing results
    console.log('Image processing complete:');
    console.log(`Final format: ${processedImage.format}`);
    console.log(`Final size: ${formatFileSize(processedImage.size)}`);
    console.log(`Dimensions: ${width}x${height}`);

    return processedImage;
  } catch (error) {
    console.error('Image processing failed:', error);
    throw error;
  }
}

// Helper functions
async function isWebPSupported(): Promise<boolean> {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

function createImage(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function calculateDimensions(
  width: number,
  height: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } {
  let newWidth = width;
  let newHeight = height;

  if (width > maxWidth) {
    newWidth = maxWidth;
    newHeight = (height * maxWidth) / width;
  }

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = (width * maxHeight) / height;
  }

  return {
    width: Math.round(newWidth),
    height: Math.round(newHeight),
  };
}

async function getImageFormat(blob: Blob): Promise<string> {
  // Read the first few bytes to determine the actual format
  const arr = new Uint8Array(await blob.slice(0, 4).arrayBuffer());
  
  // Check magic numbers
  if (arr[0] === 0x52 && arr[1] === 0x49 && arr[2] === 0x46 && arr[3] === 0x46) {
    return 'image/webp';
  }
  if (arr[0] === 0xFF && arr[1] === 0xD8) {
    return 'image/jpeg';
  }
  if (arr[0] === 0x89 && arr[1] === 0x50 && arr[2] === 0x4E && arr[3] === 0x47) {
    return 'image/png';
  }
  
  return blob.type || 'unknown';
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
