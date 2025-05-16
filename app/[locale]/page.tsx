// app/[locale]/page.tsx
import { getLocale } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsPreviewSection from "@/components/ProductsPreviewSection";
import QualityAndSustainabilitySection from "@/components/QualityAndSustainabilitySection";
import ExportMapSection from "@/components/ExportMapSection";

const exportCountries = [
  { id: "DE", en: "Germany", tr: "Almanya" },
  { id: "US", en: "United States of America", tr: "Amerika" },
  { id: "AZ", en: "Azerbaijan", tr: "Azerbaycan" },
  { id: "BG", en: "Bulgaria", tr: "Bulgaristan" },
  { id: "FR", en: "France", tr: "Fransa" },
  { id: "GE", en: "Georgia", tr: "Gürcistan" },
  { id: "IQ", en: "Iraq", tr: "Irak" },
  { id: "ES", en: "Spain", tr: "İspanya" },
  { id: "IL", en: "Israel", tr: "İsrail" },
  { id: "SE", en: "Sweden", tr: "İsveç" },
  { id: "IT", en: "Italy", tr: "İtalya" },
  { id: "XK", en: "Kosovo", tr: "Kosova" },
  { id: "LY", en: "Libya", tr: "Libya" },
  { id: "EG", en: "Egypt", tr: "Mısır" },
  { id: "PL", en: "Poland", tr: "Polonya" },
  { id: "RO", en: "Romania", tr: "Romanya" },
  { id: "SN", en: "Senegal", tr: "Senegal" },
  { id: "TN", en: "Tunisia", tr: "Tunus" },
];

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow">
        <HeroSection locale={locale} />
        <FeaturesSection locale={locale} />
        <ProductsPreviewSection locale={locale} />
        <QualityAndSustainabilitySection locale={locale} />
        <ExportMapSection countries={exportCountries} />{" "}
      </main>
    </div>
  );
}
