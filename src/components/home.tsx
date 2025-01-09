import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturedCatsGrid from "./FeaturedCatsGrid";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FeaturedCatsGrid />
            <div className="mt-12 text-center">
              <Link 
                to="/adoption" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-colors"
                aria-label="View all available cats for adoption"
              >
                {t("home.viewAllCats")}
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="why-choose-us" className="py-12 md:py-16 bg-black border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 id="why-choose-us" className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {t("home.whyChoose.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <article className="text-center text-white p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-amber-500">{t("home.whyChoose.health.title")}</h3>
                <p className="text-gray-300">{t("home.whyChoose.health.description")}</p>
              </article>
              
              <article className="text-center text-white p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-amber-500">{t("home.whyChoose.genetics.title")}</h3>
                <p className="text-gray-300">{t("home.whyChoose.genetics.description")}</p>
              </article>
              
              <article className="text-center text-white p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-amber-500">{t("home.whyChoose.socialization.title")}</h3>
                <p className="text-gray-300">{t("home.whyChoose.socialization.description")}</p>
              </article>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/about-us" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-colors text-lg font-semibold"
                aria-label="Learn more about our breeding program and facilities"
              >
                {t("home.learnMore")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
