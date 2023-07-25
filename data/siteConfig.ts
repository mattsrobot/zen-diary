import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://diary.zenshop.app",
  siteName: "zenshop",
  siteDescription:
    "Developer diary | zenshop",
  siteThumbnail: "https://www.zenshop.app/images/landing/twitter-card.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "https://www.zenshop.app/about" },
  ],
  social: {
    youtube: "https://www.youtube.com/channel/UCNSNRGSutFKcB9L-2AFabdA",
    twitter: "https://twitter.com/zenshop_app",
    instagram: "https://www.instagram.com/zenshop_app",
  },
};
export default siteConfig;
