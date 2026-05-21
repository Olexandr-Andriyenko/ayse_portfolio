"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/lib/content";

export function Blog() {
  const [active, setActive] = useState(0);

  return (
    <section id="blog" aria-labelledby="blog-heading" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="blog-heading"
          title="Blog"
          subtitle="Notes on design process, collaboration, and shipping better interfaces."
          align="center"
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-slate-500">{post.meta}</p>
                <h3 className="mt-2 text-base font-bold leading-snug text-slate-900">
                  {post.title}
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

        <div
          className="mt-10 flex justify-center gap-2"
          role="tablist"
          aria-label="Blog slides"
        >
          {BLOG_POSTS.map((_, i) => (
            <button
              key={String(i)}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 ${
                active === i ? "bg-purple-600" : "bg-slate-300"
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
