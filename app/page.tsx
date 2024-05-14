"use client"

import Hero from "@/components/home/hero";
import Solutions from "@/components/home/solutions";
import ContactUs from "@/components/shared/contact-us";
import DonationComponent from "@/components/DonateComponent";
import DonationImpact from "@/components/donationImpact";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default async function Home() {
  return (
    <div className="z-10 flex flex-col items-center justify-center">
      <Hero/>
      <DonationImpact/>
      <Elements stripe={stripePromise}>
        <DonationComponent />
        </Elements>
    </div>
  );
}
