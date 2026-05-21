import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "@/components/icons/social";
import { Container } from "@/components/ui/Container";
import { ABOUT_IMAGE } from "@/lib/content";

const hireClass =
  "inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2";

const social = [
  { Icon: IconFacebook, label: "Facebook", href: "#" },
  { Icon: IconTwitter, label: "Twitter", href: "#" },
  { Icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { Icon: IconInstagram, label: "Instagram", href: "#" },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 -mt-12 px-0 pb-20 sm:-mt-16 sm:pb-24 lg:-mt-20"
    >
      <Container>
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-100">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Brooklyn Gilbert"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/95 px-4 py-2 shadow-md ring-1 ring-slate-100 backdrop-blur">
                {social.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-purple-50 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                I am Professional User Interface Designer
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                I collaborate with founders and product teams to shape journeys
                that feel effortless. My process blends research, prototyping, and
                visual polish so every screen supports your business goals and
                your users&apos; expectations.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#contact" className={hireClass}>
                  Hire Me
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
