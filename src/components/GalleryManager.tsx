import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Trash2, Image as ImageIcon, CheckCircle, XCircle } from 'lucide-react';
import type { CatGalleryImage } from '@/types/gallery';
import { getGalleryImages, addGalleryImage, deleteGalleryImage, uploadGalleryImage, updateGalleryImage } from '@/lib/galleryQueries';
import { processImage, formatFileSize } from '@/lib/imageProcessor';

export function GalleryManager() {
  const { t } = useTranslation();
  const [images, setImages] = useState<CatGalleryImage[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [category, setCategory] = useState<'toyger' | 'bengal'>('toyger');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [editingImage, setEditingImage] = useState<CatGalleryImage | null>(null);
  const [conversionStatus, setConversionStatus] = useState<{ 
    status: 'idle' | 'processing' | 'success' | 'error'; 
    message: string 
  }>({
    status: 'idle',
    message: ''
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const data = await getGalleryImages();
      setImages(data);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setIsUploading(true);
        setConversionStatus({ status: 'processing', message: 'Converting image...' });
        
        // Process image with enhanced options
        const processedImage = await processImage(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.92,
          useWebP: true,
          preserveExif: true
        });

        // Create a new File from the processed blob
        const processedFile = new File([processedImage.blob], file.name, {
          type: processedImage.format
        });

        // Generate SEO-friendly filename for preview
        const cleanBreed = category
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9-]+/g, '')
          .trim();

        const cleanTitle = (title || file.name)
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9-]+/g, '')
          .trim();

        const uniqueId = Math.random().toString(36).substring(2, 8);
        const seoFilename = `${cleanBreed}-for-adoption-sale-${cleanTitle}-${uniqueId}.webp`;

        setSelectedFile(processedFile);
        setPreviewUrl(URL.createObjectURL(processedImage.blob));

        const compressionRatio = ((1 - processedImage.size / file.size) * 100).toFixed(1);
        setConversionStatus({
          status: 'success',
          message: `Successfully converted to WebP! Size reduced by ${compressionRatio}%\nNew filename: ${seoFilename}`
        });

        console.log(`Image processed successfully:
          Format: ${processedImage.format}
          Size: ${formatFileSize(processedImage.size)}
          Dimensions: ${processedImage.width}x${processedImage.height}
          SEO Filename: ${seoFilename}
        `);
      } catch (error) {
        console.error('Error processing image:', error);
        setConversionStatus({
          status: 'error',
          message: 'Error converting image. Please try again.'
        });
        alert(t('errors.imageProcessing'));
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleEdit = (image: CatGalleryImage) => {
    setEditingImage(image);
    setTitle(image.title || '');
    setDescription(image.description || '');
    setCategory(image.category);
  };

  const handleUpdate = async () => {
    if (!editingImage) return;

    try {
      await updateGalleryImage(editingImage.id, {
        title,
        description
      });

      // Reset form and refresh images
      setEditingImage(null);
      setTitle('');
      setDescription('');
      await fetchImages();
    } catch (error) {
      console.error('Error updating image:', error);
      alert(t('errors.updateFailed'));
    }
  };

  const handleCancel = () => {
    setEditingImage(null);
    setTitle('');
    setDescription('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingImage) {
      await handleUpdate();
      return;
    }

    if (!selectedFile) return;

    try {
      setIsUploading(true);
      const imageUrl = await uploadGalleryImage(selectedFile, {
        breed: category,
        title: title || selectedFile.name
      });

      await addGalleryImage({
        image_url: imageUrl,
        title: title || selectedFile.name,
        description,
        category,
      });

      // Reset form
      setSelectedFile(null);
      setPreviewUrl('');
      setTitle('');
      setDescription('');
      setConversionStatus({ status: 'idle', message: '' });

      // Refresh images
      await fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(t('errors.uploadFailed'));
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteGalleryImage(id);
        await fetchImages();
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Cat Gallery Manager</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={category}
              onValueChange={(value: 'toyger' | 'bengal') => setCategory(value)}
              disabled={!!editingImage}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyger">Toyger</SelectItem>
                <SelectItem value="bengal">Bengal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image title"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter image description"
            />
          </div>

          {!editingImage && (
            <div>
              <Label htmlFor="image">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading}
              />
              {previewUrl && (
                <div className="mt-2">
                  <img src={previewUrl} alt="Preview" className="max-w-xs rounded-lg" />
                </div>
              )}
            </div>
          )}

          <div className="flex gap-2">
            {editingImage ? (
              <>
                <Button type="submit" disabled={isUploading}>
                  Update Image
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button type="submit" disabled={!selectedFile || isUploading}>
                Upload Image
              </Button>
            )}
          </div>
        </form>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <Card key={image.id} className="p-4">
              <img
                src={image.image_url}
                alt={image.title || 'Gallery image'}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <div className="space-y-2">
                <h3 className="font-semibold">{image.title || 'Untitled'}</h3>
                <p className="text-sm text-gray-500">{image.description || 'No description'}</p>
                <Badge>{image.category}</Badge>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(image)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(image.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
