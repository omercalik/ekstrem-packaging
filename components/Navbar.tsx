// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const navLinks = [
    { href: "/#products", labelKey: "products" },
    { href: "/#our-capabilities", labelKey: "ourCapabilities" },
    { href: "/#sustainability", labelKey: "sustainability" },
    { href: "/about", labelKey: "aboutUs" },
    { href: "/#contact", labelKey: "contact" },
  ];

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("/#")) {
      return `/${locale}${href}`;
    }
    if (href.startsWith("/")) {
      return `/${locale}${href}`;
    }
    return href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="text-2xl font-bold text-orange-500"
            >
              <Image
                src="/logo-main.jpg"
                alt="Ekstrem Packaging Logo"
                width={150}
                height={50}
              />
            </Link>
            <div className="flex items-center ml-8">
              <Link
                href={`/${locale}`}
                className="text-2xl font-bold text-orange-500"
              >
                <Image
                  src="/logo.jpg"
                  alt="Ekstrem Packaging Logo"
                  width={200}
                  height={50}
                />
              </Link>
              <Link
                href={`/${locale}`}
                className="text-2xl font-bold text-orange-500"
              >
                <Image
                  src="/logo-cup.jpg"
                  alt="Ekstrem Packaging Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {" "}
            {/* Adjusted spacing */}
            {navLinks.map((link) => (
              <Link
                key={link.labelKey}
                href={getLocalizedHref(link.href)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-orange-500"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="ml-2">
              {" "}
              {/* Added margin for switcher */}
              <LanguageSwitcher />
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              {" "}
              {/* Switcher before hamburger on mobile */}
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-cyan-700 hover:bg-slate-100 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.labelKey}
                href={getLocalizedHref(link.href)}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-orange-500"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
