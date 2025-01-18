import React from "react";

interface HeroSectionProps {
  image?: string;
}

const HeroSection = ({
  image = "/images/WELCOME-TO-TOYGER-AND-BENGAL-PARADISE.jpg",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[100svh]">
      <div className="relative w-full h-full min-h-[100svh]">
        {/* SEO-friendly H1 */}
        <h1 className="absolute text-white opacity-90 text-xl top-0 left-0 p-4">Élevage de Toyger et Bengal | Quebec, Canada | Breeder</h1>
        <img
          src={image}
          alt="Beautiful Toyger and Bengal cats"
          className="absolute inset-0 w-full h-full object-cover object-[35%_center] sm:object-[40%_center] md:object-center select-none"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 top-8 md:top-10 flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-[0.15em] sm:tracking-[0.2em] mb-2 uppercase">
              Toyger Paradise
            </h2>
            <div className="w-16 sm:w-24 h-[1px] bg-white/60 mx-auto mb-2"></div>
            <h2 className="font-['Cinzel'] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-white tracking-[0.1em] sm:tracking-[0.15em] uppercase">
              & Bengals
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
