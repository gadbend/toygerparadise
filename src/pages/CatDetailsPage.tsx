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
        if (!slug) {
          console.log("No slug provided");
          return;
        }
        
        const kittens = await getKittens();
        
        // Parse the slug format: [breed]-for-sale-[name]-[uniqueID]
        const parts = slug.split('-');
        if (parts.length < 4) {
          console.log("Invalid slug format");
          navigate('/adoption');
          return;
        }

        // Get the unique ID (last part)
        const slugId = parts[parts.length - 1];
        
        if (!slugId || slugId.length !== 6) {
          console.log("Invalid slug ID format");
          navigate('/adoption');
          return;
        }

        const matchingKitten = kittens.find(k => {
          // Generate the expected slug for this kitten
          const kittenSlug = generateKittenSlug(k.name, k.id, k.breed);
          return kittenSlug === slug;
        });
        
        if (!matchingKitten) {
          console.log("No matching kitten found");
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

  // Format the description into paragraphs for better readability
  const descriptionParagraphs = kitten.description?.split('\n').filter(Boolean) || [];
  
  // Create a rich meta description combining key information
  const metaDescription = `Meet ${kitten.name}, a beautiful ${kitten.age || ''} ${kitten.breed} kitten available for adoption. ${
    descriptionParagraphs[0] || ''
  }`.trim();

  return (
    <>
      <Helmet>
        <title>{`${kitten.name} - ${kitten.breed} Kitten for Adoption | Paradise Toygers & Bengals`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${kitten.breed} kitten, cat adoption, ${kitten.gender || ''} kitten, ${kitten.breed} cat, Paradise Toygers & Bengals, ${kitten.name}`} />
        
        {/* Open Graph Tags for Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${kitten.breed} Kitten ${kitten.name} is Available for Adoption!`} />
        <meta property="og:description" content={`Meet ${kitten.name}, a beautiful ${kitten.breed} kitten. ${kitten.gender ? `${kitten.gender} kitten` : ''} ${kitten.age ? `aged ${kitten.age}` : ''}. ${descriptionParagraphs[0]?.slice(0, 150)}...`} />
        <meta property="og:url" content={window.location.href} />
        {kitten.images?.[0] && (
          <>
            <meta property="og:image" content={kitten.images[0]} />
            <meta property="og:image:secure_url" content={kitten.images[0]} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${kitten.breed} kitten ${kitten.name}`} />
          </>
        )}
        <meta property="og:site_name" content="Paradise Toygers & Bengals" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${kitten.name} - ${kitten.breed} Kitten for Adoption`} />
        <meta name="twitter:description" content={metaDescription} />
        {kitten.images?.[0] && <meta name="twitter:image" content={kitten.images[0]} />}
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `${kitten.name} - ${kitten.breed} Kitten`,
          "description": metaDescription,
          "image": kitten.images,
          ...(kitten.price && {
            "offers": {
              "@type": "Offer",
              "price": kitten.price.replace(/[^0-9.]/g, ''),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }),
          "brand": {
            "@type": "Brand",
            "name": "Paradise Toygers & Bengals"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "breed",
              "value": kitten.breed
            },
            ...(kitten.age ? [{
              "@type": "PropertyValue",
              "name": "age",
              "value": kitten.age
            }] : []),
            ...(kitten.gender ? [{
              "@type": "PropertyValue",
              "name": "gender",
              "value": kitten.gender
            }] : [])
          ]
        })}
      </script>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 py-8" role="main">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm mb-6">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-amber-600 hover:text-amber-700">
                  {t("nav.home")}
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li>
                <Link to="/adoption" className="text-amber-600 hover:text-amber-700">
                  {t("nav.adoption")}
                </Link>
              </li>
              <li className="text-gray-400" aria-hidden="true">/</li>
              <li className="text-gray-600" aria-current="page">{kitten.name}</li>
            </ol>
          </nav>

          <article className="max-w-4xl mx-auto">
            {/* Main Content Section */}
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{kitten.name}</h1>
              <Badge variant="outline" className="text-amber-600 border-amber-600 mb-4">
                {kitten.breed}
              </Badge>
              
              {/* Key Information */}
              <div className="flex justify-center gap-4 mb-6">
                {kitten.age && (
                  <div className="bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-amber-600 block text-sm">{t("cat.age")}</span>
                    <span className="font-medium">{kitten.age}</span>
                  </div>
                )}
                {kitten.gender && (
                  <div className="bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="text-amber-600 block text-sm">{t("cat.gender")}</span>
                    <span className="font-medium">{kitten.gender}</span>
                  </div>
                )}
              </div>
            </header>

            {/* Image Gallery */}
            <section aria-label="Kitten Photos" className="mb-12">
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
                        alt={`${kitten.name} - ${index === 0 ? 'Main Photo' : `Photo ${index + 1}`}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Description Section - Main Content for SEO */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-amber-600 mb-6">About {kitten.name}</h2>
              <div className="prose prose-lg max-w-none">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Adoption Information */}
            {kitten.price && (
              <section className="mb-12">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <h2 className="text-xl font-semibold text-amber-600 mb-2">{t("cat.price")}</h2>
                  <p className="text-3xl font-bold text-amber-700 mb-4">{kitten.price}</p>
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-amber-600 hover:bg-amber-700 text-white py-6 px-8 text-lg"
                    aria-label={`Contact us about adopting ${kitten.name}`}
                  >
                    {t("cat.contactUs")}
                  </Button>
                  <Button
                    onClick={() => {
                      // Ensure we have an absolute URL
                      const absoluteUrl = window.location.href.includes('http') 
                        ? window.location.href 
                        : `https://www.toygerparadise.com${window.location.pathname}`;
                      const url = encodeURIComponent(absoluteUrl);
                      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&display=popup`;
                      window.open(shareUrl, 'FacebookShare', 'width=626,height=436');
                    }}
                    aria-label={`Share ${kitten.name} on Facebook`}
                  >
                    Share on Facebook
                  </Button>
                </div>
              </section>
            )}
          </article>
        </main>
      </div>
    </>
  );
};

export default CatDetailsPage;
