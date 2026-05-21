import Link from "next/link";
import { Container } from "@/components/ui/Container";

const ctaBtnClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-slate-900 py-16 sm:py-20"
    >
      <Container className="text-center">
        <h2
          id="cta-heading"
          className="mx-auto max-w-3xl text-2xl font-bold leading-snug text-white sm:text-3xl"
        >
          Do you have Project Idea? Let&apos;s discuss your project!
        </h2>
        <div className="mt-8 flex justify-center">
          <Link href="#contact" className={ctaBtnClass}>
            Let&apos;s discuss
          </Link>
        </div>
      </Container>
    </section>
  );
}
