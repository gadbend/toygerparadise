import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation";
import Footer from "./Footer";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Helmet>
        <title>About Us | Paradise Toygers & Bengals - Bengal and Toyger Breeder in Quebec</title>
        <meta 
          name="description" 
          content="Learn about Paradise Toygers & Bengals, Quebec's leading breeder of exotic Toyger and Bengal cats. Discover our passion for breeding, Toyger and white Bengal for sale, and commitment to raising healthy, well-socialized kittens."
        />
        <meta 
          name="keywords" 
          content="Toyger breeder Quebec, Bengal breeder Quebec, exotic cat breeder, Toyger for sale, white Bengal for sale, champion bloodline cats, TICA registered cattery, Paradise Toygers & Bengals about us"
        />
        {/* OpenGraph tags */}
        <meta property="og:title" content="About Paradise Toygers & Bengals | Bengal and Toyger Breeder in Quebec" />
        <meta property="og:description" content="Learn about our passion for breeding exotic Toyger and Bengal cats. Explore our available Toyger and white Bengal kittens for sale, raised with love and care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.toygerparadise.com/about-us" />
        <link rel="canonical" href="https://www.toygerparadise.com/about-us" />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="sr-only">About Us | Discover the Story of Our Toyger & Bengal Breeding Passion</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("about.title")}
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  {t("about.intro")}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  {t("about.experience")}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  {t("about.facility")}
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="/images/TOYGER-MALE-PRINCE-16x9-04.jpg"
                alt={t("about.imageAlt")}
                className="rounded-lg shadow-2xl w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* White Bengal Section */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-1 flex justify-center">
              <div className="w-[60%] relative">
                <img
                  src="/images/white-kitten-bengal.jpg"
                  alt="Adorable White Bengal kitten"
                  className="rounded-lg shadow-2xl w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-6 order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                White Bengal: A Rare and Fascinating Animal
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  Bengal cats are famous for their unusual appearance, playful energy, and unique fur pattern that resembles a wild lion. Among those, White Bengals, often called "Snow Bengals," are characterized by a rare and mesmerizing beauty. With a snow-white coat and stunning blue or aqua eyes, these cats have a magical charm that makes them highly sought after by cat lovers and breeders.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Types of Snow Bengals
                </h3>
                <ul className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg list-disc pl-6">
                  <li>Seal Lynx Point: Cream or pale white coat with a soft, delicate pattern and ice-blue eyes</li>
                  <li>Seal Mink: A mixture of lynx and sepia seals with a warm-toned coat and aqua eyes</li>
                  <li>Seal Sepia: Golden or green eyes with a light ivory or cream tint</li>
                </ul>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  What Makes White Bengals Special
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                  Their unique style features soft, silky fur with faint speckled or marble patterns that tend to become more prominent with age. Like snowflakes, they offer a truly unique experience. These cats are lively, full of energy, curious, and intelligent. They love exploring their environment, whether climbing, chasing toys, or interacting with their owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
