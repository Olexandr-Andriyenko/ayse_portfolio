import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-200">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <Link
            href="#home"
            className="flex items-center gap-2 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
              B
            </span>
            <span className="text-lg tracking-tight">Brooklyn</span>
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-slate-400">
            © 2022 Brooklyn Gilbert. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
