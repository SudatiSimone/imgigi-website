'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-rust text-white border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* barra */}
        <div className="flex items-center gap-6 md:gap-10 py-3 md:py-4 min-h-[72px] md:min-h-[100px]">
          
          {/* LOGO: mobile piccolo, desktop più grande */}
          <Link href="/" className="inline-flex items-center shrink-0">
            <Image
              src="/logo2.png"
              width={220}     // solo hint per layout
              height={72}
              alt="I'm GIGI"
              priority
              className="h-9 w-auto md:h-16 object-contain"
            />
          </Link>

          {/* NAV desktop: voci più vicine */}
          <nav className="hidden md:flex items-center ml-auto text-[18px] leading-8 gap-7 lg:gap-8">
            <a href="#hero"     className="px-2.5 py-2 rounded-md hover:bg-white/10 transition">Home</a>
            <a href="#percorso" className="px-2.5 py-2 rounded-md hover:bg-white/10 transition">Percorso</a>
            <a href="#about"    className="px-2.5 py-2 rounded-md hover:bg-white/10 transition">About Me</a>
            <a href="#contatti" className="px-2.5 py-2 rounded-md hover:bg-white/10 transition">Contatti</a>
          </nav>

          {/* Toggle mobile (invariato) */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden ml-auto inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={28} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* linea sottile di separazione */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />

      {/* MENU MOBILE (invariato) */}
      {open && (
        <div id="mobile-menu" className="md:hidden mx-auto max-w-7xl px-4">
          <div className="bg-brand-rust/95 border-x border-b border-white/10 rounded-b-xl px-4 pb-2">
            <a href="#hero"     className="block py-4 text-[18px] leading-7 hover:text-brand-sand">Home</a>
            <a href="#percorso" className="block py-4 text-[18px] leading-7 hover:text-brand-sand">Percorso</a>
            <a href="#about"    className="block py-4 text-[18px] leading-7 hover:text-brand-sand">About Me</a>
            <a href="#contatti" className="block py-4 text-[18px] leading-7 hover:text-brand-sand">Contatti</a>
          </div>
        </div>
      )}
    </header>
  );
}
