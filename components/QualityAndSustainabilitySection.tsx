// components/QualityAndSustainabilitySection.tsx
import Image from "next/image";
import { getTranslations } from "next-intl/server";

// Define SVG icons as before or import them
const HygienicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const LeakProofIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
    />
  </svg>
);
const EcoFriendlyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V7.5A2.25 2.25 0 0018 5.25H6A2.25 2.25 0 003.75 7.5v10.5A2.25 2.25 0 006 20.25z"
    />
  </svg>
);

export default async function QualityAndSustainabilitySection({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations({
    locale,
    namespace: "QualityAndSustainabilitySection",
  });

  const qualityPointsData = [
    { id: "hygienic", icon: <HygienicIcon /> },
    { id: "leakProof", icon: <LeakProofIcon /> },
    { id: "ecoFriendly", icon: <EcoFriendlyIcon /> },
  ];

  const certificationsData = ["fsc", "brc"]; // Keys for certifications

  return (
    <section
      id={locale === "tr" ? "surdurulebilirlik" : "sustainability"}
      className="bg-white py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-orange-500">
            {t("mainTitle")}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cyan-800 sm:text-4xl">
            {t("subTitle")}
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            {t("intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              {t("productFeaturesTitle")}
            </h3>
            <dl className="space-y-10">
              {" "}
              {/* Increased space for better readability */}
              {qualityPointsData.map((point) => (
                <div key={point.id} className="relative pl-16">
                  {" "}
                  {/* Increased padding for icon */}
                  <dt>
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                      {" "}
                      {/* Larger icon background */}
                      {point.icon}
                    </div>
                    <p className="text-xl font-semibold leading-6 text-slate-900">
                      {t(`qualityPoints.${point.id}.title`)}
                    </p>{" "}
                    {/* Larger title font */}
                  </dt>
                  <dd className="mt-2 text-base text-slate-600">
                    {t(`qualityPoints.${point.id}.description`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/company/worker_inspection.jpg" // Assumed from previous steps
                alt={t("imageAltQualityControl")}
                width={500}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold tracking-tight text-cyan-800 sm:text-3xl">
              {t("certificationsTitle")}
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
              {t("certificationsIntro")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
            {certificationsData.map((certKey) => (
              <div
                key={certKey}
                className="p-6 bg-slate-50 rounded-lg shadow-lg"
              >
                {/* Optional: Add actual logo images here if available */}
                {/* <Image src={`/images/company/${certKey}_logo.png`} alt={t(`certifications.${certKey}.name`)} width={100} height={50} className="mx-auto mb-4"/> */}
                <h4 className="text-xl font-semibold text-slate-800 mb-2">
                  {t(`certifications.${certKey}.name`)}
                </h4>
                <p className="text-slate-600 text-sm">
                  {t(`certifications.${certKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
