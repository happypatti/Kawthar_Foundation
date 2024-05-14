"use client";

import ContactUs from "@/components/shared/contact-us";
import Features from "@/components/websites/features";
import Hero from "@/components/websites/hero";
import Portfolio from "@/components/websites/portfolio";
// pages/donate.js
import DonationComponent from '../../components/DonateComponent';
import DonationImpact from '../../components/donationImpact'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Donate() {
    return (
        <div className="container mx-auto px-4 py-12">
            <DonationImpact />
        <Elements stripe={stripePromise}>
        <DonationComponent />
        </Elements>
        </div>
    );
}

