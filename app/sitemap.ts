import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: "https://kawtharfoundation.org",
      lastModified: new Date(),
    },
    {
      url: "https://kawtharfoundation.org/donate",
      lastModified: new Date(),
    },
  ];
}
