import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CatCard from "./CatCard";
import { getKittens } from "@/lib/queries";
import type { Kitten } from "@/types/database";

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
      } catch (error) {
        setError(t("adoption.error"));
        console.error("Error fetching kittens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKittens();
  }, [t]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hidden SEO H1 */}
        <h1 className="sr-only">Adopt a Toyger or Bengal Kitten from Our Breeding Program</h1>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-800 mb-6">
            {t("adoption.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {kittens.map((kitten) => (
              <div key={kitten.id} className="flex justify-center">
                <CatCard
                  id={kitten.id}
                  name={kitten.name}
                  breed={kitten.breed}
                  images={kitten.images}
                  age={kitten.age}
                  gender={kitten.gender}
                  color={kitten.breed}
                  description={kitten.description}
                  traits={[
                    kitten.breed,
                    kitten.gender || "",
                    kitten.age || "",
                  ].filter(Boolean)}
                  showFullDescription={true}
                />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdoptionGallery;
