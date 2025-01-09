import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

interface HeroSectionProps {
  image?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  image = "/images/TOYGER-MALE-PRINCE-16x9-04.jpg",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="main-heading" className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] bg-black">
      <div className="relative w-full h-full">
        <img
          src={image}
          alt="Beautiful Toyger cat with striking stripes"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center text-white z-10 px-4 pb-8 md:pb-16">
        <h1 id="main-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">
          Paradise Toygers & Bengals - Premier Exotic Cat Breeder
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 max-w-2xl text-white/90">
          {t("hero.subtitle")}
        </p>
        <Button
          size="lg"
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
          onClick={onCtaClick}
        >
          {t("hero.cta")}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
