export type SiteConfig = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  twitterCard: string;
  siteThumbnail: string;
  nav: Array<{ label: string; href: string }>;
  social?: {
    twitter?: string;
    youtube?: string;
    instagram?: string;
  };
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};
