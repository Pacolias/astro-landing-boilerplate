export interface SocialMedia {
  platform: string;
  url: string;
  icon: string; // Used to map dynamic icons from libraries like Lucide
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface SiteConfig {
  clientName: string;
  siteName: string;
  siteDescription: string;
  showLogo: boolean;
  contactEmail: string;
  contactPhone?: string;
  address?: string;
  cta?: { text: string; href: string };
  socials: SocialMedia[];
  theme: ThemeColors;
}

export const SITE_CONFIG: SiteConfig = {
  clientName: 'Generic Client Name',
  siteName: 'Generic Business Project',
  siteDescription: 'A brief, generic description for SEO purposes. This should summarize the main value proposition of the business or project.',
  showLogo: true,
  contactEmail: 'contact@example.com',
  contactPhone: '+1 234 567 8900',
  address: '123 Generic Street, City, Country',
  cta: {
    text: "Booking",
    href: "/booking",
  },
  socials: [
    {
      platform: 'X',
      url: 'https://x.com',
      icon: 'x',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/',
      icon: 'instagram'
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/',
      icon: 'whatsapp'
    },
  ],
  theme: {
    primary: '#1a365d',
    secondary: '#f7fafc',
    accent: '#4299e1'
  }
};