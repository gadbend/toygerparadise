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
import { LogOut, Pencil, Trash2, X, Image as ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
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

type KittenFormData = Omit<Kitten, "id" | "created_at">;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [editingKitten, setEditingKitten] = useState<Kitten | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<KittenFormData>();

  useEffect(() => {
    fetchKittens();
  }, []);

  useEffect(() => {
    if (editingKitten) {
      setValue("name", editingKitten.name);
      setValue("breed", editingKitten.breed);
      setValue("description", editingKitten.description || "");
      setValue("price", editingKitten.price || "");
      setValue("age", editingKitten.age || "");
      setValue("gender", editingKitten.gender || undefined);
      setPreviewUrls(editingKitten.images);
    } else {
      reset();
      setPreviewUrls([]);
      setSelectedFiles(null);
    }
  }, [editingKitten, setValue, reset]);

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
        alert("You can only upload up to 5 images");
        return;
      }

      // Show loading state
      setIsSubmitting(true);

      try {
        // Process each image
        const processedFiles = new DataTransfer();
        const processedUrls: string[] = [];

        for (const file of Array.from(files)) {
          // Show original size
          console.log(`Original size of ${file.name}: ${formatFileSize(file.size)}`);

          // Process the image
          const processedBlob = await processImage(file);

          // Create a new File from the processed Blob
          const processedFile = new File([processedBlob], file.name, {
            type: 'image/jpeg',
          });

          // Show processed size
          console.log(`Processed size of ${file.name}: ${formatFileSize(processedFile.size)}`);

          processedFiles.items.add(processedFile);
          processedUrls.push(URL.createObjectURL(processedBlob));
        }

        setSelectedFiles(processedFiles.files);
        setPreviewUrls(processedUrls);
      } catch (error) {
        console.error("Error processing images:", error);
        alert("Error processing images. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
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

  const onSubmit = async (data: KittenFormData) => {
    try {
      setIsSubmitting(true);

      let images = editingKitten?.images || [];

      if (selectedFiles?.length) {
        const uploadedUrls = await uploadKittenImages(selectedFiles);
        images = uploadedUrls;
      }

      if (images.length === 0) {
        throw new Error("At least one image is required");
      }

      const kittenData = {
        ...data,
        images,
        gender: data.gender || undefined,
      };

      if (editingKitten) {
        await updateKitten(editingKitten.id, kittenData);
      } else {
        await addKitten(kittenData);
      }

      await fetchKittens();
      setEditingKitten(null);
      reset();
      setSelectedFiles(null);
      setPreviewUrls([]);
    } catch (error) {
      console.error("Error saving kitten:", error);
      alert(error instanceof Error ? error.message : "Error saving kitten");
    } finally {
      setIsSubmitting(false);
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

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              {t("admin.title")}
            </h1>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              {t("admin.logout")}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add/Edit Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingKitten ? t("admin.editKitten") : t("admin.addKitten")}
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name", { required: true })}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="breed" className="text-white">
                    Breed
                  </Label>
                  <Select
                    {...register("breed", { required: true })}
                    onValueChange={(value) =>
                      setValue("breed", value as "Toyger" | "Bengal")
                    }
                    defaultValue={editingKitten?.breed}
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
                    {...register("description")}
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
                      {...register("price")}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-white">
                      Age
                    </Label>
                    <Input
                      id="age"
                      {...register("age")}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-white">
                    Gender
                  </Label>
                  <Select
                    onValueChange={(value) => {
                      setValue(
                        "gender",
                        value as "Male" | "Female" | undefined,
                      );
                    }}
                    defaultValue={editingKitten?.gender}
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
                    <Label htmlFor="images">Images</Label>
                    <Input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      max={5}
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Max 5 images. Images will be automatically resized to max 1200x1200px.
                    </p>
                  </div>

                  {isSubmitting && (
                    <div className="flex items-center space-x-2 text-amber-400">
                      <ImageIcon className="animate-pulse" size={20} />
                      <span>Processing images...</span>
                    </div>
                  )}

                  {previewUrls.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {previewUrls.map((url, index) => (
                        <div key={url} className="relative group">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePreview(index)}
                            className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-black/75 rounded-full text-white"
                          >
                            <X size={16} />
                          </button>
                          {selectedFiles && (
                            <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                              {formatFileSize(Array.from(selectedFiles)[index].size)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Saving..."
                      : editingKitten
                        ? "Update Kitten"
                        : "Add Kitten"}
                  </Button>
                  {editingKitten && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditingKitten(null)}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Kittens List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">
                Current Listings
              </h2>

              {kittens.map((kitten) => (
                <Card
                  key={kitten.id}
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-4 flex gap-4"
                >
                  <img
                    src={kitten.images[0]}
                    alt={kitten.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {kitten.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`${kitten.breed === "Toyger" ? "bg-amber-500/10 text-amber-500" : "bg-orange-500/10 text-orange-500"}`}
                        >
                          {kitten.breed}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setEditingKitten(kitten)}
                          className="text-white hover:bg-white/10"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(kitten.id)}
                          className="text-red-500 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {kitten.description && (
                      <p className="text-gray-400 text-sm mt-1">
                        {kitten.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {kitten.age && (
                        <Badge
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-500"
                        >
                          {kitten.age}
                        </Badge>
                      )}
                      {kitten.gender && (
                        <Badge
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-500"
                        >
                          {kitten.gender}
                        </Badge>
                      )}
                      {kitten.price && (
                        <Badge
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-500"
                        >
                          {kitten.price}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
