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

          // Toyger Breed Page
          "toyger.title": "Toyger Cats",
          "toyger.description": "Discover our magnificent Toyger cats, a rare breed known for their tiger-like stripes and friendly personalities. Learn about the breed and see our available Toyger kittens.",
          "toyger.hiddenTitle": "Toyger Cats: Domestic Tigers with Loving Hearts",
          "toyger.breedTitle": "Toyger Cats",
          "toyger.breedDescription": "Toygers are a relatively new and rare breed that captures the majestic appearance of tigers in a domestic cat. These stunning cats feature distinctive striped patterns and a friendly, outgoing personality that makes them wonderful family companions.",
          "toyger.breedPassion": "At Paradise Toygers & Bengals, we are passionate about developing and preserving this unique breed. Our Toygers are carefully bred for both their striking appearance and excellent temperament, making them perfect for families and cat enthusiasts alike.",
          "toyger.characteristicsTitle": "Toyger Breed Characteristics",
          "toyger.appearanceTitle": "Appearance",
          "toyger.appearancePattern": "Tiger-like striped pattern",
          "toyger.appearanceSize": "Medium to large size",
          "toyger.appearanceBuild": "Muscular, athletic build",
          "toyger.appearanceCoat": "Short, plush coat",
          "toyger.appearanceEyes": "Round, expressive eyes",
          "toyger.appearance1": "Tiger-like striped pattern",
          "toyger.appearance2": "Medium to large size with muscular build",
          "toyger.appearance3": "Short, plush coat with round, expressive eyes",
          "toyger.personalityTitle": "Personality",
          "toyger.personalityFriendly": "Friendly and outgoing",
          "toyger.personalityFamilies": "Great with families",
          "toyger.personalityIntelligent": "Intelligent and trainable",
          "toyger.personalityPlayful": "Playful and active",
          "toyger.personalityAffectionate": "Gentle and affectionate",
          "toyger.personality1": "Friendly and outgoing personality",
          "toyger.personality2": "Great with families and other pets",
          "toyger.personality3": "Intelligent, playful, and affectionate",
          "toyger.galleryTitle": "Toyger Gallery",
          "toyger.caringTitle": "Caring for Your Toyger",
          "toyger.caringDescription": "Toygers are relatively low-maintenance cats, but they still need proper care to thrive:",
          "toyger.caringPlay": "Regular play and exercise",
          "toyger.caringMental": "Mental stimulation through toys and games",
          "toyger.caringGrooming": "Weekly grooming to maintain coat condition",
          "toyger.caringDiet": "High-quality diet appropriate for their age and activity level",
          "toyger.caringVeterinary": "Regular veterinary check-ups",
          "toyger.faqTitle": "Frequently Asked Questions",
          "toyger.faq1Question": "What makes Toygers unique?",
          "toyger.faq1Answer": "Toygers are unique for their tiger-like stripes and domestic cat temperament. They were specifically bred to resemble mini-tigers while maintaining a friendly, family-oriented personality.",
          "toyger.faq2Question": "Are Toygers good with children?",
          "toyger.faq2Answer": "Yes, Toygers are excellent with children! They are known for their gentle nature, patience, and playful personality, making them ideal family pets.",
          "toyger.faq3Question": "What is the average lifespan of a Toyger?",
          "toyger.faq3Answer": "Toygers typically live 12-15 years when well cared for. Regular veterinary check-ups and a proper diet help ensure a long, healthy life.",
          "toyger.faq4Question": "How much does a Toyger cat cost?",
          "toyger.faq4Answer": "Toyger kittens from reputable breeders typically cost between $3,500 to $5,000 CAD. The price reflects their rare breed status, champion bloodlines, health guarantees, and comprehensive care including vaccinations and registration papers.",

          // Bengal Breed Page
          "bengal.title": "Bengal Cats",
          "bengal.description": "Explore our stunning Bengal cats, known for their wild appearance and loving personalities. Learn about the breed's characteristics and see our available Bengal kittens.",
          "bengal.hiddenTitle": "Bengal Cats: Wild Beauty Meets Domestic Charm",
          "bengal.breedTitle": "Bengal Cats",
          "bengal.breedDescription": "Bengal cats are a stunning breed that combines the wild appearance of their Asian leopard cat ancestors with the loving temperament of domestic cats. Known for their distinctive spotted or marbled coat patterns and athletic build, Bengals are both beautiful and engaging companions.",
          "bengal.breedPassion": "At Paradise Toygers & Bengals, we specialize in breeding high-quality Bengal cats with exceptional temperaments and striking appearances. Our Bengals are raised in a loving home environment, ensuring they develop into well-socialized and affectionate pets.",
          "bengal.characteristicsTitle": "Bengal Breed Characteristics",
          "bengal.appearanceTitle": "Appearance",
          "bengal.appearancePattern": "Distinctive spotted or marbled coat patterns",
          "bengal.appearanceSize": "Medium to large size",
          "bengal.appearanceBuild": "Muscular, athletic build",
          "bengal.appearanceCoat": "Glittered coat that appears to sparkle",
          "bengal.appearanceEyes": "Large, expressive eyes",
          "bengal.appearance1": "Distinctive spotted or marbled coat patterns",
          "bengal.appearance2": "Athletic, muscular build",
          "bengal.appearance3": "Soft, luxurious coat with glitter effect",
          "bengal.personalityTitle": "Personality",
          "bengal.personalityFriendly": "Highly intelligent and active",
          "bengal.personalityFamilies": "Social and family-oriented",
          "bengal.personalityIntelligent": "Often enjoys water",
          "bengal.personalityPlayful": "Playful and energetic",
          "bengal.personalityAffectionate": "Curious and adventurous",
          "bengal.personality1": "Active and energetic temperament",
          "bengal.personality2": "Highly intelligent and trainable",
          "bengal.personality3": "Loving and devoted to their families",
          "bengal.galleryTitle": "Bengal Gallery",
          "bengal.caringTitle": "Caring for Your Bengal",
          "bengal.caringDescription": "Bengals are active cats that require mental and physical stimulation. They thrive in homes that can provide:",
          "bengal.caringPlay": "Interactive play sessions",
          "bengal.caringMental": "Climbing spaces and cat trees",
          "bengal.caringGrooming": "Puzzle toys and mental enrichment",
          "bengal.caringDiet": "Regular grooming to maintain their beautiful coat",
          "bengal.caringVeterinary": "A balanced diet suitable for their high energy levels",
          "bengal.faqTitle": "Frequently Asked Questions",
          "bengal.faq1Question": "Are Bengals good house pets?",
          "bengal.faq1Answer": "Yes, Bengals make wonderful house pets! While they have a wild appearance, they are domesticated cats with loving personalities. They do require more attention and activity than some breeds.",
          "bengal.faq2Question": "Do Bengals need special care?",
          "bengal.faq2Answer": "Bengals are active cats that need plenty of exercise and mental stimulation. They benefit from climbing spaces, interactive toys, and regular play sessions. Their coat is relatively low-maintenance.",
          "bengal.faq3Question": "Are Bengals vocal?",
          "bengal.faq3Answer": "Yes, Bengals are known for being vocal cats. They have a distinctive voice and like to communicate with their humans through various sounds and chirps.",
          "bengal.faq4Question": "Do Bengals get along with other pets?",
          "bengal.faq4Answer": "Most Bengals can get along well with other pets when properly socialized. They are generally good with other cats and cat-friendly dogs.",
          "bengal.faq5Question": "How much does a Bengal cat cost?",
          "bengal.faq5Answer": "Bengal kittens from reputable breeders typically range from $2,000 to $4,500 CAD. The price includes health guarantees, vaccinations, registration papers, and reflects their exotic breed status and quality bloodlines.",

          // Rest of translations
          "home.viewAllCats": "Available Kittens",
          "home.learnMore": "Learn More",
          "home.whyChoose.title": "Why Choose Paradise Toygers & Bengals",
          "home.whyChoose.health.title": "Health Guarantee & Premium Care",
          "home.whyChoose.health.description": "Every Toyger and Bengal kitten comes with a comprehensive health guarantee. Our cats receive premium veterinary care, regular health screenings, and TICA-certified genetic testing to ensure your new family member is healthy and happy.",
          "home.whyChoose.genetics.title": "Champion Bloodlines & Genetics",
          "home.whyChoose.genetics.description": "Our exotic cats descend from international champion bloodlines, carefully selected for their stunning wild-looking markings and exceptional temperaments.",
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

          // 404 Page
          "404.title": "Oops! Page Not Found",
          "404.description": "Don't worry! Our cats might have played with this page. Let's help you find something amazing instead.",
          "404.exploreToygers": "Explore Toygers",
          "404.toygersDesc": "Discover our magnificent Toyger cats",
          "404.exploreBengals": "Explore Bengals",
          "404.bengalsDesc": "Meet our beautiful Bengal cats",
          "404.adoptCat": "Adopt a Cat",
          "404.adoptDesc": "Find your perfect feline companion",
          "404.contact": "Contact Us",
          "404.contactDesc": "We're here to help you",
          "404.returnHome": "Return to Homepage",
        },
      },
      fr: {
        translation: {
          // Navigation
          "nav.home": "ACCUEIL",
          "nav.about": "À PROPOS",
          "nav.contact": "CONTACT",
          "nav.adoption": "ADOPTION",

          // Toyger Breed Page
          "toyger.title": "Chats Toyger",
          "toyger.description": "Découvrez nos magnifiques chats Toyger, une race rare connue pour ses rayures de type tigre et sa personnalité amicale. Apprenez-en plus sur la race et voyez nos chatons Toyger disponibles.",
          "toyger.hiddenTitle": "Chats Toyger : Des Tigres Domestiques au Cœur Aimant",
          "toyger.breedTitle": "Chats Toyger",
          "toyger.breedDescription": "Les Toygers sont une race relativement nouvelle et rare qui capture l'apparence majestueuse des tigres dans un chat domestique. Ces chats magnifiques présentent des motifs rayés distinctifs et une personnalité amicale et extravertie qui en fait de merveilleux compagnons familiaux.",
          "toyger.breedPassion": "Chez Paradise Toygers & Bengals, nous sommes passionnés par le développement et la préservation de cette race unique. Nos Toygers sont soigneusement élevés pour leur apparence frappante et leur excellent tempérament, les rendant parfaits pour les familles et les amateurs de chats.",
          "toyger.characteristicsTitle": "Caractéristiques de la Race Toyger",
          "toyger.appearanceTitle": "Apparence",
          "toyger.appearancePattern": "Motif rayé comme un tigre",
          "toyger.appearanceSize": "Taille moyenne à grande",
          "toyger.appearanceBuild": "Construction musclée et athlétique",
          "toyger.appearanceCoat": "Pelage court et peluché",
          "toyger.appearanceEyes": "Yeux ronds et expressifs",
          "toyger.appearance1": "Motif rayé comme un tigre",
          "toyger.appearance2": "Taille moyenne à grande avec construction musclée",
          "toyger.appearance3": "Pelage court et peluché avec yeux ronds et expressifs",
          "toyger.personalityTitle": "Personnalité",
          "toyger.personalityFriendly": "Amical et extraverti",
          "toyger.personalityFamilies": "Excellent avec les familles",
          "toyger.personalityIntelligent": "Intelligent et facile à dresser",
          "toyger.personalityPlayful": "Joueur et actif",
          "toyger.personalityAffectionate": "Doux et affectueux",
          "toyger.personality1": "Personnalité amicale et extravertie",
          "toyger.personality2": "Excellent avec les familles et les autres animaux",
          "toyger.personality3": "Intelligent, joueur et affectueux",
          "toyger.galleryTitle": "Galerie Toyger",
          "toyger.caringTitle": "Prendre Soin de Votre Toyger",
          "toyger.caringDescription": "Les Toygers sont des chats relativement faciles à entretenir, mais ils ont toujours besoin de soins appropriés pour s'épanouir :",
          "toyger.caringPlay": "Jeu et exercice réguliers",
          "toyger.caringMental": "Stimulation mentale par les jouets et les jeux",
          "toyger.caringGrooming": "Toilettage hebdomadaire pour maintenir l'état du pelage",
          "toyger.caringDiet": "Alimentation de haute qualité adaptée à leur âge et niveau d'activité",
          "toyger.caringVeterinary": "Visites vétérinaires régulières",
          "toyger.faqTitle": "Questions Fréquentes",
          "toyger.faq1Question": "Qu'est-ce qui rend les Toygers uniques ?",
          "toyger.faq1Answer": "Les Toygers sont uniques par leurs rayures semblables à celles des tigres et leur tempérament de chat domestique. Ils ont été spécifiquement élevés pour ressembler à des mini-tigres tout en conservant une personnalité amicale et familiale.",
          "toyger.faq2Question": "Les Toygers sont-ils bons avec les enfants ?",
          "toyger.faq2Answer": "Oui, les Toygers sont excellents avec les enfants ! Ils sont connus pour leur nature douce, leur patience et leur personnalité enjouée, ce qui en fait des animaux de compagnie idéaux pour la famille.",
          "toyger.faq3Question": "Quelle est l'espérance de vie moyenne d'un Toyger ?",
          "toyger.faq3Answer": "Les Toygers vivent généralement de 12 à 15 ans lorsqu'ils sont bien soignés. Des visites régulières chez le vétérinaire et un régime alimentaire approprié aident à assurer une vie longue et saine.",
          "toyger.faq4Question": "Combien coûte un chat Toyger ?",
          "toyger.faq4Answer": "Les chatons Toyger de éleveurs réputés coûtent généralement entre 2 500 $ et 5 000 $ CAD. Le prix reflète leur statut de race rare, leur lignée de champion, leurs garanties de santé et leurs soins complets, y compris les vaccinations et les papiers d'enregistrement.",

          // Bengal Breed Page
          "bengal.title": "Chats Bengal",
          "bengal.description": "Explorez nos magnifiques chats Bengal, connus pour leur apparence sauvage et leur personnalité aimante. Découvrez les caractéristiques de la race et voyez nos chatons Bengal disponibles.",
          "bengal.hiddenTitle": "Chats Bengal : La Beauté Sauvage Rencontre le Charme Domestique",
          "bengal.breedTitle": "Chats Bengal",
          "bengal.breedDescription": "Les chats Bengal sont une race magnifique qui combine l'apparence sauvage de leurs ancêtres léopards d'Asie avec le tempérament aimant des chats domestiques. Connus pour leurs motifs tachetés ou marbrés distinctifs et leur construction athlétique, les Bengals sont des compagnons à la fois beaux et engageants.",
          "bengal.breedPassion": "Chez Paradise Toygers & Bengals, nous nous spécialisons dans l'élevage de chats Bengal de haute qualité avec des tempéraments exceptionnels et des apparences frappantes. Nos Bengals sont élevés dans un environnement familial aimant, garantissant qu'ils deviennent des animaux de compagnie bien socialisés et affectueux.",
          "bengal.characteristicsTitle": "Caractéristiques de la Race Bengal",
          "bengal.appearanceTitle": "Apparence",
          "bengal.appearancePattern": "Motifs tachetés ou marbrés distinctifs",
          "bengal.appearanceSize": "Taille moyenne à grande",
          "bengal.appearanceBuild": "Construction musclée et athlétique",
          "bengal.appearanceCoat": "Pelage pailleté qui semble scintiller",
          "bengal.appearanceEyes": "Grands yeux expressifs",
          "bengal.appearance1": "Motifs tachetés ou marbrés distinctifs",
          "bengal.appearance2": "Construction musclée et athlétique",
          "bengal.appearance3": "Pelage pailleté avec effet scintillant",
          "bengal.personalityTitle": "Personnalité",
          "bengal.personalityFriendly": "Très intelligent et actif",
          "bengal.personalityFamilies": "Social et orienté famille",
          "bengal.personalityIntelligent": "Aime souvent l'eau",
          "bengal.personalityPlayful": "Joueur et énergique",
          "bengal.personalityAffectionate": "Curieux et aventureux",
          "bengal.personality1": "Tempérament actif et énergique",
          "bengal.personality2": "Très intelligent et facile à dresser",
          "bengal.personality3": "Aimant et dévoué à leur famille",
          "bengal.galleryTitle": "Galerie Bengal",
          "bengal.caringTitle": "Prendre Soin de Votre Bengal",
          "bengal.caringDescription": "Les Bengals sont des chats actifs qui nécessitent une stimulation mentale et physique. Ils s'épanouissent dans les maisons qui peuvent fournir :",
          "bengal.caringPlay": "Sessions de jeu interactives",
          "bengal.caringMental": "Espaces d'escalade et arbres à chat",
          "bengal.caringGrooming": "Jouets puzzle et enrichissement mental",
          "bengal.caringDiet": "Toilettage régulier pour maintenir leur beau pelage",
          "bengal.caringVeterinary": "Un régime alimentaire équilibré adapté à leur niveau d'énergie élevé",
          "bengal.faqTitle": "Questions Fréquentes",
          "bengal.faq1Question": "Les Bengals font-ils de bons animaux de compagnie ?",
          "bengal.faq1Answer": "Oui, les Bengals font d'excellents animaux de compagnie ! Bien qu'ils aient une apparence sauvage, ce sont des chats domestiques avec des personnalités affectueuses. Ils nécessitent plus d'attention et d'activité que certaines races.",
          "bengal.faq2Question": "Les Bengals nécessitent-ils des soins particuliers ?",
          "bengal.faq2Answer": "Les Bengals sont des chats actifs qui ont besoin de beaucoup d'exercice et de stimulation mentale. Ils bénéficient d'espaces d'escalade, de jouets interactifs et de sessions de jeu régulières. Leur pelage nécessite peu d'entretien.",
          "bengal.faq3Question": "Les Bengals sont-ils vocaux ?",
          "bengal.faq3Answer": "Oui, les Bengals sont connus pour être des chats vocaux. Ils ont une voix distinctive et aiment communiquer avec leurs humains à travers divers sons et pépiements.",
          "bengal.faq4Question": "Les Bengals s'entendent-ils bien avec d'autres animaux ?",
          "bengal.faq4Answer": "La plupart des Bengals peuvent bien s'entendre avec d'autres animaux lorsqu'ils sont correctement socialisés. Ils s'entendent généralement bien avec les autres chats et les chiens habitués aux chats.",
          "bengal.faq5Question": "Combien coûte un chat Bengal ?",
          "bengal.faq5Answer": "Les chatons Bengal de éleveurs réputés varient généralement entre 2 000 $ et 4 500 $ CAD. Le prix inclut des garanties de santé, des vaccinations, des papiers d'enregistrement et reflète leur statut de race exotique et la qualité de leur lignée.",

          // Rest of translations
          "footer.findUs": "Vous pouvez nous trouver à",
          "footer.email": "COURRIEL",
          "footer.phone": "TÉLÉPHONE",
          "footer.location": "EMPLACEMENT",

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

          "adoption.title": "Chatons Disponibles",
          "adoption.description":
            "Découvrez nos magnifiques chatons Toyger et Bengal disponibles à l'adoption. Chaque chaton est accompagné d'un certificat de vaccination, d'un certificat de santé et de papiers d'enregistrement.",
          "adoption.loading": "Chargement...",
          "adoption.error": "Impossible de charger les chatons",
          "adoption.noKittens": "Aucun chaton disponible pour le moment.",

          "about.title": "Bienvenue chez Paradise Toygers & Bengals",
          "about.intro":
            "Niché dans les paysages sereins de Charette, Québec, Paradise Toygers & Bengals est plus qu'une chatterie—c'est un sanctuaire dédié à l'élevage de chats Toyger et Bengal exceptionnels.",
          "about.experience":
            "Avec plus d'une décennie d'expérience en élevage sélectif, nous nous sommes établis comme l'une des principales chatteries de Toyger et Bengal au Canada. Notre engagement envers l'excellence se reflète dans chaque chaton que nous élevons, garantissant qu'ils répondent aux plus hauts standards de santé, de tempérament et de caractéristiques de race.",
          "about.facility":
            "Dans notre établissement du Québec, nous offrons un environnement nourrissant où nos chats reçoivent une attention individuelle, une nutrition premium et des soins vétérinaires experts. Notre programme d'élevage se concentre sur le développement des rayures distinctives des Toygers et des motifs exotiques des Bengals tout en maintenant leur personnalité aimante et sociale.",
          "about.imageAlt":
            "Majestueux chat Toyger montrant des rayures distinctives comme celles d'un tigre",

          "login.title": "Connexion Admin",
          "login.email": "Courriel",
          "login.password": "Mot de passe",
          "login.submit": "Se connecter",
          "login.submitting": "Connexion en cours...",
          "login.error": "Courriel ou mot de passe invalide",

          "admin.title": "Tableau de Bord Admin",
          "admin.logout": "Déconnexion",
          "admin.addKitten": "Ajouter un Nouveau Chaton",
          "admin.editKitten": "Modifier le Chaton",

          "cat.age": "Âge",
          "cat.gender": "Genre",
          "cat.price": "Prix",
          "cat.about": "À Propos",
          "cat.contactUs": "Nous Contacter à Propos de ce Chaton",

          // 404 Page
          "404.title": "Oups ! Page Non Trouvée",
          "404.description": "Ne vous inquiétez pas ! Nos chats ont peut-être joué avec cette page. Découvrons ensemble quelque chose de magnifique.",
          "404.exploreToygers": "Découvrir les Toygers",
          "404.toygersDesc": "Découvrez nos magnifiques chats Toyger",
          "404.exploreBengals": "Découvrir les Bengals",
          "404.bengalsDesc": "Rencontrez nos superbes chats Bengal",
          "404.adoptCat": "Adopter un Chat",
          "404.adoptDesc": "Trouvez votre compagnon félin parfait",
          "404.contact": "Contactez-nous",
          "404.contactDesc": "Nous sommes là pour vous aider",
          "404.returnHome": "Retour à l'Accueil",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
