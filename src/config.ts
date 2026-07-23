export const SITE_CONFIG = {
    // Basic site information
    title: "DSBA United Shuttles",
    description: "Official website of Delft Student Badminton Association United Shuttles",
    author: "DSBA United Shuttles",
    email: "board@unitedshuttles.nl",

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

// Navigation menu items
export const NAV_ITEMS: Record<string, { href: string; label: string }[]> = {
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
