import React from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import Footer from "./Footer";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("about.title")}
              </h1>
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
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[16/9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
