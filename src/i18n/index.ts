import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // Navigation
          "nav.home": "HOME",
          "nav.about": "ABOUT US",
          "nav.contact": "CONTACT",
          "nav.adoption": "ADOPTION",

          // Hero Section
          "hero.title": "Paradise Toygers & Bengals",
          "hero.subtitle":
            "Discover the beauty and majesty of these miniature tigers",
          "hero.cta": "View Available Kittens",

          // Home
          "home.viewAllCats": "Available Kittens",
          "home.learnMore": "Learn More",
          "home.whyChoose.title": "Why Choose Paradise Toygers & Bengals",
          "home.whyChoose.health.title": "Health Guarantee & Premium Care",
          "home.whyChoose.health.description": "Every Toyger and Bengal kitten comes with a comprehensive health guarantee. Our cats receive premium veterinary care, regular health screenings, and TICA-certified genetic testing to ensure your new family member is healthy and happy.",
          "home.whyChoose.genetics.title": "Champion Bloodlines & Genetics",
          "home.whyChoose.genetics.description": "Our exotic cats descend from international champion bloodlines, carefully selected for their stunning wild-looking markings and exceptional temperaments. Each breeding pair is DNA-tested to maintain the highest genetic standards in Quebec.",
          "home.whyChoose.socialization.title": "Expert Breeding & Socialization",
          "home.whyChoose.socialization.description": "Our Toyger and Bengal kittens are raised in a loving, enriched environment with expert socialization from birth. Each kitten undergoes our signature development program, ensuring they grow into well-adjusted, affectionate exotic companions.",

          // Footer
          "footer.findUs": "You can find us at",
          "footer.email": "EMAIL",
          "footer.phone": "PHONE NUMBER",
          "footer.location": "LOCATION",

          // Contact
          "contact.title": "Contact Us",
          "contact.name": "Your Name",
          "contact.email": "Your Email",
          "contact.phone": "Your Phone",
          "contact.message": "Your Message",
          "contact.send": "Send Message",
          "contact.sending": "Sending...",
          "contact.success.title": "Message Sent!",
          "contact.success.description": "We'll get back to you soon.",
          "contact.error.title": "Error",
          "contact.error.description":
            "Failed to send message. Please try again.",
          "contact.errors.name": "Name is required",
          "contact.errors.email": "Valid email is required",
          "contact.errors.phone": "Phone number is required",
          "contact.errors.message": "Message is required",

          // Featured Cats Grid
          "featured.title": "A Toyger is a Genuinely Unique Cat",
          "featured.subtitle": "Toyger's are more than just stripes!",
          "featured.description":
            "Toygers are more than exceptionally intelligent. Toygers are also delightfully cuddly felines. The Toyger's affectionate nature thrives on hugs and attention, making them perfect companions for those seeking warmth and companionship. Their playful demeanor makes them ideal playmates for children, capable of entertaining them for hours on end. Moreover, their quick learning abilities and easy handling make them suitable for all ages. Whether it's the gentle caress of a loving hand or the joy of shared moments, Toyger bring happiness to the lives of both young and old.",
          "featured.cat1.description":
            "A majestic female Toyger with perfect profile and stunning reflection.",
          "featured.cat2.description":
            "Enjoying the summer breeze on the deck, full of life and energy.",
          "featured.cat3.description":
            "A stunning silver Toyger enjoying the view through the summer window.",

          // Adoption Gallery
          "adoption.title": "Available Kittens",
          "adoption.description":
            "Meet our beautiful Toyger and Bengal kittens available for adoption. Each kitten comes with full vaccination, health certificate, and registration papers.",
          "adoption.loading": "Loading...",
          "adoption.error": "Failed to load kittens",
          "adoption.noKittens": "No kittens available at the moment.",

          // About Us
          "about.title": "Welcome to Paradise Toygers & Bengals",
          "about.intro":
            "Nestled in the serene landscapes of Charette, Quebec, Paradise Toygers & Bengals is more than just a cattery—it's a sanctuary dedicated to breeding exceptional Toyger and Bengal cats.",
          "about.experience":
            "With over a decade of experience in selective breeding, we've established ourselves as one of Canada's premier Toyger and Bengal catteries. Our commitment to excellence is reflected in every kitten we raise, ensuring they meet the highest standards of health, temperament, and breed characteristics.",
          "about.facility":
            "At our Quebec facility, we provide a nurturing environment where our cats receive individual attention, premium nutrition, and expert veterinary care. Our breeding program focuses on developing the distinctive tiger-like stripes of Toygers and the exotic patterns of Bengals while maintaining their loving, social personalities.",
          "about.imageAlt":
            "Majestic Toyger cat showcasing distinctive tiger-like stripes",

          // Login
          "login.title": "Admin Login",
          "login.email": "Email",
          "login.password": "Password",
          "login.submit": "Login",
          "login.submitting": "Logging in...",
          "login.error": "Invalid email or password",

          // Admin Dashboard
          "admin.title": "Admin Dashboard",
          "admin.logout": "Logout",
          "admin.addKitten": "Add New Kitten",
          "admin.editKitten": "Edit Kitten",

          // Cat Details
          "cat.age": "Age",
          "cat.gender": "Gender",
          "cat.price": "Price",
          "cat.about": "About",
          "cat.contactUs": "Contact Us About This Kitten",
        },
      },
      fr: {
        translation: {
          // Navigation
          "nav.home": "ACCUEIL",
          "nav.about": "À PROPOS",
          "nav.contact": "CONTACT",
          "nav.adoption": "ADOPTION",

          // Hero Section
          "hero.title": "Paradis des Toygers & Bengals",
          "hero.subtitle":
            "Découvrez la beauté et la majesté de ces tigres miniatures",
          "hero.cta": "Voir les Chatons Disponibles",

          // Home
          "home.viewAllCats": "Chatons Disponibles",
          "home.learnMore": "En Savoir Plus",
          "home.whyChoose.title": "Pourquoi Choisir Paradise Toygers & Bengals",
          "home.whyChoose.health.title": "Garantie Santé & Soins Premium",
          "home.whyChoose.health.description": "Chaque chaton Toyger et Bengal est accompagné d'une garantie santé complète. Nos chats reçoivent des soins vétérinaires premium, des examens de santé réguliers et des tests génétiques certifiés TICA pour assurer la santé et le bonheur de votre nouveau membre de la famille.",
          "home.whyChoose.genetics.title": "Lignées Champions & Génétique",
          "home.whyChoose.genetics.description": "Nos chats exotiques descendent de lignées de champions internationaux, soigneusement sélectionnés pour leurs magnifiques marques sauvages et leurs tempéraments exceptionnels. Chaque couple reproducteur est testé ADN pour maintenir les plus hauts standards génétiques au Québec.",
          "home.whyChoose.socialization.title": "Élevage Expert & Socialisation",
          "home.whyChoose.socialization.description": "Nos chatons Toyger et Bengal sont élevés dans un environnement enrichi et aimant avec une socialisation experte dès la naissance. Chaque chaton suit notre programme de développement signature, garantissant qu'ils deviennent des compagnons exotiques bien adaptés et affectueux.",

          // Footer
          "footer.findUs": "Vous pouvez nous trouver à",
          "footer.email": "COURRIEL",
          "footer.phone": "TÉLÉPHONE",
          "footer.location": "EMPLACEMENT",

          // Contact
          "contact.title": "Contactez-nous",
          "contact.name": "Votre Nom",
          "contact.email": "Votre Courriel",
          "contact.phone": "Votre Téléphone",
          "contact.message": "Votre Message",
          "contact.send": "Envoyer le Message",
          "contact.sending": "Envoi en cours...",
          "contact.success.title": "Message Envoyé!",
          "contact.success.description": "Nous vous répondrons bientôt.",
          "contact.error.title": "Erreur",
          "contact.error.description":
            "Échec de l'envoi du message. Veuillez réessayer.",
          "contact.errors.name": "Le nom est requis",
          "contact.errors.email": "Un email valide est requis",
          "contact.errors.phone": "Le numéro de téléphone est requis",
          "contact.errors.message": "Le message est requis",

          // Featured Cats Grid
          "featured.title": "Un Toyger est un Chat Véritablement Unique",
          "featured.subtitle": "Les Toygers sont plus que des rayures !",
          "featured.description":
            "Les Toygers sont plus qu'exceptionnellement intelligents. Les Toygers sont aussi des félins adorablement câlins. La nature affectueuse du Toyger s'épanouit avec les câlins et l'attention, ce qui en fait des compagnons parfaits pour ceux qui recherchent chaleur et compagnie. Leur comportement joueur en fait des compagnons de jeu idéaux pour les enfants, capables de les divertir pendant des heures. De plus, leurs capacités d'apprentissage rapide et leur manipulation facile les rendent adaptés à tous les âges. Que ce soit la douce caresse d'une main aimante ou la joie des moments partagés, les Toygers apportent du bonheur à la vie des jeunes et des moins jeunes.",
          "featured.cat1.description":
            "Une majestueuse femelle Toyger avec un profil parfait et un reflet étonnant.",
          "featured.cat2.description":
            "Profitant de la brise d'été sur la terrasse, pleine de vie et d'énergie.",
          "featured.cat3.description":
            "Un magnifique Toyger argenté profitant de la vue à travers la fenêtre d'été.",

          // Adoption Gallery
          "adoption.title": "Chatons Disponibles",
          "adoption.description":
            "Découvrez nos magnifiques chatons Toyger et Bengal disponibles à l'adoption. Chaque chaton est accompagné d'un certificat de vaccination, d'un certificat de santé et de papiers d'enregistrement.",
          "adoption.loading": "Chargement...",
          "adoption.error": "Impossible de charger les chatons",
          "adoption.noKittens": "Aucun chaton disponible pour le moment.",

          // About Us
          "about.title": "Bienvenue chez Paradise Toygers & Bengals",
          "about.intro":
            "Niché dans les paysages sereins de Charette, Québec, Paradise Toygers & Bengals est plus qu'une chatterie—c'est un sanctuaire dédié à l'élevage de chats Toyger et Bengal exceptionnels.",
          "about.experience":
            "Avec plus d'une décennie d'expérience en élevage sélectif, nous nous sommes établis comme l'une des principales chatteries de Toyger et Bengal au Canada. Notre engagement envers l'excellence se reflète dans chaque chaton que nous élevons, garantissant qu'ils répondent aux plus hauts standards de santé, de tempérament et de caractéristiques de race.",
          "about.facility":
            "Dans notre établissement du Québec, nous offrons un environnement nourrissant où nos chats reçoivent une attention individuelle, une nutrition premium et des soins vétérinaires experts. Notre programme d'élevage se concentre sur le développement des rayures distinctives des Toygers et des motifs exotiques des Bengals tout en maintenant leur personnalité aimante et sociale.",
          "about.imageAlt":
            "Majestueux chat Toyger montrant des rayures distinctives comme celles d'un tigre",

          // Login
          "login.title": "Connexion Admin",
          "login.email": "Courriel",
          "login.password": "Mot de passe",
          "login.submit": "Se connecter",
          "login.submitting": "Connexion en cours...",
          "login.error": "Courriel ou mot de passe invalide",

          // Admin Dashboard
          "admin.title": "Tableau de Bord Admin",
          "admin.logout": "Déconnexion",
          "admin.addKitten": "Ajouter un Nouveau Chaton",
          "admin.editKitten": "Modifier le Chaton",

          // Cat Details
          "cat.age": "Âge",
          "cat.gender": "Genre",
          "cat.price": "Prix",
          "cat.about": "À Propos",
          "cat.contactUs": "Nous Contacter à Propos de ce Chaton",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
