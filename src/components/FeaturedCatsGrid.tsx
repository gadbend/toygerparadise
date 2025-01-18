import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CatCard from "./CatCard";
import { getKittens } from "@/lib/queries";
import type { Kitten } from "@/types/database";

const FeaturedCatsGrid = () => {
  const { t } = useTranslation();
  const [kittens, setKittens] = useState<Kitten[]>([]);

  useEffect(() => {
    const fetchKittens = async () => {
      try {
        const data = await getKittens();
        setKittens(data);
      } catch (error) {
        console.error("Error fetching kittens:", error);
      }
    };

    fetchKittens();
  }, []);

  return (
    <section
      className="w-full"
      aria-label="Featured Cats"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-800 mb-6">
            {t("featured.title")}
          </h2>
          <h3 className="text-2xl text-amber-700 mb-8">
            {t("featured.subtitle")}
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {t("featured.description")}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          role="list"
          aria-label="Featured cats gallery"
        >
          {kittens.map((kitten, index) => (
            <div
              key={kitten.id}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Thing"
              className="flex justify-center"
            >
              <meta itemProp="position" content={String(index + 1)} />
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCatsGrid;
