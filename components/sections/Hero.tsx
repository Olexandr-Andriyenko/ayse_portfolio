import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const btnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p
              id="hero-heading"
              className="text-4xl font-normal leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl"
            >
              Hello, I&apos;m{" "}
              <span className="block font-bold text-slate-900">
                Brooklyn Gilbert
              </span>
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              I help teams ship intuitive interfaces and cohesive design systems.
              From discovery to delivery, I focus on clarity, accessibility, and
              measurable outcomes.
            </p>
            <div className="mt-8">
              <Link href="#contact" className={btnClass}>
                Hire Me
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
                <dd className="text-lg font-bold text-slate-900">12+</dd>
                <dt className="mt-1 text-sm font-medium text-slate-600">
                  Experience
                </dt>
              </div>
              <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
                <dd className="text-lg font-bold text-slate-900">150+</dd>
                <dt className="mt-1 text-sm font-medium text-slate-600">
                  Project Completed
                </dt>
              </div>
              <div className="rounded-xl bg-purple-50 px-4 py-4 text-center sm:text-left">
                <dd className="text-lg font-bold text-slate-900">50+</dd>
                <dt className="mt-1 text-sm font-medium text-slate-600">
                  Happy Clients
                </dt>
              </div>
            </dl>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              aria-hidden
              className="absolute inset-6 rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-300/30 to-purple-400/20 blur-3xl"
            />
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-100">
              <Image
                src="/hero_img.png"
                alt="Brooklyn Gilbert portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
