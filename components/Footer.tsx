// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const companyContactData = {
  // Static data that doesn't need translation per se
  legalName: "Trend Kağıtçılık Ürünleri İç ve Dış Tic. Paz. Ltd. Şti.",
  address: "Bahçekapı Mah. 2464. Sok. No:4/1 Şaşmaz/Etimesgut ANKARA/TURKEY",
  phone: "+90 312 278 52 02",
  fax: "+90 312 278 52 03",
  email: "info@ekstremcup.com",
  logoUrl: "/logo.jpg",
};

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Footer" });
  const tNav = await getTranslations({ locale, namespace: "Navbar" }); // For reusing nav link translations

  const footerNavLinks = [
    { href: "/#products", labelKey: "products" },
    { href: "/#our-capabilities", labelKey: "ourCapabilities" },
    { href: "/#sustainability", labelKey: "sustainability" },
    { href: "/about", labelKey: "aboutUs" },
  ];

  const getLocalizedHref = (href: string) => {
    if (href.startsWith("/#")) {
      return `/${locale}${href}`;
    }
    if (href.startsWith("/")) {
      return `/${locale}${href}`;
    }
    return href;
  };

  const creatorName = "Ömer Berkan Çalık";
  const creatorEmail = "omerbcalik@gmail.com";

  return (
    <footer id={"contact"} className="bg-cyan-800 text-cyan-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href={getLocalizedHref("/")} className="flex-shrink-0">
              <Image
                src={companyContactData.logoUrl}
                alt={"Ekstrem Packaging Logo"}
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-base text-cyan-200 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                {t("quickLinks")}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavLinks.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={getLocalizedHref(link.href)}
                      className="text-base text-cyan-200 hover:text-orange-400"
                    >
                      {tNav(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:mt-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                {t("contactUs")}
              </h3>
              <div className="mt-4 space-y-3 text-base text-cyan-200">
                <p>
                  <strong>{t("address")}:</strong> {companyContactData.address}
                </p>
                <p>
                  <strong>{t("phone")}:</strong> {companyContactData.phone}
                </p>
                <p>
                  <strong>{t("fax")}:</strong> {companyContactData.fax}
                </p>
                <p>
                  <strong>{t("email")}:</strong>{" "}
                  <a
                    href={`mailto:${companyContactData.email}`}
                    className="hover:text-orange-400"
                  >
                    {companyContactData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cyan-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-cyan-300 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} {"Ekstrem Packaging"}.{" "}
            {t("allRightsReserved")}. ({companyContactData.legalName}){" "}
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0 md:order-2 text-sm">
            <Link
              href={getLocalizedHref("/privacy")}
              className="text-cyan-300 hover:text-orange-400"
            >
              {t("privacyPolicy")}
            </Link>
            <span className="text-cyan-500">|</span>
            <Link
              href={getLocalizedHref("/terms")}
              className="text-cyan-300 hover:text-orange-400"
            >
              {t("termsOfService")}
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-cyan-700 pt-8 text-center">
          <p className="text-xs text-cyan-400">
            {t("developedBy", { creatorName: creatorName })}
            <br />
            <a
              href={`mailto:${creatorEmail}`}
              className="text-cyan-400 hover:text-orange-400 hover:underline"
            >
              {creatorEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
