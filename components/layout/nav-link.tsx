"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// This *client* component will be imported into a  layout
export default function NavLink({
  slug,
  children,
  className,
  close,
}: {
  slug: string;
  children: React.ReactNode;
  className?: string;
  close?: () => false | void;
}) {
  // Navigating to `//hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment();
  var isActive = slug === segment;

  return (
    <Link href={`/${slug}`} className={cn(isActive ? "text-blue-500" : "text-gray-500", className)} onClick={close}>
      {children}
    </Link>
  );
}
