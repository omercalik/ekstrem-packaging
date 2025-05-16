// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
// Import from your next-intl navigation setup
import { useRouter, usePathname } from "@/i18n/navigation";
// Import unified locale config from routing.ts
import { locales } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const currentLocale = useLocale(); // Gets the currently active locale (e.g., "en" or "tr")
  const router = useRouter();
  const pathname = usePathname(); // This will be the path *without* the locale prefix (e.g., "/about")

  const handleChange = (newLocale) => {
    // next-intl's router.replace is designed for locale switching.
    // It takes the current pathname (without locale) and the new locale.
    router.replace(pathname, { locale: newLocale });
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
            {/* You can create a more sophisticated way to display language names if you add more locales */}
            {loc === "en"
              ? "English"
              : loc === "tr"
              ? "Türkçe"
              : loc?.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
