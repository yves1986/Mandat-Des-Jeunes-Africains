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
    advertisers: string;
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
  admin: {
    loginTitle: string;
    loginSubtitle: string;
    password: string;
    signIn: string;
    signingIn: string;
    invalidCredentials: string;
    dashboardTitle: string;
    logout: string;
    totalContacts: string;
    totalEngagements: string;
    totalActions: string;
    growthTitle: string;
    byCountryTitle: string;
    byTypeTitle: string;
    recentContacts: string;
    recentEngagements: string;
    exportContacts: string;
    exportEngagements: string;
    noData: string;
  };
  legal: {
    legalNotice: string;
    termsOfUse: string;
    termsOfSale: string;
    privacyPolicy: string;
  };
  cookies: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
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
      advertisers: "Annonceurs",
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
    admin: {
      loginTitle: "Espace administrateur",
      loginSubtitle: "Connectez-vous pour accéder au tableau de bord.",
      password: "Mot de passe",
      signIn: "Se connecter",
      signingIn: "Connexion...",
      invalidCredentials: "Identifiants invalides.",
      dashboardTitle: "Tableau de bord",
      logout: "Se déconnecter",
      totalContacts: "Messages reçus",
      totalEngagements: "Engagements",
      totalActions: "Actions publiées",
      growthTitle: "Croissance des engagements (12 derniers mois)",
      byCountryTitle: "Engagements par pays",
      byTypeTitle: "Engagements par type",
      recentContacts: "Derniers messages",
      recentEngagements: "Derniers engagements",
      exportContacts: "Exporter les contacts (CSV)",
      exportEngagements: "Exporter les engagements (CSV)",
      noData: "Pas encore de données.",
    },
    legal: {
      legalNotice: "Mentions légales",
      termsOfUse: "CGU",
      termsOfSale: "CGV",
      privacyPolicy: "Politique de confidentialité",
    },
    cookies: {
      message:
        "Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience du site.",
      accept: "Accepter",
      decline: "Refuser",
      learnMore: "En savoir plus",
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
      advertisers: "Advertisers",
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
    admin: {
      loginTitle: "Admin area",
      loginSubtitle: "Sign in to access the dashboard.",
      password: "Password",
      signIn: "Sign in",
      signingIn: "Signing in...",
      invalidCredentials: "Invalid credentials.",
      dashboardTitle: "Dashboard",
      logout: "Log out",
      totalContacts: "Messages received",
      totalEngagements: "Engagements",
      totalActions: "Published actions",
      growthTitle: "Engagement growth (last 12 months)",
      byCountryTitle: "Engagements by country",
      byTypeTitle: "Engagements by type",
      recentContacts: "Latest messages",
      recentEngagements: "Latest engagements",
      exportContacts: "Export contacts (CSV)",
      exportEngagements: "Export engagements (CSV)",
      noData: "No data yet.",
    },
    legal: {
      legalNotice: "Legal notice",
      termsOfUse: "Terms of use",
      termsOfSale: "Terms of sale",
      privacyPolicy: "Privacy policy",
    },
    cookies: {
      message: "We use cookies to improve your experience and measure site traffic.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
