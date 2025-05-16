import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="quote" className="bg-emerald-700 py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to Make the Switch?
        </h2>
        <p className="mt-4 text-lg leading-6 text-emerald-100">
          Join businesses and individuals choosing sustainable CupCraft paper
          cups. Get a custom quote or learn more about our eco-friendly
          solutions today.
        </p>
        <Link
          href="#contact" // Or a specific quote request page
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-emerald-600 shadow-md transition duration-150 ease-in-out hover:bg-emerald-50 sm:w-auto"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
