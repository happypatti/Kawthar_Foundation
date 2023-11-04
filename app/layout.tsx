import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro, virgil } from "./fonts";
import "./globals.css";
import Head from "next/head";
import GoogleAds from "./googleAds";

export const metadata = {
  title: "Pixel Perfect Digital Solutions",
  description:
    "Pixel Perfect Digital Solutions is an agency that provides high quality digital solutions for your business. We provide websites, SEO, and digital marketing services",
  twitter: {
    card: "summary_large_image",
    title: "Pixel Perfect Digital Solutions",
    description:
    "Pixel Perfect Digital Solutions is an agency that provides high quality digital solutions for your business. We provide websites, SEO, and digital marketing services",
    creator: "@eleetssheelets",
  },
  metadataBase: new URL("https://pixelperfectky.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">


      <body className={cx(sfPro.variable, inter.variable, virgil.variable)}>
        <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Header />
        </Suspense>
        <main className="min-h-screen w-full py-16">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAds />
      </body>
    </html>
  );
}
