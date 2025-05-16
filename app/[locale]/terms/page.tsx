// File: omercalik/ekstrem-packaging/ekstrem-packaging-e487f92652d54e82cd3d7a93d73c5f07d5be1b0b/app/[locale]/terms/page.tsx
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface LegalPageMetadataProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LegalPageMetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: "TermsOfServicePage" });
  const tRoot = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: `${t("title")} | ${tRoot("titleBase")}`,
    description: `Terms of Service for Ekstrem Packaging. Placeholder content.`,
  };
}

export default async function TermsOfServicePage() {
  const locale = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: "TermsOfServicePage",
  });

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose lg:prose-xl max-w-none text-slate-700">
        <h1>{t("title")}</h1>
        <p className="text-sm text-slate-500">{t("lastUpdated")}</p>

        <p>
          Welcome to Ekstrem Packaging&apos;s Terms of Service page. This
          document is a placeholder and will be updated with our official Terms
          of Service, drafted by legal professionals.
        </p>
        <p>
          Our final Terms of Service will govern your use of the Ekstrem
          Packaging website (ekstremcup.com), operated by Trend Kağıtçılık
          Ürünleri İç ve Dış Tic. Paz. Ltd. Şti. By accessing or using our
          website, you will be agreeing to these terms.
        </p>

        <h2>1. Placeholder: Use of Our Website</h2>
        <p>
          This section will outline the permitted uses of our website and any
          prohibited activities. It will cover aspects like user conduct and
          responsibilities.
        </p>

        <h2>2. Placeholder: Intellectual Property</h2>
        <p>
          This section will clarify the ownership of content on our website,
          including text, graphics, logos, and product designs, and how this
          content may or may not be used by visitors.
        </p>

        <h2>3. Placeholder: Product Information</h2>
        <p>
          This section may include disclaimers regarding the accuracy and
          completeness of product information presented on the website.
        </p>

        <h2>4. Placeholder: Limitation of Liability</h2>
        <p>
          Here we will outline the extent to which Ekstrem Packaging is liable
          for any issues arising from the use of our website.
        </p>

        <h2>5. Placeholder: Governing Law</h2>
        <p>
          This section will specify the jurisdiction whose laws govern these
          terms, which will likely be Turkey.
        </p>

        <h2>6. Placeholder: Changes to Terms</h2>
        <p>
          This will explain how we will notify users of any changes to our Terms
          of Service.
        </p>

        <p className="font-bold mt-8">
          Disclaimer: This is placeholder content for development purposes only.
          It is not a legally binding Terms of Service document. Please consult
          with a legal professional for an official document.
        </p>
      </article>
    </main>
  );
}
