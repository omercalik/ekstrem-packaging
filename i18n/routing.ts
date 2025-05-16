// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

// Define these once and export for use in other i18n files
export const locales = ["en", "tr"] as const; // Available locales
export const defaultLocale = "tr" as const; // Default locale

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: "as-needed", // Common strategy: /about (for tr), /en/about (for en)
  // Other options: 'always' or 'never'. Choose what fits your URL structure.
});
