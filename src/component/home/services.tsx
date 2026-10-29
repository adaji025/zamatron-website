"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BatteryLow,
  Bug,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  TriangleAlert,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

const challenges = [
  {
    id: "cyber-threats",
    title: "Cyber Threats",
    description:
      "ransomware, malware, phishing, credential theft, vulnerabilities, insider threats",
    icon: Bug,
  },
  {
    id: "compliance-pressure",
    title: "Compliance Pressure",
    description:
      "GDPR, DSP Toolkit, Cyber Essentials, ISO 27001, CQC and other healthcare requirements",
    icon: FileCheck2,
  },
  {
    id: "operational-risk",
    title: "Operational Risk",
    description:
      "Staff training gaps, expired credentials, third party suppliers, weak policies, poor evidence management",
    icon: TriangleAlert,
  },
  {
    id: "limited-resources",
    title: "Limited Resources",
    description:
      "Lean healthcare teams juggle competing priorities and expert security without adding headcount.",
    icon: BatteryLow,
  },
] as const;

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 right-0 h-28 w-32 opacity-80"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(59,130,246,0.85) 1.15px, transparent 1.25px)",
        backgroundSize: "11px 11px",
        backgroundPosition: "top right",
        maskImage:
          "linear-gradient(to bottom left, black 20%, transparent 72%)",
        WebkitMaskImage:
          "linear-gradient(to bottom left, black 20%, transparent 72%)",
      }}
    />
  );
}

export function Services() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-card]");
    if (!track || !firstCard) return 0;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "16");
    return firstCard.offsetWidth + gap;
  }, []);

  const syncFromScroll = useEffectEvent(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = getStep();
    if (!step) return;

    const index = Math.round(track.scrollLeft / step);
    const maxIndex = challenges.length - 1;
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);

    setActiveIndex(nextIndex);
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = 0;
    syncFromScroll();
    track.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("resize", syncFromScroll);

    return () => {
      track.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("resize", syncFromScroll);
    };
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const step = getStep();
      if (!step) return;

      track.scrollTo({ left: index * step, behavior: "smooth" });
    },
    [getStep],
  );

  function go(delta: number) {
    scrollToIndex(
      Math.min(Math.max(activeIndex + delta, 0), challenges.length - 1),
    );
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center text-[1.65rem] font-extrabold uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-4xl lg:text-[2.65rem]"
        >
          Healthcare is under attack.
          <br />
          Your security can&apos;t be reactive.
        </motion.h2>
      </div>

      <div className="relative mt-12 sm:mt-16">
        <motion.ul
          ref={trackRef}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth [&::-webkit-scrollbar]:hidden pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pr-0 [scroll-padding-inline-start:max(1.25rem,calc((100vw-72rem)/2+1.25rem))]"
          aria-label="Healthcare security challenges"
        >
          {challenges.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <li
                key={item.id}
                data-card
                className="w-[min(18.5rem,85vw)] shrink-0 snap-start sm:w-[min(21rem,calc((100vw-max(1.25rem,(100vw-72rem)/2+1.25rem)-2rem)/3.2))]"
              >
                <article
                  className={cn(
                    "relative h-full min-h-54 overflow-hidden rounded-[1.35rem] border bg-[#0a0d16] p-5 transition-[border-color,box-shadow] duration-300 sm:p-6",
                    isActive
                      ? "border-blue-zam-500 shadow-[0_0_0_1px_rgba(59,130,246,0.35),0_0_28px_rgba(37,99,235,0.28)]"
                      : "border-white/8",
                  )}
                >
                  {isActive ? <DotGrid /> : null}

                  <div
                    className={cn(
                      "relative flex size-10 items-center justify-center rounded-full border transition-colors duration-300",
                      isActive
                        ? "border-blue-zam-400/50 text-blue-zam-300 shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                        : "border-white/10 text-blue-zam-400",
                    )}
                  >
                    <Icon
                      className="size-4.5"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="relative mt-5 text-sm font-extrabold uppercase tracking-[0.08em] text-white sm:text-[0.95rem]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-6 text-white/70">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </motion.ul>

        <div className="mx-auto mt-8 flex w-full max-w-6xl items-center justify-center gap-3 px-5">
          <button
            type="button"
            aria-label="Previous challenge"
            disabled={!canPrev}
            onClick={() => go(-1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors hover:border-white/25 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pages">
            {challenges.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-label={`Go to ${item.title}`}
                aria-selected={activeIndex === index}
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "w-6 bg-blue-zam-400"
                    : "w-1.5 bg-white/25 hover:bg-white/40",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next challenge"
            disabled={!canNext}
            onClick={() => go(1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 text-white transition-colors hover:border-white/25 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
