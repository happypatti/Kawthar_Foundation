"use client";

import { FC, useEffect, useRef } from "react";
import "./infinite-scroll.css";

interface InfiniteScrollProps {
  speed?: "slow" | "fast";
  direction?: "left" | "right";
  children: React.ReactNode;
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({ children, direction = "right", speed = "slow" }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scroller = scrollerRef.current;
    if (!scroller) return; // Added this line to handle the case when scroller is null

    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (!scrollerInner) return; // Added this line to handle the case when scrollerInner is null

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (duplicatedItem instanceof HTMLElement) {
        // Added this line to ensure duplicatedItem is an HTMLElement
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      }
    });
  }, []);

  return (
    <div className="scroller-container">
      <div className="scroller" data-direction={direction} data-speed={speed} ref={scrollerRef}>
        <ul className="tag-list scroller__inner text-gray-900">{children}</ul>
      </div>
    </div>
  );
};

export default InfiniteScroll;
