"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-slate-100/80 bg-white/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 sm:h-20 lg:grid-cols-3">
        <Link
          href="#home"
          className="flex items-center gap-2 font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded-lg justify-self-start"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
            B
          </span>
          <span className="text-lg tracking-tight">Brooklyn</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 text-sm font-medium text-slate-600 lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Button
            className="px-5 py-2 text-sm"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center justify-self-end rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire Me
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
