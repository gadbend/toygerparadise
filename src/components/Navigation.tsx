import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "/images/logo.png";
import enFlag from "../assets/icons/en-flag.svg";
import frFlag from "../assets/icons/fr-flag.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-black text-white z-50 relative">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative flex items-center px-2 md:px-6 py-3 cursor-pointer hover:bg-white/5 transition-colors">
            <img
              className="h-16 w-16 rounded-full"
              src={logo}
              alt="Toyger Paradise"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-white/5 rounded-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="border-2 border-white text-white px-4 py-1 hover:bg-white hover:text-black transition-colors"
          >
            {t("nav.home")}
          </Link>
          <div className="text-gray-600">|</div>
          
          {/* Cat Gallery Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGalleryOpen(!isGalleryOpen)}
              className="border-2 border-white text-white px-4 py-1 hover:bg-white hover:text-black transition-colors flex items-center"
            >
              Cat Gallery <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isGalleryOpen && (
              <div className="absolute left-0 z-10 mt-2 w-48 bg-black border-2 border-white">
                <Link
                  to="/breeds/toyger"
                  className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
                  onClick={() => setIsGalleryOpen(false)}
                >
                  Toyger
                </Link>
                <Link
                  to="/breeds/bengal"
                  className="block px-4 py-2 text-white hover:bg-white hover:text-black transition-colors"
                  onClick={() => setIsGalleryOpen(false)}
                >
                  Bengal
                </Link>
              </div>
            )}
          </div>
          <div className="text-gray-600">|</div>

          <Link
            to="/about-us"
            className="border-2 border-white text-white px-4 py-1 hover:bg-white hover:text-black transition-colors"
          >
            {t("nav.about")}
          </Link>
          <div className="text-gray-600">|</div>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-4 py-1 hover:bg-white hover:text-black transition-colors"
          >
            {t("nav.contact")}
          </Link>
          <div className="text-gray-600">|</div>
          <Link
            to="/adoption"
            className="border-2 border-white text-white px-4 py-1 hover:bg-white hover:text-black transition-colors"
          >
            {t("nav.adoption")}
          </Link>
          <div className="text-gray-600">|</div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage("en")}
              className="flex items-center space-x-1 text-white hover:text-amber-500"
            >
              <img src={enFlag} alt="English" className="w-6 h-6" />
              <span>EN</span>
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => changeLanguage("fr")}
              className="flex items-center space-x-1 text-white hover:text-amber-500"
            >
              <img src={frFlag} alt="Français" className="w-6 h-6" />
              <span>FR</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              
              {/* Mobile Cat Gallery Menu */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}
                  className="w-full text-white py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                >
                  Cat Gallery <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {isMobileGalleryOpen && (
                  <div className="space-y-2 mt-2">
                    <Link
                      to="/breeds/toyger"
                      className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors block"
                      onClick={() => {
                        setIsMobileGalleryOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Toyger
                    </Link>
                    <Link
                      to="/breeds/bengal"
                      className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors block"
                      onClick={() => {
                        setIsMobileGalleryOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Bengal
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about-us"
                className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Link
                to="/adoption"
                className="text-white hover:text-amber-500 py-2 text-center border-2 border-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.adoption")}
              </Link>
              <div className="flex justify-center items-center space-x-4 pt-4">
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex items-center space-x-1 text-white hover:text-amber-500"
                >
                  <img src={enFlag} alt="English" className="w-6 h-6" />
                  <span>EN</span>
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="flex items-center space-x-1 text-white hover:text-amber-500"
                >
                  <img src={frFlag} alt="Français" className="w-6 h-6" />
                  <span>FR</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
