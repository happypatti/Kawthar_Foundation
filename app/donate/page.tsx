"use client";

import ContactUs from "@/components/shared/contact-us";
import Features from "@/components/websites/features";
import Hero from "@/components/websites/hero";
import Portfolio from "@/components/websites/portfolio";
// pages/donate.js
import DonationComponent from '../../components/donate.client';
import DonationImpact from '../../components/donationImpact'



export default function Donate() {
    return (
        <div className="container mx-auto px-4 py-12">
            <DonationImpact />
            <DonationComponent />
        </div>
    );
}

