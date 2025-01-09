import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Kitten } from "@/types/database";
import { Helmet } from "react-helmet-async";
import { getKittens } from "@/lib/queries";
import { generateKittenSlug } from "@/lib/utils";

const CatDetailsPage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const [kitten, setKitten] = useState<Kitten | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKitten = async () => {
      try {
        if (!slug) return;
        const kittens = await getKittens();
        const matchingKitten = kittens.find(k => 
          generateKittenSlug(k.name, k.breed) === slug
        );
        
        if (!matchingKitten) {
          navigate('/adoption');
          return;
        }
        setKitten(matchingKitten);
      } catch (error) {
        console.error("Error fetching kitten:", error);
        navigate('/adoption');
      } finally {
        setLoading(false);
      }
    };

    fetchKitten();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
          <div className="text-black">Loading...</div>
        </div>
      </div>
    );
  }

  if (!kitten) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{`${kitten.name} - ${kitten.breed} Kitten | Paradise Toygers & Bengals`}</title>
        <meta name="description" content={kitten.description} />
        <meta property="og:title" content={`${kitten.name} - ${kitten.breed} Kitten`} />
        <meta property="og:description" content={kitten.description} />
        {kitten.images?.[0] && <meta property="og:image" content={kitten.images[0]} />}
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-amber-600 hover:text-amber-700">
                  {t("nav.home")}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/adoption" className="text-amber-600 hover:text-amber-700">
                  {t("nav.adoption")}
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">{kitten.name}</li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div className="lg:w-2/3">
              {kitten.images && kitten.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {kitten.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden ${
                        index === 0 ? 'col-span-2 aspect-[16/10]' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${kitten.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Information */}
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <h1 className="text-4xl font-bold mb-6">{kitten.name}</h1>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <Badge variant="outline" className="text-amber-600 border-amber-600">
                      {kitten.breed}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {kitten.age && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-amber-600 block text-sm mb-1">{t("cat.age")}</span>
                        <span className="text-lg font-medium">{kitten.age}</span>
                      </div>
                    )}
                    {kitten.gender && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-amber-600 block text-sm mb-1">{t("cat.gender")}</span>
                        <span className="text-lg font-medium">{kitten.gender}</span>
                      </div>
                    )}
                  </div>

                  {kitten.price && (
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <span className="text-amber-600 block text-sm mb-1">{t("cat.price")}</span>
                      <span className="text-2xl font-bold">{kitten.price}</span>
                    </div>
                  )}
                </div>

                {kitten.description && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-amber-600 mb-4">{t("cat.about")}</h2>
                    <p className="text-gray-700 leading-relaxed">{kitten.description}</p>
                  </div>
                )}

                <Button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg"
                >
                  {t("cat.contactUs")}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CatDetailsPage;
