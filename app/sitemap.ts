import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: "https://pixelperfectky.com",
      lastModified: new Date(),
    },
    {
      url: "https://pixelperfectky.com/websites",
      lastModified: new Date(),
    },
    {
      url: "https://pixelperfectky.com/seo",
      lastModified: new Date(),
    },
    {
      url: "https://pixelperfectky.com/digital-marketing",
      lastModified: new Date(),
    },
    {
      url: "https://pixelperfectky.com/about-us",
      lastModified: new Date(),
    },
  ];
}
