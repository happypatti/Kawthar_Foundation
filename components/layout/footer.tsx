import { LinkedinIcon, MailIcon, PhoneIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function Footer() {
  return (
    <footer className="container mx-auto mb-4 border-t-2 px-4" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pt-4 md:grid md:grid-cols-2 md:gap-8">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">Solutions</h3>
            <NavLinks className="flex flex-col gap-3" />
          </div>
        </div>
        <div className="mt-4 space-y-8 md:mt-0 xl:col-span-1">
          <Link href="/" className="flex items-center justify-center font-display text-2xl">
            <Image src="/logo.png" alt="PP logo" width="250" height="50" className="mr-2 rounded-sm"></Image>
          </Link>

        </div>
      </div>
    </footer>
  );
}
