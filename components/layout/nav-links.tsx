"use client";

import NavLink from "./nav-link";

// This *client* component will be imported into a  layout
export default function NavLinks({ className, close }: { className?: string; close?: () => false | void }) {
  const navItems = [
    { name: "Websites", slug: "websites" },
    { name: "SEO", slug: "seo" },
    { name: "Digital Marketing", slug: "digital-marketing" },
    { name: "About", slug: "about-us" },
  ];
  return (
    <nav className={className}>
      {navItems.map(({ name, slug }) => (
        <NavLink key={name} slug={slug} close={close}>
          {name}
        </NavLink>
      ))}
      <button className="active:bg-grey-400 flex w-full items-center justify-center space-x-2 rounded-md bg-blue-400 p-2 text-sm transition-all duration-300 text-white hover:text-black"
       onClick={() => window.location.href = "/about-us"}>
        Contact us
      </button>
    </nav>
  );
}
