"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { IconStar } from "./Icons";
import { DEFAULT_TESTIMONIALS, type Testimonial } from "@/lib/testimonials";

export default function SocialProof() {
  const [items, setItems] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    let active = true;
    fetch("/api/testimonials")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (active && Array.isArray(d) && d.length > 0) setItems(d);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="depoimentos" className="relative scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-azul-piscina">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-5 w-5" />
            ))}
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold text-tinta sm:text-5xl">
            Nota <span className="text-gradient">5.0</span> no Google
          </h2>
          <p className="mt-3 max-w-xl font-body text-base text-tinta/70 sm:text-lg">
            A confiança de condomínios, clubes e administradoras em todo o Rio
            de Janeiro.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-papel p-7 shadow-sm ring-1 ring-azul-piscina/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-azul-piscina/15">
                <div>
                  <div className="flex gap-0.5 text-azul-piscina">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <IconStar key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed text-tinta/80">
                    “{t.quote}”
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-piscina/15 font-heading text-sm font-bold text-azul-piscina">
                    {t.name.charAt(0) || "•"}
                  </span>
                  <div className="text-left">
                    <p className="font-body text-sm font-semibold text-tinta">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-tinta/60">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
