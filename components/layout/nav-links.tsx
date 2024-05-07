"use client";

import NavLink from "./nav-link";

// This *client* component will be imported into a  layout
export default function NavLinks({ className, close }: { className?: string; close?: () => false | void }) {
  const navItems = [
    { name: "Donate", slug: "donate" },
    { name: "Our Mission", slug: "mission" },
    { name: "Kawthar's Legacy", slug: "legacy" },
    { name: "About Us", slug: "about" },
  ];
  return (
    <nav className={className}>
      {navItems.map(({ name, slug }) => (
        <NavLink key={name} slug={slug} close={close}>
          {name}
        </NavLink>
      ))}

    </nav>
  );
}
