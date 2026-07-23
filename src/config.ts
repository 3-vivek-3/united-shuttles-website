export const SITE_CONFIG = {
    // Basic site information
    title: "DSBA United Shuttles",
    description: "Official website of DSBA United Shuttles",
    author: "DSBA United Shuttles",
    email: "unitedshuttles@gmail.com",

    // Social media links
    // Remove or leave empty any platforms you don't use
    socialLinks: {
        github: "",
        twitter: "",
        linkedin: "",
        youtube: "",
        facebook: "",
        instagram: "unitedshuttles",
    },

    // Analytics
    // Add your Google Analytics tracking ID
    // Leave empty to disable analytics
    googleAnalyticsId: "",

    // Locale settings
    language: "en",
    locale: "en-NL",

    // Site URL (used for canonical URLs and SEO)
    // Update this with your production URL
    siteUrl: "https://unitedshuttles.nl",

    // Default meta image for social sharing
    // Place your image in the public folder
    defaultOgImage: "/images/logos/og-image.png",

    // Enable/disable features
    features: {
        darkMode: true,
        analytics: true,
        sitemap: true,
    },
};

// Author information for structured data
export const AUTHOR_INFO = {
    name: SITE_CONFIG.author,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.siteUrl,
    // You can add more structured data here
    jobTitle: "", // Optional
    organization: "", // Optional
};

export const LANGUAGES = {
    en: {
        label: "English",
        prefix: "",
        locale: "en-NL",
    },
    nl: {
        label: "Nederlands",
        prefix: "nl",
        locale: "nl-NL",
    },
};

export type Language = keyof typeof LANGUAGES;

// Navigation menu items
export const NAV_ITEMS = {
    en: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/badminton", label: "Badminton" },
        { href: "/membership", label: "Membership" },
        { href: "/events", label: "Events" },
        { href: "/contact", label: "Contact" },
    ],
    nl: [
        { href: "/nl", label: "Home" },
        { href: "/nl/about", label: "Over ons" },
        { href: "/nl/badminton", label: "Badminton" },
        { href: "/nl/membership", label: "Lidmaatschap" },
        { href: "/nl/events", label: "Evenementen" },
        { href: "/nl/contact", label: "Contact" },
    ],
};
