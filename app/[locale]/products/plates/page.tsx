import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { plateLineArt } from "@/app/data/productData";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "PaperPlatesPage" });
  const tRoot = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: `${t("metaTitle")} | ${tRoot("titleBase")}`,
    description: t("metaDescription"),
  };
}

export default async function PaperPlatesPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "PaperPlatesPage" });

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <section id="paper-plates" className="scroll-mt-20">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-cyan-800 sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              {t("descriptionLine1")}
            </p>
          </div>

          <div className="mt-8">
            {" "}
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-cyan-700 sm:text-2xl">
              {t("visualizationsTitle")}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {plateLineArt.map((product) => (
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
                    {product.sizeLabel}{" "}
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
