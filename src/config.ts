/**
 * Site Configuration
 *
 * Customize this file to personalize your blog.
 */

export const SITE_CONFIG = {
  // Basic site information
  title: "DSBA United Shuttles",
  description: "Our website is currently under development :)",
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
    instagram: "unitedshuttles"
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

  // Posts per page for blog pagination
  postsPerPage: 10,

  // Enable/disable features
  features: {
    darkMode: true,
    analytics: true,
    sitemap: true,
  }
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

// Navigation menu items
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/badminton", label: "Badminton" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];
