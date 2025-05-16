// components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { locales, defaultLocale } from "@/i18n"; // Ensure this path is correct

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    // Pathname includes the current locale, e.g., /en/about or just /about if default locale isn't prefixed
    // We need to construct the new path carefully
    let newPathWithoutLocale = pathname;

    if (pathname.startsWith(`/${currentLocale}`)) {
      newPathWithoutLocale =
        pathname.substring(`/${currentLocale}`.length) || "/";
    }

    // For the default locale, we might want to navigate to the root path if 'as-needed' prefixing is used
    const newPath =
      newLocale === defaultLocale && newPathWithoutLocale === "/"
        ? "/"
        : `/${newLocale}${newPathWithoutLocale}`;

    router.replace(newPath);
    // router.refresh(); // Consider if refresh is always needed or if Next.js handles updates well
  };

  return (
    <div className="language-switcher relative inline-block text-left">
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={currentLocale}
        onChange={(e) => handleChange(e.target.value)}
        className="p-2 border rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === "en" ? "English" : "Türkçe"}
          </option>
        ))}
      </select>
    </div>
  );
}
