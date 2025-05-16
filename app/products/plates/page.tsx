import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../components/Navbar"; // Adjust path as needed
import { plateLineArt } from "../../data/productData"; // Import data

export default function PaperPlatesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <section id="paper-plates" className="scroll-mt-20">
            <div className="mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-cyan-800 sm:text-4xl">
                KAĞIT TABAKLAR / PAPER PLATES
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Kağıt tabaklarımızla hem pratik hem de şık bir sunum
                yapabilirsiniz. Farklı boyut seçenekleriyle her türlü yemeğe
                uyum sağlar. Doğal ve dayanıklı yapısı sayesinde, çevre dostu
                ürünlerimizi güvenle kullanabilirsiniz.
              </p>
              <p className="mt-3 text-lg text-slate-700">
                You can make a practical and stylish presentation with our paper
                plates. It adapts to all kinds of meals with different size
                options. Thanks to its natural and durable structure, you can
                safely use our environmentally friendly products.
              </p>
            </div>
            {/* Plate Line Art Gallery (No spec table for plates based on image) */}
            <div className="mt-8">
              <h2 className="mb-6 text-xl font-semibold tracking-tight text-cyan-700 sm:text-2xl">
                Tabak Boyutları Görselleştirme
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
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-semibold text-slate-700">
                      {product.sizeLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 text-center border-t border-slate-200 pt-10">
              <Link
                href="/#contact"
                className="inline-block rounded-md bg-orange-500 px-8 py-3 text-base font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Tabak Siparişi ve Teklif Alın
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
