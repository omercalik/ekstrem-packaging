// components/FeaturesSection.tsx
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// SVG Icons remain the same as in your original file
const PeCoatingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
    />
  </svg>
);
const GrammageRangeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
    />
  </svg>
);
const CertifiedProductionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const StandardCompatibilityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-8 w-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.42a15.995 15.995 0 004.764-4.764l3.862-3.862a2.25 2.25 0 00-3.182-3.182l-3.862 3.862A15.995 15.995 0 0012 10.039a15.995 15.995 0 00-4.764 4.764m4.764-4.764a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
    />
  </svg>
);

export default async function FeaturesSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "FeaturesSection" });

  const featuresData = [
    { id: "peCoating", icon: <PeCoatingIcon /> },
    { id: "grammageRange", icon: <GrammageRangeIcon /> },
    { id: "certifiedProduction", icon: <CertifiedProductionIcon /> },
    { id: "standardCompatibility", icon: <StandardCompatibilityIcon /> },
  ];

  const productionHighlightsData = [
    "wideProductRange",
    "automationEfficiency",
    "highProductionCapacity",
    "modernFacility",
  ];

  return (
    <section id={"our-capabilities"} className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-orange-500">
            {t("mainTitle")}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cyan-800 sm:text-4xl">
            {t("subTitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="transform rounded-lg bg-slate-50 p-6 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-100">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-medium text-slate-900">
                {t(`features.${feature.id}.name`)}
              </h3>
              <p className="mt-2 text-base text-slate-600">
                {t(`features.${feature.id}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl font-semibold tracking-tight text-cyan-800 sm:text-3xl">
              {t("advancedInfrastructureTitle")}
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
              {t("advancedInfrastructureDescription")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8 lg:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl h-96 md:h-[500px]">
                <Image
                  src="/production.jpg" // Assumed this image exists from previous steps
                  alt={t("imageAltProductionLine")}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5">
              <dl className="space-y-6">
                {productionHighlightsData.map((highlightKey) => (
                  <div key={highlightKey}>
                    <dt className="text-lg font-semibold text-slate-800">
                      {t(`productionHighlights.${highlightKey}.title`)}
                    </dt>
                    <dd className="mt-1 text-base text-slate-600">
                      {t(`productionHighlights.${highlightKey}.description`)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
