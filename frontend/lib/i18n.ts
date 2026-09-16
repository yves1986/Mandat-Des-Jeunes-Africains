export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type Dictionary = {
  nav: {
    home: string;
    movement: string;
    actions: string;
    media: string;
    getInvolved: string;
    contact: string;
    join: string;
  };
  common: {
    learnMore: string;
    readMore: string;
    seeAll: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    stayInformed: string;
    stayInformedText: string;
    rights: string;
    slogan: string;
  };
  forms: {
    fullName: string;
    email: string;
    subject: string;
    message: string;
    country: string;
    wantTo: string;
    motivation: string;
    motivationPlaceholder: string;
    send: string;
    sending: string;
    sendApplication: string;
    subscribe: string;
    emailPlaceholder: string;
    contactSuccess: string;
    engagementSuccess: string;
    newsletterSuccess: string;
    genericError: string;
    networkError: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      movement: "Le Mouvement",
      actions: "Actions",
      media: "Médias",
      getInvolved: "S'engager",
      contact: "Contact",
      join: "Rejoindre le mouvement",
    },
    common: {
      learnMore: "En savoir plus",
      readMore: "Lire la suite",
      seeAll: "Voir tout",
    },
    footer: {
      tagline:
        "Un mouvement panafricain qui donne à la jeunesse les moyens de porter, défendre et incarner le mandat du développement du continent.",
      navigation: "Navigation",
      contact: "Contact",
      stayInformed: "Restez informés",
      stayInformedText:
        "Recevez nos actualités, campagnes et opportunités d'engagement.",
      rights: "Tous droits réservés.",
      slogan: "Le mandat appartient à la jeunesse africaine.",
    },
    forms: {
      fullName: "Nom complet",
      email: "Adresse e-mail",
      subject: "Sujet",
      message: "Message",
      country: "Pays",
      wantTo: "Je souhaite",
      motivation: "Votre motivation (optionnel)",
      motivationPlaceholder: "Dites-nous pourquoi vous souhaitez rejoindre le mouvement...",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      sendApplication: "Envoyer ma candidature",
      subscribe: "S'inscrire",
      emailPlaceholder: "Votre adresse e-mail",
      contactSuccess: "Votre message a bien été envoyé. Notre équipe vous répondra sous 48h.",
      engagementSuccess:
        "Merci pour votre engagement ! Un membre de notre équipe vous contactera très prochainement.",
      newsletterSuccess: "Merci ! Vérifiez votre boîte mail pour confirmer votre inscription.",
      genericError: "Une erreur est survenue. Merci de réessayer.",
      networkError: "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
    },
  },
  en: {
    nav: {
      home: "Home",
      movement: "The Movement",
      actions: "Actions",
      media: "Media",
      getInvolved: "Get Involved",
      contact: "Contact",
      join: "Join the movement",
    },
    common: {
      learnMore: "Learn more",
      readMore: "Read more",
      seeAll: "See all",
    },
    footer: {
      tagline:
        "A pan-African movement empowering youth to carry, defend and embody the mandate for the continent's development.",
      navigation: "Navigation",
      contact: "Contact",
      stayInformed: "Stay informed",
      stayInformedText: "Get our news, campaigns and opportunities to get involved.",
      rights: "All rights reserved.",
      slogan: "The mandate belongs to African youth.",
    },
    forms: {
      fullName: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      country: "Country",
      wantTo: "I would like to",
      motivation: "Your motivation (optional)",
      motivationPlaceholder: "Tell us why you'd like to join the movement...",
      send: "Send message",
      sending: "Sending...",
      sendApplication: "Send my application",
      subscribe: "Subscribe",
      emailPlaceholder: "Your email address",
      contactSuccess: "Your message has been sent. Our team will reply within 48h.",
      engagementSuccess: "Thank you for your engagement! A team member will contact you shortly.",
      newsletterSuccess: "Thank you! Check your inbox to confirm your subscription.",
      genericError: "Something went wrong. Please try again.",
      networkError: "Could not reach the server. Check your connection and try again.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
