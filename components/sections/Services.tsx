import Link from "next/link";
import { Globe, Palette, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/content";

const primaryBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

const icons = [Palette, Globe, Smartphone] as const;

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              What I do?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              End-to-end product design and implementation support. I partner
              with teams to shape strategy, craft interfaces, and keep quality
              consistent as you scale.
            </p>
            <div className="mt-8">
              <Link href="#portfolio" className={primaryBtnClass}>
                See All
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {SERVICES.map((service, i) => {
              const Icon = icons[i];
              return (
                <article
                  key={service.title}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 sm:flex-row sm:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href="#"
                      className="mt-3 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
