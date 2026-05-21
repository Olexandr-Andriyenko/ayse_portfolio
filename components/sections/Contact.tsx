"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "@/components/icons/social";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const social = [
  { Icon: IconFacebook, label: "Facebook", href: "#" },
  { Icon: IconTwitter, label: "Twitter", href: "#" },
  { Icon: IconLinkedin, label: "LinkedIn", href: "#" },
  { Icon: IconInstagram, label: "Instagram", href: "#" },
] as const;

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — wire to API later
    const form = e.currentTarget;
    if (typeof window !== "undefined") {
      window.alert("Thanks — this demo form does not send email yet.");
    }
    form.reset();
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24"
    >
      <Container>
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight text-slate-900"
              >
                Let&apos;s talk
              </h2>
              <p className="mt-4 text-slate-600">
                Have a project in mind? Send a note — I typically reply within
                two business days.
              </p>

              <ul className="mt-8 space-y-5 text-slate-700">
                <li className="flex gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <span>(+1) 555-012-3456</span>
                </li>
                <li className="flex gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <span>hello@brooklyngilbert.com</span>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <span>
                    120 Market Street
                    <br />
                    San Francisco, CA
                  </span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {social.map(({ Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                />
              </div>
              <Button type="submit" className="w-full px-8 py-3 sm:w-auto">
                Send
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
