import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const tRoot = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: `${t("pageTitle")} | ${tRoot("titleBase")}`,
    description: t("pageDescription"),
  };
}

const companyInfoStatic = {
  legalName: "Trend Kağıtçılık Ürünleri İç ve Dış Tic. Paz. Ltd. Şti.",
  address: "Bahçekapı Mah. 2464. Sok. No:4/1 Şaşmaz/Etimesgut ANKARA/TURKEY",
  phone: "+90 312 278 52 02",
  fax: "+90 312 278 52 03",
  email: "info@ekstremcup.com",
  logoUrl: "/logo.jpg",
};

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const tHero = await getTranslations({ locale, namespace: "HeroSection" });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow">
        <section className="bg-slate-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-base font-semibold uppercase tracking-wider text-orange-500">
                {t("title")}
              </h1>
              <p className="mt-2 text-4xl font-extrabold tracking-tight text-cyan-800 sm:text-5xl">
                {t("subTitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 prose prose-lg text-slate-700 max-w-none">
                <p>
                  <strong>Ekstrem Packaging</strong>,{" "}
                  {companyInfoStatic.legalName}{" "}
                  {tHero("groupCompany").includes(companyInfoStatic.legalName)
                    ? tHero("groupCompany")
                        .split(companyInfoStatic.legalName)[1]
                        .trim()
                    : tHero("groupCompany")}
                </p>
                <p>{tHero("experience")}</p>
                <p>{tHero("production")}</p>
                <p>{tHero("brand")}</p>
                <p>{t("additionalInfo")} </p>
              </div>

              <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-xl">
                <div className="flex justify-center mb-6">
                  <Image
                    src={companyInfoStatic.logoUrl}
                    alt={t("logoAlt") || "Ekstrem Packaging Logo"}
                    width={240}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-cyan-700 mb-4 text-center">
                  {t("contactInformation")}
                </h3>
                <address className="not-italic text-slate-600 space-y-3">
                  <p>
                    <strong className="font-medium text-slate-800">
                      {t("companyNameLabel")}:
                    </strong>
                    <br />
                    {companyInfoStatic.legalName}
                  </p>{" "}
                  <p>
                    <strong className="font-medium text-slate-800">
                      {t("addressLabel")}:
                    </strong>
                    <br />
                    {companyInfoStatic.address}
                  </p>
                  <p>
                    <strong className="font-medium text-slate-800">
                      {t("phoneLabel")}:
                    </strong>
                    <br />
                    {companyInfoStatic.phone}
                  </p>
                  <p>
                    <strong className="font-medium text-slate-800">
                      {t("faxLabel")}:
                    </strong>
                    <br />
                    {companyInfoStatic.fax}
                  </p>
                  <p>
                    <strong className="font-medium text-slate-800">
                      {t("emailLabel")}:
                    </strong>
                    <br />
                    <Link
                      href={`mailto:${companyInfoStatic.email}`}
                      className="text-orange-500 hover:text-orange-600"
                    >
                      {companyInfoStatic.email}
                    </Link>
                  </p>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
