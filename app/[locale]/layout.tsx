import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function LocaleSpecificLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} />{" "}
    </NextIntlClientProvider>
  );
}
