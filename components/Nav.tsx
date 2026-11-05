"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://static.wixstatic.com/media/bec794_313cea8547e84849b702c117a2b24c7b~mv2.png"
            alt="Shear Strategies logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-navy font-bold text-lg leading-tight hidden sm:block">
            SHEAR<br />STRATEGIES
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium tracking-wide transition-colors duration-150 ${
                  pathname === href
                    ? "text-gold border-b-2 border-gold pb-0.5"
                    : "text-navy hover:text-gold"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-gold text-sm py-2 px-6">
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current mb-1.5 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-100 ${
                pathname === href ? "text-gold" : "text-navy"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold text-sm mt-4 text-center w-full block">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
