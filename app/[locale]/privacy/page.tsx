// File: app/[locale]/privacy/page.tsx
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Navbar and Footer are usually in the layout, so not imported here directly
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });
  const tRoot = await getTranslations({ locale, namespace: "Metadata" }); // Assuming Metadata.titleBase exists
  return {
    title: `${t("title")} | ${tRoot("titleBase")}`,
    description: `Privacy Policy for Ekstrem Packaging. Placeholder content.`, // Generic description
  };
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "PrivacyPolicyPage" });

  // IMPORTANT: The content below is extremely generic placeholder text.
  // It is NOT a real Privacy Policy and MUST be replaced by a legally compliant one
  // drafted by a qualified legal professional.

  return (
    // Assuming Navbar and Footer are handled by app/[locale]/layout.tsx
    // <div className="flex min-h-screen flex-col bg-white">
    //   <Navbar />
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose lg:prose-xl max-w-none text-slate-700">
        <h1>{t("title")}</h1>
        <p className="text-sm text-slate-500">{t("lastUpdated")}</p>

        <p>
          Welcome to Ekstrem Packaging&apos;s Privacy Policy page. This document
          is a placeholder and will be updated with our official Privacy Policy,
          drafted by legal professionals.
        </p>
        <p>
          Our final Privacy Policy will detail how Ekstrem Packaging (operated
          by Trend Kağıtçılık Ürünleri İç ve Dış Tic. Paz. Ltd. Şti.) collects,
          uses, shares, and protects your personal information when you visit
          our website (ekstremcup.com) and use our services. It will comply with
          applicable data protection laws, including KVKK in Turkey and GDPR
          where relevant.
        </p>

        <h2>1. Placeholder: Information We Collect</h2>
        <p>
          This section will describe the types of personal and non-personal
          information we may collect from you, such as your name, email address,
          company information (when you request a quote or contact us), and
          information collected via cookies and website analytics.
        </p>

        <h2>2. Placeholder: How We Use Your Information</h2>
        <p>
          This section will explain the purposes for which we use the
          information we collect, such as responding to your inquiries,
          processing your quote requests, improving our website and services,
          and for marketing communications (with your consent, where required).
        </p>

        <h2>3. Placeholder: Data Sharing and Disclosure</h2>
        <p>
          Here we will outline if and how your information might be shared with
          third parties, such as service providers who assist us in our
          operations, or if legally required.
        </p>

        <h2>4. Placeholder: Your Rights</h2>
        <p>
          This section will detail your rights concerning your personal data
          under applicable laws (like KVKK and GDPR), including rights to
          access, rectify, or erase your data, and how you can exercise these
          rights.
        </p>

        <h2>5. Placeholder: Cookies</h2>
        <p>
          Information about the use of cookies and other tracking technologies
          on our website will be provided here.
        </p>

        <h2>6. Placeholder: Contact Us</h2>
        <p>
          This section will provide contact details for any privacy-specific
          concerns. For now, please use the general contact information
          available on our website.
        </p>

        <p className="font-bold mt-8">
          Disclaimer: This is placeholder content for development purposes only.
          It is not a legally binding Privacy Policy. Please consult with a
          legal professional for an official policy.
        </p>
      </article>
    </main>
    //   <Footer locale={locale} />
    // </div>
  );
}
