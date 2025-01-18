import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black text-white py-8 md:py-12 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-light mb-6">
            {t("footer.findUs")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8">
            <div className="p-4 md:p-0">
              <h4 className="font-semibold mb-2">{t("footer.email")}</h4>
              <p className="text-gray-400 text-sm md:text-base">
                Antoinette Menassa
              </p>
              <p className="text-gray-400 text-sm md:text-base break-all">
                a.menassa@sympatico.ca
              </p>
            </div>
            <div className="p-4 md:p-0">
              <h4 className="font-semibold mb-2">{t("footer.phone")}</h4>
              <p className="text-gray-400 text-sm md:text-base">514-808-6407</p>
            </div>
            <div className="p-4 md:p-0">
              <h4 className="font-semibold mb-2">{t("footer.location")}</h4>
              <p className="text-gray-400 text-sm md:text-base">
                301 le Petit Bellechasse Sud
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Charette, Québec
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Canada G0X1E0
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Facebook
              size={24}
              className="text-white hover:text-gray-400 transition-colors cursor-pointer"
            />
          </a>
          <a 
            href="https://www.instagram.com/toyger_paradise/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Instagram
              size={24}
              className="text-white hover:text-gray-400 transition-colors cursor-pointer"
            />
          </a>
          <a 
            href="https://www.tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <TikTokIcon className="text-white hover:text-gray-400 transition-colors cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
