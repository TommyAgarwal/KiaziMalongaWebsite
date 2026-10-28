import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.music': 'Music',
    'nav.gallery': 'Gallery',
    'nav.weeklyProgramming': 'Weekly Programming',
    'nav.rhythmsOfFatherhood': 'Rhythms of Fatherhood',
    'nav.embraceKongo': 'Embrace Kongo',
    'nav.pelisaArts': 'Pelisa Arts and Energy',
    'nav.contact': 'Contact',
    
    // Homepage Hero
    'hero.title': 'KIAZI MALONGA',
    'hero.subtitle': 'Master Drummer. Teacher. Culture Bearer. Paternal Advocate.',
    'hero.cta': 'Explore My Journey',
    
    // Homepage Contact CTA
    'homepage.bookingCta': 'Rhythmic Realignment: A Corporate Team Building Experience with Master Drummer Kiazi Malonga',
    'homepage.contactNow': 'Contact Now',
    'homepage.rhythmicRealignment': 'RHYTHMIC REALIGNMENT',
    'homepage.corporateTeamBuilding': 'A Corporate Team Building Experience with Master Drummer Kiazi Malonga',
    
    // Homepage Bio Section
    'homepage.bio1': "Kiazi Malonga is a Congolese American musician, recording artist, cultural educator, and paternal advocate dedicated to preserving and innovating Central African musical traditions. A Stanford University graduate, voting member of the Recording Academy and current Board Chair of World Arts West, Kiazi carries forward the legacy of his late father, master dancer & drummer Malonga Casquelourd, through both performance and education. His sophomore album, Zu Dia Ngoma (2024), features newly composed works alongside never-before-recorded pieces from his father's repertoire, bridging generations through rhythm.",
    'homepage.bio2': "Kiazi has performed nationally and internationally, sharing the stage with renowned artists while also leading workshops in schools, community programs, and cultural institutions. Interested in collaborating across musical genres and with global brands, he brings the spirit of Kongo into new creative spaces. Beyond the stage, Kiazi also advocates for renewable energy efforts through his nonprofit, Pelisa Energy.",
    
    // Homepage Music Highlight
    'homepage.grammyTitle': 'CHECK OUT MY LATEST SINGLE',
    'homepage.grammyCategory': 'Where Kongo\'s Timeless Rhythms Meet Modern Grooves',
    'homepage.listenNow': 'Listen Now',
    
    // Homepage Press & Brand Partnerships
    'homepage.pressTitle': 'PRESS APPEARANCES',
    'homepage.brandsTitle': 'BRAND PARTNERSHIPS',
    
    // Homepage About Preview
    'aboutPreview.title': 'THE HEARTBEAT OF TRADITION',
    'aboutPreview.text': "Kiazi Malonga is a master drummer, educator, and culture bearer who carries the ancient rhythms of the Kongo people into the modern world. Born into a lineage of master drummers, Kiazi's life has been dedicated to preserving and sharing the sacred traditions of Central African music and culture.\n\nThrough his work as a performer, teacher, and community leader, Kiazi bridges generations and cultures, using the drum as a tool for healing, connection, and cultural preservation. His teaching extends beyond technique—he transmits the spiritual and historical significance of each rhythm, ensuring that the stories and wisdom of his ancestors continue to resonate.",
    'aboutPreview.cta': 'Learn More About Kiazi',
    
    // Homepage Music Preview
    'musicPreview.title': 'RHYTHMS THAT RESONATE',
    'musicPreview.text': 'Experience the powerful fusion of traditional Congolese rhythms and contemporary expression. From intimate drumming circles to grand performances, Kiazi\'s music carries the spirit of his ancestors while speaking to the present moment.',
    'musicPreview.cta': 'Explore Music & Performances',
    
    // Press Videos
    'press.title': 'PRESS & MEDIA',
    
    // Brand Partnerships
    'brands.title': 'TRUSTED BY LEADING ORGANIZATIONS',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.followKiazi': 'Follow Kiazi',
    'footer.connect': 'Connect',
    'footer.connectText': 'For bookings and inquiries',
    'footer.contactButton': 'Contact Kiazi',
    'footer.stayConnected': 'Stay Connected',
    'footer.newsletterText': 'Subscribe to receive news and updates!',
    'footer.emailPlaceholder': 'Email Address *',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2025 Kiazi Malonga. All rights reserved.',
    
    // About Page
    'about.title': 'ABOUT',
    'about.bio1': "Kiazi Malonga is a Congolese American drummer, recording artist, and cultural educator from Oakland, California. Born into a lineage of master artists, he began drumming at age six with his father's company, Fua Dia Kongo, where he was immersed in the music, dance, and folklore of Central Africa.",
    'about.bio3': "At the center of his work is the Ngoma—the drum as voice, the original tool of communication for an original people. More than rhythm, it is an ancient language that has carried stories, guided ceremonies, and united communities for generations. In his 2024 album, Zu Dia Ngoma (\"The Voice of the Drum\"), Kiazi expands this tradition, weaving ancestral sounds with contemporary expression through international collaborations and innovative compositions.",
    'about.bio4': "Guided by the memory of his parents, Kiazi uses the Ngoma to communicate and connect with people, bridging the wisdom of an ancient communication system with the realities of modern life. His intent is to revive this timeless language and remind us that the voice of the drum still calls us together—in rhythm, resilience, and shared humanity.",
    
    // Music Page
    'music.title': 'MUSIC',
    'music.discography': 'DISCOGRAPHY',
    'music.newSingle': 'New Single',
    'music.videos': 'MUSIC VIDEOS',
    'music.streamingCta': "Stream Kiazi Malonga's music on your favorite platform",
    'music.listenNow': 'Listen now!',
    
    // Gallery Page
    'gallery.title': 'GALLERY',
    'gallery.subtitle': 'Moments captured in rhythm and culture',
    
    // Drum Classes Page
    'drumClasses.title': 'WEEKLY PROGRAMMING',
    'drumClasses.drum.title': 'Weekly Drum Class',
    'drumClasses.drum.time': 'Every Saturday • 11:30am - 1:00pm',
    'drumClasses.drum.location': 'Malonga Casquelourd Center for the Arts',
    'drumClasses.drum.address': '2nd Floor Studio A',
    'drumClasses.drum.street': '1428 Alice Street, Oakland, CA',
    'drumClasses.drum.description': "We take a weekly journey to the Kongo Kingdom through rhythms on the Ngoma drum. We cover base, tone, slap, as well as additional techniques specific to the Ngoma. We explore the music from a folkloric perspective, understanding the specific context in which these rhythms are played and we also have a lot of fun doing it! Loaner Ngoma's are available upon request. Hope to see you there!",
    'drumClasses.dance.title': 'Weekly Dance Class',
    'drumClasses.dance.time': 'Every Saturday • 1:00pm - 2:30pm',
    'drumClasses.dance.location': 'Malonga Casquelourd Center for the Arts',
    'drumClasses.dance.address': '2nd Floor Studio A',
    'drumClasses.dance.street': '1428 Alice Street, Oakland, CA',
    'drumClasses.dance.description1': 'Performed to the sounds of the ngoma, or traditional Congolese drum, Congolese dance is a central part of the rich cultural legacy of descendants of the Kongo Kingdom (i.e. modern-day Congo-Brazzaville, Congo-Kinshasa (Zaire) and Angola).',
    'drumClasses.dance.description2': 'The movement style is distinguished by its groundedness, syncopated movements, hip/torso/shoulder isolations, and polyrhythmic footwork. Celebrated for its fluidity, grace and soulful and explosive energy, Congolese dance is a healing experience for mind, body and Spirit.',
    'drumClasses.dance.description3': 'Our weekly Congolese dance classes are open to all levels. The 90 minute classes include 30 minutes of warmup, 60 minutes of instruction and feature live drumming.',
    'drumClasses.cta.title': 'Kiazi is available to teach at events, festivals, and workshops.',
    'drumClasses.cta.button': 'Contact Now',
    
    // Rhythms of Fatherhood Page
    'fatherhood.title': 'RHYTHMS OF FATHERHOOD',
    'fatherhood.paragraph1': 'Rhythms of Fatherhood is a community-driven initiative that celebrates and uplifts the vital role of Black and Brown fathers. Rooted in Kongo cultural traditions, the program blends drumming, movement, storytelling, and shared meals to create safe, affirming spaces where fathers and their children can bond, heal, and grow together. Each gathering brings Congolese drum classes, open dialogue with therapists, physical wellness activities, and intergenerational cultural exchange.',
    'fatherhood.paragraph2': 'Drawing from Congolese concepts of fatherhood and family, the program emphasizes community, interdependence, and the responsibility of fathers not only to their children, but to the collective. We also partner with local businesses and restaurants, strengthening ties between fathers and the broader community.',
    'fatherhood.paragraph3': 'By centering fatherhood through culture and connection, Rhythms of Fatherhood counters isolation, stereotypes, and systemic challenges. Instead, it highlights joy, resilience, and the power of paternal love. Whether through drumming, dialogue, or breaking bread, the program builds connections that nurture families, strengthen communities, and redefine narratives around fatherhood.',
    'fatherhood.donateButton': 'Donate to Our Efforts',
    'fatherhood.ctaTitle': 'Stay Connected!',
    'fatherhood.joinTitle': 'Join Us for Our Next Event!',
    'fatherhood.followText': 'Follow @the_rhythms_of_fatherhood_ on Instagram to stay updated on upcoming events and community gatherings.',
    'fatherhood.followButton': 'Follow on Instagram',
    'fatherhood.pastEvents': 'Past Events',
    'fatherhood.vision.title': 'The Vision',
    'fatherhood.vision.text': 'In many traditional African cultures, drumming and music serve as vital tools for transmitting knowledge, values, and cultural identity from one generation to the next. Rhythms of Fatherhood draws on these time-honored practices to help modern fathers reconnect with their children in meaningful ways.\n\nThis program recognizes that fatherhood is both a personal journey and a cultural responsibility. Through drumming circles, storytelling sessions, and cultural education, fathers and children create shared experiences that strengthen their relationships while connecting to broader traditions of family and community.',
    'fatherhood.whatWeOffer.title': 'What We Offer',
    'fatherhood.whatWeOffer.workshops': 'Father-Child Drumming Workshops',
    'fatherhood.whatWeOffer.workshopsDesc': 'Interactive sessions where fathers and children learn traditional rhythms together, building communication and cooperation through music.',
    'fatherhood.whatWeOffer.circles': 'Fatherhood Circles',
    'fatherhood.whatWeOffer.circlesDesc': 'Supportive gatherings where fathers share experiences, challenges, and wisdom while exploring cultural practices that strengthen family bonds.',
    'fatherhood.whatWeOffer.cultural': 'Cultural Education Programs',
    'fatherhood.whatWeOffer.culturalDesc': 'Learn about African traditions of fatherhood, family, and community, gaining insights that can enrich modern parenting.',
    'fatherhood.whatWeOffer.events': 'Family Cultural Events',
    'fatherhood.whatWeOffer.eventsDesc': 'Celebrations that bring families together through music, dance, food, and storytelling, creating lasting memories and cultural connections.',
    'fatherhood.impact.title': 'The Impact',
    'fatherhood.impact.text': 'Fathers who participate in Rhythms of Fatherhood report deeper connections with their children, increased confidence in their parenting, and a greater sense of cultural identity. Children benefit from quality time with their fathers, exposure to rich cultural traditions, and the development of musical and social skills.\n\nThe program creates a supportive community where fathers can learn from each other and from traditional wisdom, finding new ways to be present and engaged in their children\'s lives.',
    'fatherhood.cta': 'Join Rhythms of Fatherhood',
    
    // Pelisa Arts & Energy Page
    'pelisa.title': 'PELISA ARTS & ENERGY',
    'pelisa.mission.title': 'Our Mission & Purpose',
    'pelisa.mission.paragraph1': 'Pelisa Arts and Energy honors and celebrates the cultural heritage of Congolese culture in America by preserving, presenting, and promoting the music, dance, and cultural arts of the region. We are dedicated to fostering a deeper understanding and appreciation of Congolese culture while bridging cultural divides and nurturing the growth of African arts in the diaspora, serving as a cross-cultural bridge by promoting exchange and understanding. By safeguarding the rich traditions of the Kongo Kingdom and Central Africa through preservation of authentic music, dance, and cultural practices, we help to ensure that these traditions are passed down to future generations.',
    'pelisa.mission.paragraph2': 'In addition to our cultural preservation efforts, Pelisa Arts & Energy is committed to increasing access to reliable clean energy in Congo. Through education, philanthropy, and the introduction of high-quality, affordable solar products to the Congolese market, we aim to create a demand for sustainable energy solutions. By marrying our cultural initiatives with our energy access goals, we are working towards a more sustainable and empowered future for the Congolese community. Through our work, we strive to empower, uplift, and advocate for the African-Diasporic community in California while also connecting back to our ancestral roots in Congo.',
    'pelisa.who.title': 'Who are we?',
    'pelisa.who.paragraph1': 'Pelisa Arts & Energy is an Oakland-based nonprofit and social enterprise dedicated to preserving Congolese cultural heritage and bridging the energy gap in Congo-Brazzaville.',
    'pelisa.who.paragraph2': 'Pelisa Arts & Energy centers the voices of our community members in all of our programs and services. We are deeply committed to presenting arts and cultural programs that celebrate and promote the traditions of communities of color, focusing on Congolese culture within diverse communities in the San Francisco Bay Area. Our programs are centered on cultural traditions and contemporary concepts that highlight the vibrancy and resilience of these communities.',
    'pelisa.programs.title': 'CORE PROGRAMS',
    'pelisa.programs.ngoma.title': 'Ngoma Drumming and Percussion Series',
    'pelisa.programs.ngoma.description': "Pelisa's flagship program offers free drumming workshops for African-Diasporic youth in the Bay Area, providing hands-on instruction in traditional Congolese percussion. Engaging primarily Black, Afro-Latinx, and Afro-Pacific Islander youth, these sessions foster cultural pride and community cohesion through the rich rhythms and traditions of Ngoma drumming.",
    'pelisa.programs.outreach.title': 'Educational Outreach and Community Events',
    'pelisa.programs.outreach.description': 'Through partnerships with schools and community centers, Pelisa offers dance, music, and cultural workshops that bring Kongo Kingdom traditions to a diverse audience. Regular drum circles, potlucks, and community events provide a platform for participants of all ages to connect with Congolese culture, building bridges across cultural backgrounds.',
    'pelisa.programs.mbongui.title': 'Mbongui Healing Project',
    'pelisa.programs.mbongui.description': 'In collaboration with The Rhythms of Fatherhood, Pelisa offers an African drumming and dance series specifically for Black men, supporting mental health and community healing. Rooted in the mbongui healing traditions of the Kongo Kingdom, these monthly gatherings create a safe space for participants to share, connect, and heal collectively.',
    'pelisa.programs.justice.title': 'Social Justice and Environmental Advocacy',
    'pelisa.programs.justice.description': 'Using the arts as a vehicle for change, Pelisa raises awareness about human rights abuses in the DRC, including the environmental and social impacts of cobalt mining. By engaging Bay Area communities, especially tech professionals, Pelisa fosters dialogue on the impact of resource extraction on African communities and ecosystems.',
    'pelisa.energy.title': 'Renewable Energy Initiatives',
    'pelisa.energy.description': 'Bridging the energy gap in both the Bay Area and Congo-Brazzaville, Pelisa distributes solar equipment to underserved communities, particularly those most affected by climate change. Through workshops and sustainable energy education, Pelisa promotes renewable energy solutions that empower communities and support environmental justice.',
    'pelisa.cta.title': 'Support Our Work',
    'pelisa.cta.description': 'Pelisa Arts & Energy is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible and makes a lasting impact.',
    'pelisa.cta.button': 'Donate Now',
    'pelisa.services.title': 'Our Services',
    'pelisa.services.consulting': 'Cultural Consulting',
    'pelisa.services.consultingDesc': 'We provide expert guidance on authentic representation of African culture in arts programming, exhibitions, and educational initiatives.',
    'pelisa.services.workshops': 'Workshops & Residencies',
    'pelisa.services.workshopsDesc': 'Immersive drumming and cultural education programs for schools, universities, community centers, and arts organizations.',
    'pelisa.services.performances': 'Performances & Demonstrations',
    'pelisa.services.performancesDesc': 'Dynamic presentations that showcase traditional Congolese music and dance, with educational context and audience engagement.',
    'pelisa.services.program': 'Program Development',
    'pelisa.services.programDesc': 'Custom-designed cultural programs tailored to your organization\'s needs and goals, from one-time events to ongoing partnerships.',
    'pelisa.approach.title': 'Our Approach',
    'pelisa.approach.text': 'At Pelisa Arts and Energy, we believe that cultural education should be authentic, respectful, and transformative. We draw directly from traditional knowledge and practices, presenting them in ways that are accessible and relevant to contemporary audiences.\n\nOur programs emphasize:\n• Deep cultural context and historical understanding\n• Hands-on participation and experiential learning\n• Community building and connection\n• Respect for tradition alongside creative innovation\n• Intergenerational knowledge sharing',
    'pelisa.partner.title': 'Partner With Us',
    'pelisa.partner.text': 'Whether you\'re planning a cultural event, developing an educational program, or seeking authentic African cultural consultation, Pelisa Arts and Energy can help bring your vision to life with integrity and excellence.',
    'pelisa.cta': 'Contact Us About Your Project',
    
    // Embrace Kongo Page
    'embraceKongo.title': 'EMBRACE KONGO',
    'embraceKongo.section1.title': 'Join us in July 2027 for a transformative journey to Congo-Brazzaville.',
    'embraceKongo.section1.description': 'This 10-day program offers workshops, traditional performances, and guided experiences led by local and international master artists.',
    'embraceKongo.section2.title': 'A Complete Cultural Experience',
    'embraceKongo.experience.text': 'Over ten days, participants will:\n• Learn traditional Kongo drumming and dance from master teachers\n• Participate in cultural ceremonies and spiritual practices\n• Engage with local communities and cultural bearers\n• Explore the historical and contemporary significance of Kongo traditions\n• Create deep connections with fellow participants and local hosts\n• Experience daily life in a traditional Kongo community\n• Develop a profound understanding of African cultural heritage',
    'embraceKongo.section2.description': 'Step into the heart of Kongo culture: learn the rhythms and movements of traditional dance and drum, savor homestyle and street cuisine, witness the beauty of the Kongo River and Bantu Beach, and explore historic landmarks and vibrant artisan marketplaces. Each moment is designed to connect you deeply with local communities while celebrating the living heritage of Congo-Brazzaville.',
    'embraceKongo.ctaTitle': 'Interested in joining us?',
    'embraceKongo.ctaDescription': 'Let us know in the contact section and include "Embrace Kongo" in the subject line to be notified with more details.',
    'embraceKongo.ctaButton': 'Contact Us',
    'embraceKongo.daily.title': 'Daily Activities',
    'embraceKongo.daily.morning': 'Morning Sessions',
    'embraceKongo.daily.morningDesc': 'Drumming and dance instruction, cultural history lessons, and spiritual practices.',
    'embraceKongo.daily.afternoon': 'Afternoon Experiences',
    'embraceKongo.daily.afternoonDesc': 'Community visits, cultural site explorations, and hands-on traditional craft workshops.',
    'embraceKongo.daily.evening': 'Evening Gatherings',
    'embraceKongo.daily.eveningDesc': 'Performances, storytelling sessions, communal meals, and reflection circles.',
    'embraceKongo.who.title': 'Who Should Attend',
    'embraceKongo.who.text': 'Embrace Kongo welcomes:\n• Drummers and musicians seeking authentic cultural knowledge\n• Educators and cultural workers\n• Individuals exploring their African heritage\n• Anyone passionate about cultural preservation and exchange\n• Those seeking transformative personal and spiritual growth\n\nNo previous drumming experience is required—just an open heart and genuine respect for the culture.',
    'embraceKongo.logistics.title': 'Program Details',
    'embraceKongo.logistics.duration': '10 days / 9 nights',
    'embraceKongo.logistics.included': 'Included: Accommodation, meals, instruction, cultural activities, and local transportation',
    'embraceKongo.logistics.groupSize': 'Limited to 15 participants for an intimate, personalized experience',
    'embraceKongo.logistics.next': 'Next Program: Contact for upcoming dates',
    'embraceKongo.cta': 'Learn More & Register',
    
    // Contact Page
    'contact.title': 'CONTACT',
    'contact.work.title': "Let's Work Together",
    'contact.work.description': "I'm available for performances, drum classes, cultural workshops, collaborations, and speaking engagements. Let's create something meaningful together.",
    'contact.or': 'OR',
    'contact.email.button': 'Email me directly',
    'contact.social.title': 'Follow & Connect',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.music': 'Musique',
    'nav.gallery': 'Galerie',
    'nav.weeklyProgramming': 'Programmation Hebdomadaire',
    'nav.rhythmsOfFatherhood': 'Rythmes de la Paternité',
    'nav.embraceKongo': 'Embrasser Kongo',
    'nav.pelisaArts': 'Pelisa Arts et Énergie',
    'nav.contact': 'Contact',
    
    // Homepage Hero
    'hero.title': 'KIAZI MALONGA',
    'hero.subtitle': 'Maître Percussioniste. Enseignant. Porteur de Culture. Défenseur Paternel.',
    'hero.cta': 'Découvrir Mon Parcours',
    
    // Homepage Contact CTA
    'homepage.bookingCta': 'Réalignement Rythmique : Une Expérience de Consolidation d\'Équipe d\'Entreprise avec le Maître Percussioniste Kiazi Malonga',
    'homepage.contactNow': 'Contactez Maintenant',
    'homepage.rhythmicRealignment': 'RÉALIGNEMENT RYTHMIQUE',
    'homepage.corporateTeamBuilding': 'Une Expérience de Consolidation d\'Équipe d\'Entreprise avec le Maître Percussioniste Kiazi Malonga',
    
    // Homepage Bio Section
    'homepage.bio1': "Kiazi Malonga est un musicien, artiste d'enregistrement, éducateur culturel et défenseur paternel congolais-américain dédié à la préservation et à l'innovation des traditions musicales d'Afrique centrale. Diplômé de l'Université Stanford, membre votant de la Recording Academy et actuel président du conseil d'administration de World Arts West, Kiazi perpétue l'héritage de son défunt père, le maître danseur et percussioniste Malonga Casquelourd, à travers la performance et l'éducation. Son deuxième album, Zu Dia Ngoma (2024), présente des œuvres nouvellement composées ainsi que des pièces jamais enregistrées auparavant du répertoire de son père, reliant les générations par le rythme.",
    'homepage.bio2': "Kiazi s'est produit à l'échelle nationale et internationale, partageant la scène avec des artistes renommés tout en animant également des ateliers dans des écoles, des programmes communautaires et des institutions culturelles. Intéressé par la collaboration à travers les genres musicaux et avec des marques mondiales, il apporte l'esprit du Kongo dans de nouveaux espaces créatifs. Au-delà de la scène, Kiazi plaide également pour les efforts d'énergie renouvelable à travers son organisation à but non lucratif, Pelisa Energy.",
    
    // Homepage Music Highlight
    'homepage.grammyTitle': 'DÉCOUVREZ MON DERNIER SINGLE',
    'homepage.grammyCategory': 'Où les Rythmes Intemporels du Kongo Rencontrent les Grooves Modernes',
    'homepage.listenNow': 'Écoutez Maintenant',
    
    // Homepage Press & Brand Partnerships
    'homepage.pressTitle': 'APPARITIONS PRESSE',
    'homepage.brandsTitle': 'PARTENARIATS',
    
    // Homepage About Preview
    'aboutPreview.title': 'LE BATTEMENT DE CŒUR DE LA TRADITION',
    'aboutPreview.text': "Kiazi Malonga est un maître percussioniste, éducateur et porteur de culture qui porte les rythmes anciens du peuple Kongo dans le monde moderne. Né dans une lignée de maîtres percussionistes, la vie de Kiazi a été dédiée à la préservation et au partage des traditions sacrées de la musique et de la culture d'Afrique centrale.\n\nÀ travers son travail en tant qu'artiste, enseignant et leader communautaire, Kiazi crée des ponts entre les générations et les cultures, utilisant le tambour comme outil de guérison, de connexion et de préservation culturelle. Son enseignement va au-delà de la technique—il transmet la signification spirituelle et historique de chaque rythme, s'assurant que les histoires et la sagesse de ses ancêtres continuent de résonner.",
    'aboutPreview.cta': 'En Savoir Plus Sur Kiazi',
    
    // Homepage Music Preview
    'musicPreview.title': 'RYTHMES QUI RÉSONNENT',
    'musicPreview.text': 'Découvrez la fusion puissante des rythmes congolais traditionnels et de l\'expression contemporaine. Des cercles de tambours intimes aux grandes performances, la musique de Kiazi porte l\'esprit de ses ancêtres tout en parlant au moment présent.',
    'musicPreview.cta': 'Explorer la Musique & les Performances',
    
    // Press Videos
    'press.title': 'PRESSE & MÉDIAS',
    
    // Brand Partnerships
    'brands.title': 'ORGANISATIONS PARTENAIRES DE CONFIANCE',
    
    // Footer
    'footer.navigation': 'Navigation',
    'footer.followKiazi': 'Suivre Kiazi',
    'footer.connect': 'Connexion',
    'footer.connectText': 'Pour réservations et demandes',
    'footer.contactButton': 'Contacter Kiazi',
    'footer.stayConnected': 'Restez Connecté',
    'footer.newsletterText': 'Abonnez-vous pour recevoir des nouvelles et des mises à jour!',
    'footer.emailPlaceholder': 'Adresse E-mail *',
    'footer.subscribe': 'S\'abonner',
    'footer.copyright': '© 2025 Kiazi Malonga. Tous droits réservés.',
    
    // About Page
    'about.title': 'À PROPOS',
    'about.bio1': "Kiazi Malonga est un percussioniste, artiste d'enregistrement et éducateur culturel congolais américain d'Oakland, en Californie. Né dans une lignée de maîtres artistes, il a commencé à jouer du tambour à l'âge de six ans avec la compagnie de son père, Fua Dia Kongo, où il a été immergé dans la musique, la danse et le folklore d'Afrique centrale.",
    'about.bio3': "Au centre de son travail se trouve le Ngoma—le tambour comme voix, l'outil de communication original d'un peuple original. Plus qu'un rythme, c'est une langue ancienne qui a porté des histoires, guidé des cérémonies et uni des communautés pendant des générations. Dans son album de 2024, Zu Dia Ngoma (\"La Voix du Tambour\"), Kiazi élargit cette tradition, tissant des sons ancestraux avec une expression contemporaine à travers des collaborations internationales et des compositions innovantes.",
    'about.bio4': "Guidé par la mémoire de ses parents, Kiazi utilise le Ngoma pour communiquer et se connecter avec les gens, reliant la sagesse d'un système de communication ancien avec les réalités de la vie moderne. Son intention est de raviver ce langage intemporel et de nous rappeler que la voix du tambour nous appelle toujours ensemble—dans le rythme, la résilience et l'humanité partagée.",
    
    // Music Page
    'music.title': 'MUSIQUE',
    'music.discography': 'DISCOGRAPHIE',
    'music.newSingle': 'Nouveau single',
    'music.videos': 'CLIPS',
    'music.streamingCta': "Diffusez la musique de Kiazi Malonga sur votre plateforme préférée",
    'music.listenNow': 'Écoutez maintenant!',
    
    // Gallery Page
    'gallery.title': 'GALERIE',
    'gallery.subtitle': 'Moments capturés en rythme et culture',
    
    // Drum Classes Page
    'drumClasses.title': 'PROGRAMMATION HEBDOMADAIRE',
    'drumClasses.drum.title': 'Cours de Percussion Hebdomadaire',
    'drumClasses.drum.time': 'Chaque Samedi • 11h30 - 13h00',
    'drumClasses.drum.location': 'Centre Malonga Casquelourd pour les Arts',
    'drumClasses.drum.address': 'Studio A au 2e Étage',
    'drumClasses.drum.street': '1428 Alice Street, Oakland, CA',
    'drumClasses.drum.description': "Nous faisons un voyage hebdomadaire vers le Royaume Kongo à travers les rythmes sur le tambour Ngoma. Nous couvrons la base, le ton, la claque, ainsi que des techniques supplémentaires spécifiques au Ngoma. Nous explorons la musique d'un point de vue folklorique, en comprenant le contexte spécifique dans lequel ces rythmes sont joués et nous nous amusons beaucoup en le faisant! Des Ngoma de prêt sont disponibles sur demande. J'espère vous y voir!",
    'drumClasses.dance.title': 'Cours de Danse Hebdomadaire',
    'drumClasses.dance.time': 'Chaque Samedi • 13h00 - 14h30',
    'drumClasses.dance.location': 'Centre Malonga Casquelourd pour les Arts',
    'drumClasses.dance.address': 'Studio A au 2e Étage',
    'drumClasses.dance.street': '1428 Alice Street, Oakland, CA',
    'drumClasses.dance.description1': "Exécutée au son du ngoma, ou tambour congolais traditionnel, la danse congolaise est une partie centrale du riche héritage culturel des descendants du Royaume Kongo (c'est-à-dire le Congo-Brazzaville moderne, le Congo-Kinshasa (Zaïre) et l'Angola).",
    'drumClasses.dance.description2': "Le style de mouvement se distingue par son ancrage, ses mouvements syncopés, ses isolations de hanche/torse/épaule et son jeu de jambes polyrythmique. Célébrée pour sa fluidité, sa grâce et son énergie profonde et explosive, la danse congolaise est une expérience de guérison pour l'esprit, le corps et l'Esprit.",
    'drumClasses.dance.description3': 'Nos cours hebdomadaires de danse congolaise sont ouverts à tous les niveaux. Les cours de 90 minutes comprennent 30 minutes d\'échauffement, 60 minutes d\'instruction et comportent des percussions live.',
    'drumClasses.cta.title': 'Kiazi est disponible pour enseigner lors d\'événements, festivals et ateliers.',
    'drumClasses.cta.button': 'Contactez Maintenant',
    'drumClasses.advanced.title': 'Classe de Maître Avancé',
    'drumClasses.advanced.schedule': 'Vendredis, 19h00 - 21h00',
    'drumClasses.advanced.description': 'Pour les percussionistes expérimentés en quête de maîtrise. Plongée profonde dans les rythmes sacrés, l\'improvisation et les dimensions spirituelles du tambourinage.',
    'drumClasses.family.title': 'Journée de Tambourinage Familial',
    'drumClasses.family.schedule': 'Premier samedi de chaque mois, 14h00 - 16h00',
    'drumClasses.family.description': 'Amenez toute la famille pour un après-midi de rythme, de danse et de célébration culturelle. Tous les âges sont les bienvenus!',
    'drumClasses.cta': 'Contactez pour l\'inscription aux cours',
    
    // Rhythms of Fatherhood Page
    'fatherhood.title': 'RYTHMES DE LA PATERNITÉ',
    'fatherhood.paragraph1': "Rythmes de la Paternité est une initiative communautaire qui célèbre et élève le rôle vital des pères racisées. Enraciné dans les traditions culturelles Kongo, le programme mélange tambour, mouvement, narration et repas partagés pour créer des espaces sûrs et affirmants où les pères et leurs enfants peuvent se lier, guérir et grandir ensemble. Chaque rassemblement propose des cours de tambour congolais, un dialogue ouvert avec des thérapeutes, des activités de bien-être physique et des échanges culturels intergénérationnels.",
    'fatherhood.paragraph2': "S'inspirant des concepts congolais de paternité et de famille, le programme met l'accent sur la communauté, l'interdépendance et la responsabilité des pères non seulement envers leurs enfants, mais envers le collectif. Nous nous associons également avec des entreprises et restaurants locaux, renforçant les liens entre les pères et la communauté au sens large.",
    'fatherhood.paragraph3': "En centrant la paternité à travers la culture et la connexion, Rythmes de la Paternité combat l'isolement, les stéréotypes et les défis systémiques. Au lieu de cela, il met en lumière la joie, la résilience et le pouvoir de l'amour paternel. Que ce soit par le tambour, le dialogue ou le partage du pain, le programme construit des connexions qui nourrissent les familles, renforcent les communautés et redéfinissent les récits autour de la paternité.",
    'fatherhood.donateButton': 'Faire un Don pour Nos Efforts',
    'fatherhood.ctaTitle': 'Restez Connecté!',
    'fatherhood.joinTitle': 'Rejoignez-Nous pour Notre Prochain Événement!',
    'fatherhood.followText': 'Suivez @the_rhythms_of_fatherhood_ sur Instagram pour rester informé des événements à venir et des rassemblements communautaires.',
    'fatherhood.followButton': 'Suivre sur Instagram',
    'fatherhood.pastEvents': 'Événements Passés',
    'fatherhood.vision.title': 'La Vision',
    'fatherhood.vision.text': 'Dans de nombreuses cultures africaines traditionnelles, le tambourinage et la musique servent d\'outils vitaux pour transmettre les connaissances, les valeurs et l\'identité culturelle d\'une génération à l\'autre. Rythmes de la Paternité s\'appuie sur ces pratiques ancestrales pour aider les pères modernes à se reconnecter avec leurs enfants de manière significative.\n\nCe programme reconnaît que la paternité est à la fois un voyage personnel et une responsabilité culturelle. À travers les cercles de tambours, les sessions de narration et l\'éducation culturelle, les pères et les enfants créent des expériences partagées qui renforcent leurs relations tout en se connectant à des traditions plus larges de famille et de communauté.',
    'fatherhood.whatWeOffer.title': 'Ce Que Nous Offrons',
    'fatherhood.whatWeOffer.workshops': 'Ateliers de Tambourinage Père-Enfant',
    'fatherhood.whatWeOffer.workshopsDesc': 'Sessions interactives où les pères et les enfants apprennent ensemble les rythmes traditionnels, développant la communication et la coopération à travers la musique.',
    'fatherhood.whatWeOffer.circles': 'Cercles de Paternité',
    'fatherhood.whatWeOffer.circlesDesc': 'Rassemblements de soutien où les pères partagent des expériences, des défis et de la sagesse tout en explorant des pratiques culturelles qui renforcent les liens familiaux.',
    'fatherhood.whatWeOffer.cultural': 'Programmes d\'Éducation Culturelle',
    'fatherhood.whatWeOffer.culturalDesc': 'Découvrez les traditions africaines de la paternité, de la famille et de la communauté, en gagnant des perspectives qui peuvent enrichir la parentalité moderne.',
    'fatherhood.whatWeOffer.events': 'Événements Culturels Familiaux',
    'fatherhood.whatWeOffer.eventsDesc': 'Célébrations qui rassemblent les familles à travers la musique, la danse, la nourriture et la narration, créant des souvenirs durables et des connexions culturelles.',
    'fatherhood.impact.title': 'L\'Impact',
    'fatherhood.impact.text': 'Les pères qui participent aux Rythmes de la Paternité rapportent des connexions plus profondes avec leurs enfants, une confiance accrue dans leur parentalité et un plus grand sens de l\'identité culturelle. Les enfants bénéficient de temps de qualité avec leurs pères, d\'exposition à de riches traditions culturelles et du développement de compétences musicales et sociales.\n\nLe programme crée une communauté de soutien où les pères peuvent apprendre les uns des autres et de la sagesse traditionnelle, trouvant de nouvelles façons d\'être présents et engagés dans la vie de leurs enfants.',
    'fatherhood.cta': 'Rejoindre Rythmes de la Paternité',
    
    // Pelisa Arts & Energy Page
    'pelisa.title': 'PELISA ARTS & ÉNERGIE',
    'pelisa.mission.title': 'Notre Mission & Objectif',
    'pelisa.mission.paragraph1': "Pelisa Arts et Énergie honore et célèbre l'héritage culturel de la culture congolaise en Amérique en préservant, présentant et promouvant la musique, la danse et les arts culturels de la région. Nous nous engageons à favoriser une compréhension et une appréciation plus profondes de la culture congolaise tout en comblant les divisions culturelles et en nourrissant la croissance des arts africains dans la diaspora, servant de pont interculturel en promouvant l'échange et la compréhension. En sauvegardant les riches traditions du Royaume Kongo et de l'Afrique centrale par la préservation de la musique, de la danse et des pratiques culturelles authentiques, nous contribuons à garantir que ces traditions soient transmises aux générations futures.",
    'pelisa.mission.paragraph2': "En plus de nos efforts de préservation culturelle, Pelisa Arts & Énergie s'engage à accroître l'accès à une énergie propre fiable au Congo. Par l'éducation, la philanthropie et l'introduction de produits solaires de haute qualité et abordables sur le marché congolais, nous visons à créer une demande de solutions énergétiques durables. En mariant nos initiatives culturelles avec nos objectifs d'accès à l'énergie, nous travaillons vers un avenir plus durable et autonomisé pour la communauté congolaise. Par notre travail, nous nous efforçons d'autonomiser, d'élever et de défendre la communauté afro-diasporique en Californie tout en nous reconnectant à nos racines ancestrales au Congo.",
    'pelisa.who.title': 'Qui sommes-nous?',
    'pelisa.who.paragraph1': "Pelisa Arts & Énergie est une organisation à but non lucratif et une entreprise sociale basée à Oakland, dédiée à la préservation de l'héritage culturel congolais et à la réduction de l'écart énergétique au Congo-Brazzaville.",
    'pelisa.who.paragraph2': "Pelisa Arts & Énergie centre les voix des membres de notre communauté dans tous nos programmes et services. Nous nous engageons profondément à présenter des programmes d'arts et de culture qui célèbrent et promeuvent les traditions des communautés de couleur, en nous concentrant sur la culture congolaise au sein de diverses communautés dans la région de la baie de San Francisco. Nos programmes sont centrés sur les traditions culturelles et les concepts contemporains qui mettent en valeur la vitalité et la résilience de ces communautés.",
    'pelisa.programs.title': 'PROGRAMMES PRINCIPAUX',
    'pelisa.programs.ngoma.title': 'Série de Tambour et Percussion Ngoma',
    'pelisa.programs.ngoma.description': "Le programme phare de Pelisa offre des ateliers de tambour gratuits pour les jeunes afro-diasporiques dans la région de la Baie, fournissant une instruction pratique en percussion congolaise traditionnelle. Engageant principalement les jeunes noirs, afro-latinx et afro-polynésien, ces sessions favorisent la fierté culturelle et la cohésion communautaire à travers les riches rythmes et traditions du tambour Ngoma.",
    'pelisa.programs.outreach.title': 'Sensibilisation Éducative et Événements Communautaires',
    'pelisa.programs.outreach.description': "Grâce à des partenariats avec des écoles et des centres communautaires, Pelisa propose des ateliers de danse, de musique et de culture qui apportent les traditions du Royaume Kongo à un public diversifié. Des cercles de tambours réguliers, des repas-partage et des événements communautaires offrent une plateforme permettant aux participants de tous âges de se connecter à la culture congolaise, établissant des ponts à travers les origines culturelles.",
    'pelisa.programs.mbongui.title': 'Projet de Guérison Mbongui',
    'pelisa.programs.mbongui.description': "En collaboration avec The Rhythms of Fatherhood, Pelisa propose une série de tambour et de danse africains spécifiquement pour les hommes noirs, soutenant la santé mentale et la guérison communautaire. Enracinées dans les traditions de guérison mbongui du Royaume Kongo, ces rassemblements mensuels créent un espace sûr pour que les participants partagent, se connectent et guérissent collectivement.",
    'pelisa.programs.justice.title': 'Justice Sociale et Plaidoyer Environnemental',
    'pelisa.programs.justice.description': "En utilisant les arts comme véhicule de changement, Pelisa sensibilise aux abus des droits de l'homme en RDC, y compris les impacts environnementaux et sociaux de l'extraction du cobalt. En engageant les communautés de la région de la Baie, en particulier les professionnels de la technologie, Pelisa favorise le dialogue sur l'impact de l'extraction des ressources sur les communautés et les écosystèmes africains.",
    'pelisa.energy.title': 'Initiatives en Énergie Renouvelable',
    'pelisa.energy.description': "En comblant l'écart énergétique dans la région de la Baie et au Congo-Brazzaville, Pelisa distribue des équipements solaires aux communautés mal desservies, en particulier celles les plus touchées par le changement climatique. Par le biais d'ateliers et d'éducation sur l'énergie durable, Pelisa promeut des solutions d'énergie renouvelable qui autonomisent les communautés et soutiennent la justice environnementale.",
    'pelisa.cta.title': 'Soutenez Notre Travail',
    'pelisa.cta.description': 'Pelisa Arts & Énergie est une organisation à but non lucratif 501(c)(3) enregistrée. Votre don est déductible des impôts et a un impact durable.',
    'pelisa.cta.button': 'Faire un Don Maintenant',
    'pelisa.services.title': 'Nos Services',
    'pelisa.services.consulting': 'Conseil Culturel',
    'pelisa.services.consultingDesc': 'Nous fournissons des conseils d\'experts sur la représentation authentique de la culture africaine dans la programmation artistique, les expositions et les initiatives éducatives.',
    'pelisa.services.workshops': 'Ateliers & Résidences',
    'pelisa.services.workshopsDesc': 'Programmes immersifs de tambourinage et d\'éducation culturelle pour les écoles, les universités, les centres communautaires et les organisations artistiques.',
    'pelisa.services.performances': 'Performances & Démonstrations',
    'pelisa.services.performancesDesc': 'Présentations dynamiques qui mettent en valeur la musique et la danse congolaises traditionnelles, avec un contexte éducatif et l\'engagement du public.',
    'pelisa.services.program': 'Développement de Programmes',
    'pelisa.services.programDesc': 'Programmes culturels conçus sur mesure adaptés aux besoins et aux objectifs de votre organisation, des événements ponctuels aux partenariats continus.',
    'pelisa.approach.title': 'Notre Approche',
    'pelisa.approach.text': 'Chez Pelisa Arts et Énergie, nous croyons que l\'éducation culturelle doit être authentique, respectueuse et transformatrice. Nous puisons directement dans les connaissances et pratiques traditionnelles, les présentant de manière accessible et pertinente pour les publics contemporains.\n\nNos programmes mettent l\'accent sur:\n• Contexte culturel profond et compréhension historique\n• Participation pratique et apprentissage expérientiel\n• Construction de communauté et connexion\n• Respect de la tradition parallèlement à l\'innovation créative\n• Partage de connaissances intergénérationnel',
    'pelisa.partner.title': 'Partenaire Avec Nous',
    'pelisa.partner.text': 'Que vous planifiez un événement culturel, développiez un programme éducatif ou recherchiez un conseil culturel africain authentique, Pelisa Arts et Énergie peut vous aider à donner vie à votre vision avec intégrité et excellence.',
    'pelisa.cta': 'Contactez-nous À Propos de Votre Projet',
    
    // Embrace Kongo Page
    'embraceKongo.title': 'EMBRASSER KONGO',
    'embraceKongo.section1.title': 'Rejoignez-nous en juillet 2027 pour un voyage transformateur au Congo-Brazzaville.',
    'embraceKongo.section1.description': 'Ce programme de 10 jours propose des ateliers, des performances traditionnelles et des expériences guidées menées par des maîtres artistes locaux et internationaux.',
    'embraceKongo.section2.title': 'Une Expérience Culturelle Complète',
    'embraceKongo.experience.text': 'Au cours de dix jours, les participants vont:\n• Apprendre le tambourinage et la danse Kongo traditionnels auprès de maîtres enseignants\n• Participer à des cérémonies culturelles et des pratiques spirituelles\n• S\'engager avec les communautés locales et les porteurs de culture\n• Explorer la signification historique et contemporaine des traditions Kongo\n• Créer des connexions profondes avec les autres participants et les hôtes locaux\n• Vivre la vie quotidienne dans une communauté Kongo traditionnelle\n• Développer une compréhension profonde de l\'héritage culturel africain',
    'embraceKongo.section2.description': "Entrez au cœur de la culture Kongo : apprenez les rythmes et les mouvements de la danse et du tambour traditionnels, savourez la cuisine familiale et de rue, admirez la beauté du fleuve Kongo et de la plage Bantu, et explorez des sites historiques et des marchés d'artisans vibrants. Chaque moment est conçu pour vous connecter profondément avec les communautés locales tout en célébrant l'héritage vivant du Congo-Brazzaville.",
    'embraceKongo.ctaTitle': 'Intéressé à nous rejoindre?',
    'embraceKongo.ctaDescription': 'Faites-nous savoir dans la section contact et incluez "Embrace Kongo" dans l\'objet pour être notifié avec plus de détails.',
    'embraceKongo.ctaButton': 'Contactez-Nous',
    'embraceKongo.daily.title': 'Activités Quotidiennes',
    'embraceKongo.daily.morning': 'Sessions du Matin',
    'embraceKongo.daily.morningDesc': 'Instruction de tambourinage et de danse, leçons d\'histoire culturelle et pratiques spirituelles.',
    'embraceKongo.daily.afternoon': 'Expériences de l\'Après-midi',
    'embraceKongo.daily.afternoonDesc': 'Visites communautaires, explorations de sites culturels et ateliers pratiques d\'artisanat traditionnel.',
    'embraceKongo.daily.evening': 'Rassemblements du Soir',
    'embraceKongo.daily.eveningDesc': 'Performances, sessions de narration, repas communaux et cercles de réflexion.',
    'embraceKongo.who.title': 'Qui Devrait Participer',
    'embraceKongo.who.text': 'Embrasser Kongo accueille:\n• Les percussionistes et musiciens à la recherche de connaissances culturelles authentiques\n• Les éducateurs et travailleurs culturels\n• Les personnes explorant leur héritage africain\n• Toute personne passionnée par la préservation culturelle et l\'échange\n• Ceux qui recherchent une croissance personnelle et spirituelle transformatrice\n\nAucune expérience préalable en tambourinage n\'est requise—juste un cœur ouvert et un respect sincère pour la culture.',
    'embraceKongo.logistics.title': 'Détails du Programme',
    'embraceKongo.logistics.duration': '10 jours / 9 nuits',
    'embraceKongo.logistics.included': 'Inclus: Hébergement, repas, instruction, activités culturelles et transport local',
    'embraceKongo.logistics.groupSize': 'Limité à 15 participants pour une expérience intime et personnalisée',
    'embraceKongo.logistics.next': 'Prochain Programme: Contactez pour les prochaines dates',
    'embraceKongo.cta': 'En Savoir Plus & S\'inscrire',
    
    // Contact Page
    'contact.title': 'CONTACT',
    'contact.work.title': 'Travaillons Ensemble',
    'contact.work.description': "Je suis disponible pour des performances, des cours de tambour, des ateliers culturels, des collaborations et des conférences. Créons quelque chose de significatif ensemble.",
    'contact.or': 'OU',
    'contact.email.button': 'Envoyez-moi un email directement',
    'contact.social.title': 'Suivre & Connecter',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
