import { useEffect } from "react";
import { Breadcrumb } from "../ui/breadcrumb";
import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation";
import { CatGallery } from '../CatGallery';
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function ToygerBreed() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Helmet>
        <title>{t('toyger.title')} | Paradise Toygers & Bengals</title>
        <meta
          name="description"
          content={t('toyger.description')}
        />
        <link rel="canonical" href="https://www.toygerparadise.com/breeds/toyger" />
      </Helmet>

      <Navigation />
      
      {/* Hidden SEO H1 */}
      <h1 className="sr-only">{t('toyger.hiddenTitle')}</h1>

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb />

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">{t('toyger.galleryTitle')}</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black/50 p-6 border border-amber-900/20">
              <CatGallery category="toyger" />
            </div>
          </motion.section>
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">{t('toyger.breedTitle')}</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-gray-200">
                {t('toyger.breedDescription')}
              </p>
              <p className="text-gray-200">
                {t('toyger.breedPassion')}
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">{t('toyger.characteristicsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 p-8 rounded-2xl shadow-xl border border-amber-900/20">
                <h3 className="text-2xl font-semibold mb-6 text-amber-500">{t('toyger.appearanceTitle')}</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.appearance1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.appearance2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.appearance3')}
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-8 rounded-2xl shadow-xl border border-amber-900/20">
                <h3 className="text-2xl font-semibold mb-6 text-amber-500">{t('toyger.personalityTitle')}</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.personality1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.personality2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    {t('toyger.personality3')}
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-500">{t('toyger.faqTitle')}</h2>
            <div className="max-w-3xl mx-auto bg-black/50 rounded-2xl p-8 shadow-xl border border-amber-900/20">
              <div className="space-y-8">
                <div 
                  className="border-b border-amber-900/20 pb-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-xl font-semibold mb-4 text-amber-500"
                    itemProp="name"
                  >
                    {t('toyger.faq1Question')}
                  </h3>
                  <div 
                    className="text-gray-200"
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {t('toyger.faq1Answer')}
                    </div>
                  </div>
                </div>

                <div 
                  className="border-b border-amber-900/20 pb-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-xl font-semibold mb-4 text-amber-500"
                    itemProp="name"
                  >
                    {t('toyger.faq2Question')}
                  </h3>
                  <div 
                    className="text-gray-200"
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {t('toyger.faq2Answer')}
                    </div>
                  </div>
                </div>

                <div 
                  className="border-b border-amber-900/20 pb-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-xl font-semibold mb-4 text-amber-500"
                    itemProp="name"
                  >
                    {t('toyger.faq3Question')}
                  </h3>
                  <div 
                    className="text-gray-200"
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {t('toyger.faq3Answer')}
                    </div>
                  </div>
                </div>

                <div 
                  className="border-b border-amber-900/20 pb-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 
                    className="text-xl font-semibold mb-4 text-amber-500"
                    itemProp="name"
                  >
                    {t('toyger.faq4Question')}
                  </h3>
                  <div 
                    className="text-gray-200"
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      {t('toyger.faq4Answer')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}