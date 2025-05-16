// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/i18n.js
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next-intl/server"; // Use notFound from next-intl/server
// Import the unified locale configuration
import {
  locales as routingLocales,
  defaultLocale as routingDefaultLocale,
} from "./i18n/routing";

// Use the imported, unified configuration
export const locales = Array.from(routingLocales); // Convert from 'as const' tuple if necessary
export const defaultLocale = routingDefaultLocale;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid against the unified list
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
