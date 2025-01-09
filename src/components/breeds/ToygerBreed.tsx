import { useEffect } from "react";
import { Breadcrumb } from "../ui/breadcrumb";
import { Helmet } from "react-helmet-async";
import Navigation from "../Navigation";

export function ToygerBreed() {
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
        <title>Toyger Cats - Exotic Tiger-Like Breed | Paradise Toygers & Bengals</title>
        <meta
          name="description"
          content="Discover our exotic Toyger cats, featuring stunning tiger-like stripes and loving temperaments. Learn about this rare breed's characteristics and view our available kittens."
        />
        <meta
          name="keywords"
          content="Toyger cats, Toyger kittens, exotic cats Quebec, tiger-like cats, rare cat breeds"
        />
      </Helmet>

      <Navigation />
      <Breadcrumb />

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Toyger Cats: The Miniature Tiger Companion
          </h1>

          <section className="mb-12">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                data-src="/images/toyger-hero.webp"
                alt="Majestic Toyger cat showcasing tiger-like stripes"
                className="rounded-lg object-cover"
                loading="lazy"
                width="1200"
                height="675"
              />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              About the Toyger Breed
            </h2>
            <p className="text-gray-300 mb-4">
              The Toyger is a designer breed that captures the majestic appearance of tigers in a 
              domestic cat. These stunning felines feature distinctive striped patterns and a 
              friendly, outgoing personality that makes them perfect family companions.
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
                  <li>• Muscular, athletic build</li>
                  <li>• Distinctive striped pattern</li>
                  <li>• Medium to large size</li>
                  <li>• Short, plush coat</li>
                  <li>• Round, expressive eyes</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Temperament</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Highly social and friendly</li>
                  <li>• Intelligent and trainable</li>
                  <li>• Good with families</li>
                  <li>• Playful and active</li>
                  <li>• Affectionate nature</li>
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
                  Premium quality diet rich in protein. We recommend continuing with the diet plan 
                  provided during adoption.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Grooming</h3>
                <p className="text-gray-300">
                  Weekly brushing to maintain coat health. Regular nail trimming and dental care 
                  recommended.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Exercise</h3>
                <p className="text-gray-300">
                  Daily play sessions and environmental enrichment to keep them mentally and 
                  physically stimulated.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
