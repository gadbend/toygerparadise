import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getKittens } from "@/lib/queries";
import type { Kitten } from "@/types/database";

const KittenCard = ({
  name,
  breed,
  images,
  description,
  price,
  age,
  gender,
}: Kitten) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-colors">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - ${breed} kitten`}
          className="object-cover w-full h-full transition-transform duration-300"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <Badge
            variant="outline"
            className={`${breed === "Toyger" ? "bg-amber-500/10 text-amber-500" : "bg-orange-500/10 text-orange-500"}`}
          >
            {breed}
          </Badge>
        </div>
        {description && (
          <p className="text-gray-400 text-sm mb-2">{description}</p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {age && (
            <Badge
              variant="secondary"
              className="bg-emerald-500/10 text-emerald-500"
            >
              {age}
            </Badge>
          )}
          {gender && (
            <Badge
              variant="secondary"
              className="bg-emerald-500/10 text-emerald-500"
            >
              {gender}
            </Badge>
          )}
          {price && (
            <Badge
              variant="secondary"
              className="bg-emerald-500/10 text-emerald-500"
            >
              {price}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};

const AdoptionGallery = () => {
  const { t } = useTranslation();
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKittens = async () => {
      try {
        const data = await getKittens();
        setKittens(data);
      } catch (err) {
        setError(t("adoption.error"));
        console.error("Error fetching kittens:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchKittens();
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("adoption.title")}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("adoption.description")}
            </p>
          </div>

          {loading ? (
            <div className="text-center text-white">
              {t("adoption.loading")}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : kittens.length === 0 ? (
            <div className="text-center text-gray-400">
              {t("adoption.noKittens")}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {kittens.map((kitten) => (
                <KittenCard key={kitten.id} {...kitten} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdoptionGallery;
