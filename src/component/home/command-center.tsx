"use client";

import { animate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scores = [
  { value: 87, label: "Trust Score", featured: true },
  { value: 92, label: "Compliance" },
  { value: 89, label: "Cybersecurity" },
  { value: 76, label: "Vulnerability" },
] as const;

function CountUp({
  to,
  active,
  className,
}: {
  to: number;
  active: boolean;
  className?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [active, to]);

  return <p className={className}>{value}%</p>;
}

export function CommandCentre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div
      ref={ref}
      className="relative z-10 mx-auto mt-14 w-full max-w-[960px] sm:mt-16"
    >
      <div className="relative">
        <Image
          src="/images/pngs/command-center.png"
          alt=""
          width={960}
          height={528}
          unoptimized
          priority
          className="h-auto w-full select-none"
        />

        <article className="absolute right-3 bottom-0 z-20 w-[min(100%,280px)] rounded-t-[22px] border border-white bg-white p-4 shadow-[0_18px_40px_rgba(28,35,51,0.14)] sm:right-5 sm:w-[min(100%,360px)] sm:p-5 lg:w-[42%]">
          <h2 className="text-[15px] font-semibold text-[#1c1f26]">
            Your Cyber Risk Score
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:mt-5">
            {scores.map((score) => {
              const featured = "featured" in score;
              return (
                <li
                  key={score.label}
                  className={
                    featured
                      ? "rounded-2xl bg-white p-3 shadow-[0_12px_30px_rgba(28,35,51,0.14)] ring-1 ring-black/5 sm:p-4"
                      : "rounded-2xl bg-[#f0f2f5] p-3 sm:p-4"
                  }
                >
                  <CountUp
                    to={score.value}
                    active={inView}
                    className={
                      featured
                        ? "text-[1.75rem] leading-none font-bold tracking-[-0.04em] text-[#111318] sm:text-[2rem]"
                        : "text-[1.4rem] leading-none font-semibold tracking-[-0.03em] text-[#b4bac4] sm:text-[1.65rem]"
                    }
                  />
                  <p
                    className={
                      featured
                        ? "mt-2 text-xs text-[#8b919c]"
                        : "mt-2 text-xs text-[#c4c9d2]"
                    }
                  >
                    {score.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
}
