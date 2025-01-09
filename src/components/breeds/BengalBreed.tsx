import { useEffect } from "react";
import { Breadcrumb } from "../ui/breadcrumb";
import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation";

export function BengalBreed() {
  useEffect(() => {
    // Lazy load images when component mounts
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || "";
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Bengal Cats - Exotic Leopard-Like Breed | Paradise Toygers & Bengals</title>
        <meta
          name="description"
          content="Explore our exotic Bengal cats, featuring stunning leopard-like rosettes and wild beauty. Learn about this energetic breed's characteristics and view our available kittens."
        />
        <meta
          name="keywords"
          content="Bengal cats, Bengal kittens, exotic cats Quebec, leopard cats, spotted cats"
        />
      </Helmet>

      <Navigation />
      <Breadcrumb />

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Bengal Cats: The Exotic Leopard Companion
          </h1>

          <section className="mb-12">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                data-src="/images/bengal-hero.webp"
                alt="Beautiful Bengal cat showcasing leopard-like rosettes"
                className="rounded-lg object-cover"
                loading="lazy"
                width="1200"
                height="675"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              About the Bengal Breed
            </h2>
            <p className="text-gray-300 mb-4">
              The Bengal cat is a stunning breed that combines the exotic look of a wild leopard cat 
              with the temperament of a domestic cat. Known for their distinctive spotted or marbled coat 
              patterns and high energy levels, Bengals make fascinating and engaging companions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Breed Characteristics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Physical Traits</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Athletic, muscular build</li>
                  <li>• Distinctive rosette patterns</li>
                  <li>• Medium to large size</li>
                  <li>• Soft, luxurious coat</li>
                  <li>• Large, expressive eyes</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Temperament</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Highly active and playful</li>
                  <li>• Very intelligent</li>
                  <li>• Water-loving</li>
                  <li>• Strong hunting instincts</li>
                  <li>• Devoted to family</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Care Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Diet</h3>
                <p className="text-gray-300">
                  High-protein diet essential for maintaining their muscular build. Fresh water and 
                  premium quality food recommended.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Grooming</h3>
                <p className="text-gray-300">
                  Weekly brushing keeps their coat glossy. Regular nail trimming and dental care 
                  important for overall health.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Exercise</h3>
                <p className="text-gray-300">
                  Requires extensive daily play and exercise. Climbing trees, cat wheels, and interactive 
                  toys recommended.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
