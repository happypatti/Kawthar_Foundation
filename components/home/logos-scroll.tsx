"use client";

import Image from "next/image";
import InfiniteScroll from "../shared/infinite-scroll";
import { useEffect, useState } from "react";

const logos = [
  { name: "Google Ads", src: "/google-ads.webp" },
  { name: "Apple Maps", src: "/apple-maps.png" },
  { name: "instagram", src: "/instagram.webp" },
  { name: "facebook", src: "/facebook.webp" },
  { name: "Google Maps", src: "/google-maps.webp" },
  { name: "Google My Business", src: "/google-my-business.png" },
  { name: "tikTok", src: "/tikTok.webp" },
  { name: "Youtube", src: "/youtube.webp" },
  { name: "X", src: "/x.webp" },
  { name: "Yelp", src: "/yelp.webp" },
  { name: "Paypal", src: "/paypal.webp" },
  { name: "Stipe", src: "/stripe.webp" },
];

interface Logo {
  name: string;
  src: string;
}

export default function LogosScroll({ direction, speed }: { direction: "left" | "right"; speed: "fast" | "slow" }) {
  const [sortedLogos, setSortedLogos] = useState<Logo[]>([]);

  useEffect(() => {
    setSortedLogos([...logos].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <InfiniteScroll direction={direction} speed={speed}>
      {sortedLogos.map(({ name, src }) => (
        <div key={name} className="flex items-center justify-center">
          <Image src={src} alt={name} width="64" height="64" className="rounded-[22.5%]" />
        </div>
      ))}
    </InfiniteScroll>
  );
}
