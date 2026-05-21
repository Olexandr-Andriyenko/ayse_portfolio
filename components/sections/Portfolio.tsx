import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PORTFOLIO_ITEMS } from "@/lib/content";

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="portfolio-heading"
          title="Portfolio"
          subtitle="Selected work across product UI, marketing sites, and design systems."
          align="center"
        />

        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <Link
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#portfolio" className={primaryBtnClass}>
            See All
          </Link>
        </div>
      </Container>
    </section>
  );
}
