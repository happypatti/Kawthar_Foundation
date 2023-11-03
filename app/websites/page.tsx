import ContactUs from "@/components/shared/contact-us";
import Features from "@/components/websites/features";
import Hero from "@/components/websites/hero";
import Portfolio from "@/components/websites/portfolio";

export default async function Home() {
  return (
    <div className="z-10 flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Portfolio />
    </div>
  );
}
