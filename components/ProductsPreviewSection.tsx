// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/components/ProductsPreviewSection.tsx
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import React from "react"; // Import React for JSX and SVGProps

// SVG Icon Components

const PaperCupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <g transform="rotate(180 12 12)">
      {" "}
      {/* Rotate the group of paths 180 degrees around the center */}
      {/* Original paths of the cup, which drew it wider at the bottom */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 7.5C7.5 5.84315 8.84315 4.5 10.5 4.5H13.5C15.1569 4.5 16.5 5.84315 16.5 7.5V9H7.5V7.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 9L6 19.5H18L16.5 9H7.5Z"
      />
    </g>
  </svg>
);

const PaperBowlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 10.5C21.75 11.3284 21.0784 12 20.25 12H3.75C2.92157 12 2.25 11.3284 2.25 10.5C2.25 6.08172 5.83172 2.5 10.25 2.5H13.75C18.1683 2.5 21.75 6.08172 21.75 10.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12H20.25L19.5 19.5H4.5L3.75 12Z"
    />
  </svg>
);

const PaperPlateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5s7.5 3.358 7.5 7.5z"
      opacity="0.4"
    />
  </svg>
);

const productCategoryIds = ["cups", "bowls", "plates"];

const categoryIcons: { [key: string]: React.ElementType } = {
  cups: PaperCupIcon,
  bowls: PaperBowlIcon,
  plates: PaperPlateIcon,
};

const getDetailsLink = (locale: string, categoryId: string) =>
  `/${locale}/products/${categoryId}`;

export default async function ProductsPreviewSection({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations({
    locale,
    namespace: "ProductsPreviewSection",
  });

  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  return (
    <section id={"products"} className="bg-slate-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-orange-500">
            {t("mainTitle")}
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-cyan-800 sm:text-4xl">
            {t("subTitle")}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productCategoryIds.map((categoryId) => {
            const IconComponent = categoryIcons[categoryId];
            const iconAltText = t(`categories.${categoryId}.alt`);

            return (
              <div
                key={categoryId}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
              >
                <div
                  className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 p-6 rounded-t-xl group-hover:from-orange-100 group-hover:via-red-100 group-hover:to-amber-100 transition-colors"
                  role="img"
                  aria-label={iconAltText}
                >
                  {IconComponent && (
                    <IconComponent className="h-24 w-24 text-orange-500 transition-transform duration-500 group-hover:scale-110" />
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {t(`categories.${categoryId}.name`)}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 flex-grow">
                    {t(`categories.${categoryId}.description`)}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={getDetailsLink(locale, categoryId)}
                      className="inline-block rounded-md bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      {t("viewDetails")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
