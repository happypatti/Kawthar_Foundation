import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import ContactUs from "@/components/shared/contact-us";
import DonationComponent from "@/components/donate.client";
import DonationImpact from "@/components/donationImpact";


export default async function Home() {
  return (
    <div className="z-10 flex flex-col items-center justify-center">
      <Hero/>
      <DonationImpact/>
      <DonationComponent/>
    </div>
  );
}
