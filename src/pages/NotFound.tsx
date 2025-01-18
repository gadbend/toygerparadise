import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function NotFound() {
  const { t } = useTranslation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black">
      <Helmet>
        <title>404 - Page Not Found | Paradise Toygers & Bengals</title>
        <meta 
          name="description" 
          content="Sorry, we couldn't find the page you're looking for. Explore our beautiful Toyger and Bengal cats instead!"
        />
        {/* Tell search engines this is a 404 page */}
        <meta name="robots" content="noindex,follow" />
        
        {/* Canonical URL to prevent duplicate content */}
        <link rel="canonical" href="https://www.toygerparadise.com/404" />
        
        {/* OpenGraph tags for social sharing */}
        <meta property="og:title" content="404 - Page Not Found | Paradise Toygers & Bengals" />
        <meta property="og:description" content="Sorry, we couldn't find the page you're looking for. Explore our beautiful Toyger and Bengal cats instead!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.toygerparadise.com/404" />
        <meta property="og:site_name" content="Paradise Toygers & Bengals" />
        
        {/* Language alternates for multilingual support */}
        <link rel="alternate" hrefLang="en" href="https://www.toygerparadise.com/404" />
        <link rel="alternate" hrefLang="fr" href="https://www.toygerparadise.com/fr/404" />
        <link rel="alternate" hrefLang="x-default" href="https://www.toygerparadise.com/404" />

        {/* HTTP status code */}
        <meta name="http-status" content="404" />
      </Helmet>

      <Navigation />

      <main className="flex-grow flex items-center justify-center px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="sr-only">404 - Page Not Found</h1>
          
          {/* Cat emoji as a temporary placeholder until you add a custom illustration */}
          <div className="mb-8">
            <span className="text-8xl">🐱</span>
          </div>

          {/* Main content */}
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">
            {t('404.title', 'Oops! Page Not Found')}
          </h2>
          
          <p className="text-gray-300 text-lg mb-8">
            {t('404.description', "Don't worry! Our cats might have played with this page. Let's help you find something amazing instead.")}
          </p>

          {/* Helpful links */}
          <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto mb-12">
            <Link
              to="/breeds/toyger"
              className="block p-4 bg-black/50 border border-amber-900/20 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              <h3 className="text-amber-500 font-semibold mb-2">
                {t('404.exploreToygers', 'Explore Toygers')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('404.toygersDesc', 'Discover our magnificent Toyger cats')}
              </p>
            </Link>

            <Link
              to="/breeds/bengal"
              className="block p-4 bg-black/50 border border-amber-900/20 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              <h3 className="text-amber-500 font-semibold mb-2">
                {t('404.exploreBengals', 'Explore Bengals')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('404.bengalsDesc', 'Meet our beautiful Bengal cats')}
              </p>
            </Link>

            <Link
              to="/adoption"
              className="block p-4 bg-black/50 border border-amber-900/20 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              <h3 className="text-amber-500 font-semibold mb-2">
                {t('404.adoptCat', 'Adopt a Cat')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('404.adoptDesc', 'Find your perfect feline companion')}
              </p>
            </Link>

            <Link
              to="/contact"
              className="block p-4 bg-black/50 border border-amber-900/20 rounded-lg hover:bg-amber-900/20 transition-colors"
            >
              <h3 className="text-amber-500 font-semibold mb-2">
                {t('404.contact', 'Contact Us')}
              </h3>
              <p className="text-gray-400 text-sm">
                {t('404.contactDesc', 'We\'re here to help you')}
              </p>
            </Link>
          </div>

          {/* Return home button */}
          <Link
            to="/"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg transition-colors"
          >
            {t('404.returnHome', 'Return to Homepage')}
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
