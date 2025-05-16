// components/ProductsPreviewSection.tsx
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const productCategoryIds = ["cups", "bowls", "plates"]; // To iterate through keys

// Define detailsLink separately for each category if they differ significantly,
// or construct them dynamically. For now, using the category ID.
const getDetailsLink = (locale: string, categoryId: string) =>
  `/${locale}/products/${categoryId}`;

// Image URLs remain static or could also be part of the messages.json if they change by locale
const categoryImageUrls: { [key: string]: string } = {
  cups: "/product-previews/paper-cup-category.jpg",
  bowls: "/product-previews/paper-bowl-category.jpg",
  plates: "/product-previews/paper-plate-category.jpg",
};

export default async function ProductsPreviewSection({
  locale,
}: {
  locale: string;
}) {
  const t = await getTranslations({
    locale,
    namespace: "ProductsPreviewSection",
  });

  // Helper for localized links
  const getLocalizedHref = (href: string) => `/${locale}${href}`;

  return (
    <section
      id={locale === "tr" ? "urunler" : "products"}
      className="bg-slate-50 py-16 sm:py-24"
    >
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
          {productCategoryIds.map((categoryId) => (
            <div
              key={categoryId}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden sm:h-72">
                <Image
                  src={categoryImageUrls[categoryId]}
                  alt={t(`categories.${categoryId}.alt`)}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={getLocalizedHref("/products")} // Main link to the full products page
            className="inline-block rounded-md border border-orange-500 px-8 py-3 text-base font-medium text-orange-500 transition duration-150 ease-in-out hover:bg-orange-50 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {t("viewAllProducts")}
          </Link>
        </div>
      </div>
    </section>
  );
}
