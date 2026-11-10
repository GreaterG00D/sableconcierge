"use client";

import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window) || !node.animate) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const onMotionChange = () => {
      if (reducedMotion.matches) animation?.cancel();
    };

    // The HTML is always visible. Animation is a temporary enhancement only:
    // failed scripts, unsupported APIs, and delayed hydration never hide content.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        if (reducedMotion.matches) return;
        animation = node.animate(
          [
            { opacity: 0.35, transform: `translate3d(0,${y}px,0)` },
            { opacity: 1, transform: "translate3d(0,0,0)" },
          ],
          {
            duration: 900,
            delay,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "none",
          }
        );
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    reducedMotion.addEventListener("change", onMotionChange);
    observer.observe(node);
    return () => {
      observer.disconnect();
      animation?.cancel();
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, [delay, y]);

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
