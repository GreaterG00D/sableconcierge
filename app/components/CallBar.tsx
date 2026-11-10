"use client";

import { useEffect, useState } from "react";
import { RiPhoneLine } from "react-icons/ri";

type Props = { phone: string };

// Phones only: a call button that appears once the visitor scrolls past the
// top of the page, so contacting Olivia is always one tap away.
export default function CallBar({ phone }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactInView =
        !!contact && contact.getBoundingClientRect().top < window.innerHeight;
      setShow(window.scrollY > 500 && !contactInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-[opacity,transform] duration-300 lg:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={`tel:${phone.replace(/\D/g, "")}`}
        tabIndex={show ? 0 : -1}
        className="flex h-14 items-center justify-center gap-3 rounded-full border border-[rgba(166,140,74,0.85)] bg-[#1d2a16] text-[1.0625rem] text-[var(--sable-warm-bg)] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        <RiPhoneLine className="h-5 w-5 text-[var(--sable-gold)]" />
        Call Olivia · {phone}
      </a>
    </div>
  );
}
