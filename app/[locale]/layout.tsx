// app/[locale]/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// No need to re-declare NextIntlClientProvider here, it's in the root app/layout.tsx

export default async function LocaleLayout({
  children,
  params: { locale }, // The specific locale for this layout instance
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar /> {/* Client component, will use useLocale() */}
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} /> {/* Server component, pass locale */}
    </>
  );
}
