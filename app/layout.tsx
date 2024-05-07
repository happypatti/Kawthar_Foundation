import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro, virgil } from "./fonts";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Kawthar Foundation",
  description:
    "",
  twitter: {
    card: "summary_large_image",
    title: "Kawthar Foundation",
    description:
    "",
    creator: "@eleetssheelets",
  },
  metadataBase: new URL("https://pixelperfectky.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">


      <body className={cx(sfPro.variable, inter.variable, virgil.variable)}>
        <div className="fixed -z-10 h-screen w-full bg-black" />
        <Suspense fallback="...">
          <Header />
        </Suspense>
        <main className="min-h-screen w-full py-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
