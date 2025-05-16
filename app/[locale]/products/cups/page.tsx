// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/app/[locale]/products/cups/page.tsx
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { productSpecificationsCups, cupLineArt } from "@/app/data/productData";
import { Metadata } from "next";

interface ProductPageMetadataProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageMetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: "PaperCupsPage" });
  const tRoot = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: `${t("metaTitle")} | ${tRoot("titleBase")}`,
    description: t("metaDescription"),
  };
}

export default async function PaperCupsPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "PaperCupsPage" });
  const tShared = await getTranslations({
    locale,
    namespace: "ProductPageShared",
  });

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <section id="paper-cups" className="scroll-mt-20">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-cyan-800 sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-slate-700">{t("description")}</p>
          </div>

          <div className="mt-8 flow-root">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-cyan-700 sm:text-2xl">
              {t("specsTitle")}
            </h2>
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg border border-slate-200 shadow-md">
                  <table className="min-w-full divide-y divide-slate-300">
                    <thead className="bg-slate-100">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                        >
                          {tShared("tableHeaderProduct")}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                        >
                          {tShared("tableHeaderBottomDiameter")}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                        >
                          {tShared("tableHeaderTopDiameter")}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 sm:pr-6"
                        >
                          {tShared("tableHeaderHeight")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {productSpecificationsCups.map((product) => (
                        <tr key={product.name}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                            {product.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                            {product.bottomDiameter}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                            {product.topDiameter}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600 sm:pr-6">
                            {product.height}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-cyan-700 sm:text-2xl">
              {t("visualizationsTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cupLineArt.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col items-center justify-start overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
                >
                  <div
                    className="relative w-full"
                    style={{ paddingTop: "75%" }}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.altText}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-slate-700">
                    {product.sizeLabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
