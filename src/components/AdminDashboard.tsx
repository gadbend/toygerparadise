import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { LogOut, Pencil, Trash2, X, Image as ImageIcon, CheckCircle, XCircle } from "lucide-react";
import type { Kitten } from "@/types/database";
import {
  getKittens,
  addKitten,
  updateKitten,
  deleteKitten,
  uploadKittenImages,
} from "@/lib/queries";
import { supabase } from "@/lib/supabase";
import { updateSitemap } from "@/lib/utils";
import { processImage, formatFileSize } from "@/lib/imageProcessor";
import { GalleryManager } from './GalleryManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [editingKitten, setEditingKitten] = useState<Kitten | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [conversionStatus, setConversionStatus] = useState<Array<{ status: 'idle' | 'processing' | 'success' | 'error'; message: string }>>([]);
  
  // New form state with correct type for breed
  const [formData, setFormData] = useState<{
    name: string;
    breed: 'Toyger' | 'Bengal';
    description: string;
    price: string;
    age: string;
    gender: 'Male' | 'Female' | undefined;
  }>({
    name: '',
    breed: 'Toyger',
    description: '',
    price: '',
    age: '',
    gender: undefined
  });

  useEffect(() => {
    fetchKittens();
  }, []);

  useEffect(() => {
    if (editingKitten) {
      setFormData({
        name: editingKitten.name,
        breed: editingKitten.breed,
        description: editingKitten.description || '',
        price: editingKitten.price || '',
        age: editingKitten.age || '',
        gender: editingKitten.gender
      });
      setPreviewUrls(editingKitten.images);
    } else {
      resetForm();
    }
  }, [editingKitten]);

  const resetForm = () => {
    setFormData({
      name: '',
      breed: 'Toyger',
      description: '',
      price: '',
      age: '',
      gender: undefined
    });
    setSelectedFiles(null);
    setPreviewUrls([]);
    setEditingKitten(null);
    setConversionStatus([]);
  };

  // Form input handlers
  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleBreedChange = (value: 'Toyger' | 'Bengal') => {
    setFormData(prev => ({ ...prev, breed: value }));
  };

  const handleGenderChange = (value: 'Male' | 'Female' | undefined) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const fetchKittens = async () => {
    try {
      const data = await getKittens();
      setKittens(data);
      updateSitemap(data);
    } catch (error) {
      console.error("Error fetching kittens:", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (files.length > 5) {
        alert(t('errors.maxImages'));
        return;
      }

      setIsSubmitting(true);
      setConversionStatus(new Array(files.length).fill({ status: 'processing', message: 'Converting image...' }));

      try {
        const processedFiles = new DataTransfer();
        const processedUrls: string[] = [];
        const newStatus = [...conversionStatus];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          console.log(`Processing ${file.name}:`);
          console.log(`Original size: ${formatFileSize(file.size)}`);

          try {
            const processedImage = await processImage(file, {
              maxWidth: 1920,
              maxHeight: 1080,
              quality: 0.92,
              useWebP: true,
              preserveExif: true
            });

            const processedFile = new File([processedImage.blob], file.name, {
              type: processedImage.format
            });

            const compressionRatio = ((1 - processedImage.size / file.size) * 100).toFixed(1);
            newStatus[i] = {
              status: 'success',
              message: `${file.name}: Converted to ${processedImage.format.split('/')[1].toUpperCase()}! Size reduced by ${compressionRatio}%`
            };

            console.log(`Processed ${file.name}:
              Format: ${processedImage.format}
              Size: ${formatFileSize(processedImage.size)}
              Dimensions: ${processedImage.width}x${processedImage.height}
              Compression ratio: ${compressionRatio}%
            `);

            processedFiles.items.add(processedFile);
            processedUrls.push(URL.createObjectURL(processedImage.blob));
          } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            newStatus[i] = {
              status: 'error',
              message: `Error converting ${file.name}. Please try again.`
            };
          }
          setConversionStatus(newStatus);
        }

        setSelectedFiles(processedFiles.files);
        setPreviewUrls(processedUrls);
      } catch (error) {
        console.error("Error processing images:", error);
        alert(t('errors.imageProcessing'));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const onSubmit = async () => {
    try {
      setIsSubmitting(true);

      let images = editingKitten?.images || [];

      if (selectedFiles?.length) {
        const imageFiles = Array.from(selectedFiles);
        const uploadedUrls = await uploadKittenImages(imageFiles, {
          breed: formData.breed,
          name: formData.name
        });
        images = uploadedUrls;
      }

      if (images.length === 0) {
        throw new Error(t("errors.noImages"));
      }

      const kittenData = {
        ...formData,
        images,
        gender: formData.gender
      };

      if (editingKitten) {
        await updateKitten(editingKitten.id, kittenData);
      } else {
        await addKitten(kittenData);
      }

      await fetchKittens();
      resetForm();
    } catch (error) {
      console.error("Error saving kitten:", error);
      alert(error instanceof Error ? error.message : "Error saving kitten");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removePreview = (index: number) => {
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    if (selectedFiles) {
      const dt = new DataTransfer();
      Array.from(selectedFiles)
        .filter((_, i) => i !== index)
        .forEach((file) => dt.items.add(file));
      setSelectedFiles(dt.files);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this kitten?")) {
      try {
        await deleteKitten(id);
        await fetchKittens();
      } catch (error) {
        console.error("Error deleting kitten:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <main className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">{t("admin.title")}</h1>
          <Button
            variant="destructive"
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            {t("admin.logout")}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kitten Management Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">
                {editingKitten ? t("admin.editKitten") : t("admin.addKitten")}
              </h2>
              {editingKitten && (
                <Button
                  variant="ghost"
                  onClick={() => setEditingKitten(null)}
                  className="text-white hover:text-white/80"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel Edit
                </Button>
              )}
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="breed" className="text-white">
                  Breed
                </Label>
                <Select
                  value={formData.breed}
                  onValueChange={handleBreedChange}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select breed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Toyger">Toyger</SelectItem>
                    <SelectItem value="Bengal">Bengal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange('description')}
                  className="bg-white/10 border-white/20 text-white min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-white">
                    Price
                  </Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={handleInputChange('price')}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-white">
                    Age
                  </Label>
                  <Input
                    id="age"
                    value={formData.age}
                    onChange={handleInputChange('age')}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender" className="text-white">
                  Gender
                </Label>
                <Select
                  value={formData.gender}
                  onValueChange={handleGenderChange}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="images" className="text-white">Images</Label>
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white mt-2"
                  />
                  <p className="text-sm text-gray-400 mt-1">
                    Images will be automatically optimized and converted to WebP format.
                  </p>
                </div>

                {/* Conversion Status Messages */}
                {conversionStatus.map((status, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-2 rounded ${
                      status.status === 'processing' ? 'bg-blue-500/10 text-blue-500' :
                      status.status === 'success' ? 'bg-green-500/10 text-green-500' :
                      'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {status.status === 'processing' && (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent" />
                    )}
                    {status.status === 'success' && (
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    )}
                    {status.status === 'error' && (
                      <XCircle className="h-4 w-4 flex-shrink-0" />
                    )}
                    <div className="text-sm whitespace-pre-wrap">
                      {status.message}
                    </div>
                  </div>
                ))}

                {/* Image Previews */}
                {previewUrls.length > 0 && (
                  <div className="grid grid-cols-2 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePreview(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? t("common.saving") : editingKitten ? t("common.update") : t("common.save")}
              </Button>
            </form>
          </div>

          {/* Kittens List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{t("admin.kittens")}</h2>
            <div className="grid gap-4">
              {kittens.map((kitten) => (
                <Card key={kitten.id} className="p-4 bg-white/5 backdrop-blur-lg border-white/10">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">
                        {kitten.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-white border-white/20">
                          {kitten.breed}
                        </Badge>
                        {kitten.gender && (
                          <Badge variant="outline" className="text-white border-white/20">
                            {kitten.gender}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditingKitten(kitten)}
                        className="text-white hover:text-white/80"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(kitten.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  {kitten.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {kitten.images.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`${kitten.name} ${index + 1}`}
                          className="w-full aspect-video object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Manager */}
        <div className="mt-8">
          <GalleryManager />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
