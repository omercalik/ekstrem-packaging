// components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// The component now expects a locale prop
export default async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "HeroSection" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" }); // For "Contact" if needed

  // Helper to construct localized hrefs for Server Components
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
    <section
      id={"home"} // Localized ID for in-page scroll
      className="bg-orange-50 py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8 lg:gap-16">
          <div className="text-center md:w-1/2 md:text-left lg:w-3/5">
            <h1 className="text-4xl font-extrabold tracking-tight text-cyan-800 sm:text-5xl md:text-5xl lg:text-6xl">
              {t("titleMain")}{" "}
              <span className="text-orange-500">{t("titleSpan")}</span>
            </h1>
            <p className="mt-6 text-xl font-medium text-slate-700 md:text-2xl">
              {t("subtitle")}
            </p>
            <div className="mt-6 space-y-4 text-lg text-slate-600 md:text-xl">
              <p>{t("groupCompany")}</p>
              <p>{t("experience")}</p>
              <p>{t("production")}</p>
              <p>{t("brand")}</p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Link
                href={getLocalizedHref("/#products")}
                className="w-full rounded-md bg-orange-500 px-8 py-3 text-base font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 sm:w-auto md:px-10 md:py-4 md:text-lg"
              >
                {t("discoverProducts")}
              </Link>
              <Link
                href={getLocalizedHref("/#contact")}
                className="w-full rounded-md border border-cyan-700 px-8 py-3 text-base font-medium text-cyan-700 shadow-md transition duration-150 ease-in-out hover:bg-cyan-50 sm:w-auto md:px-10 md:py-4 md:text-lg"
              >
                {t("moreInformation")}
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2 lg:w-2/5">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/cup1.jpg" // Make sure this image exists
                alt={t("titleMain") + " " + t("titleSpan")}
                width={500}
                height={700}
                className="rounded-xl object-contain shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
