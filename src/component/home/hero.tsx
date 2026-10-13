import { PillButton } from "@/component/shared/pill-button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const scores = [
  { value: "87%", label: "Trust Score", featured: true },
  { value: "92%", label: "Compliance" },
  { value: "89%", label: "Cybersecurity" },
  { value: "76%", label: "Vulnerability" },
] as const;

export function Hero() {
  return (
    <section className="relative px-5 pb-20 pt-16 sm:pt-24">
      <img
        src="/images/pngs/top-left-ellipse.png"
        alt=""
        width={173}
        height={282}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-36 -translate-y-28.5 select-none sm:w-52 lg:w-64"
      />
      <img
        src="/images/pngs/top-left-ellipse.png"
        alt=""
        width={173}
        height={282}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-36 -translate-y-28.5 -scale-x-100 select-none sm:w-52 lg:w-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-215 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-[min(1480px,130%)] -translate-x-1/2">
          <img
            src="/images/pngs/hero-ellipse.png"
            alt=""
            width={1427}
            height={815}
            className="block h-auto w-full max-w-none origin-center animate-hero-orbit select-none motion-reduce:animate-none"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-3xl text-[2rem] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.4rem]">
          Cybersecurity and
          <br />
          Compliance Built for
          <br />
          Healthcare
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-white/70 sm:text-[15px]">
          Zamatron 360 continuously protects your organisation, identifies cyber
          risks, automates compliance and keeps your evidence audit ready, all
          from one intelligent platform.
        </p>

        <form
          action="/book-a-demo"
          className="mt-10 flex w-full max-w-xl items-center rounded-full border border-[#3b82f6]/70 bg-[linear-gradient(180deg,rgba(16,36,82,0.92),rgba(7,14,32,0.94))] p-1.5 shadow-[0_0_36px_rgba(30,90,200,0.28)]"
        >
          <label htmlFor="domain" className="sr-only">
            Entry your domain
          </label>
          <input
            id="domain"
            name="domain"
            type="text"
            placeholder="Entry your domain"
            className="h-11 min-w-0 flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/50"
          />
          <PillButton type="submit" className="h-11 shrink-0 sm:h-11 sm:px-6 sm:text-sm">
            Get Demo
          </PillButton>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/cyber-risk-score"
            className="inline-flex h-12 items-center rounded-full bg-[#1d74f5] px-6 text-sm font-medium text-white transition-colors hover:bg-[#3b86f6]"
          >
            Get Your Cyber Risk Score
          </Link>
          <a
            href="#platform"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#2a2e38]/80 px-6 text-sm font-medium text-white/90 transition-colors hover:bg-[#343844]"
          >
            Explore the Platform
            <ChevronDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <CommandCentre />
    </section>
  );
}

function CommandCentre() {
  return (
    <div className="relative z-10 mx-auto mt-14 w-full max-w-5xl sm:mt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-6 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-10 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl"
      />

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-[7%] hidden h-[84%] w-[62%] rounded-[30px] border border-white/50 bg-white/75 shadow-[0_18px_50px_rgba(15,18,28,0.16)] lg:block"
        />

        <div className="relative rounded-[28px] border border-white/10 bg-[#14161c] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-3 lg:mr-[15%] lg:mt-7">
          <div className="rounded-[22px] bg-[#eef0f3] p-4 text-left sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm text-[#5c6370] sm:text-[15px]">
                  <span className="size-2 rounded-full bg-[#2f6bff]" />
                  Zamatron 360 /{" "}
                  <span className="font-semibold text-[#1c1f26]">
                    Command Centre
                  </span>
                </p>
                <p className="mt-1 text-xs text-[#8b919c]">
                  Live posture · Updated 2 min ago
                </p>
              </div>
              <div className="flex items-center gap-2.5 rounded-full bg-white py-1 pr-1 pl-3 shadow-sm">
                <span className="h-0.5 w-6 rounded-full bg-[#d5d8de]" />
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#dbe4f5] text-[10px] font-semibold text-[#31548a]">
                  Z
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 lg:max-w-[68%]">
              <article className="rounded-2xl border border-[#e6e9ee] bg-white/80 p-4 sm:p-5">
                <h2 className="text-sm font-medium text-[#3d4450]">
                  Cybersecurity
                </h2>
                <div className="mt-4 space-y-2.5">
                  <div className="h-2 w-4/5 rounded-full bg-[#eceff3]" />
                  <div className="h-2 w-3/5 rounded-full bg-[#eceff3]" />
                  <div className="h-2 w-2/5 rounded-full bg-[#eceff3]" />
                </div>
              </article>
              <article className="rounded-2xl border border-[#e6e9ee] bg-white/80 p-4 sm:p-5">
                <h2 className="text-sm font-medium text-[#3d4450]">Compliance</h2>
                <div className="mt-5 h-2 rounded-full bg-[#e6eaf0]">
                  <div className="relative h-full w-[68%] rounded-full bg-[#2f6bff]">
                    <span className="absolute top-1/2 -right-1.5 size-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#2f6bff] shadow" />
                  </div>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="h-2 w-11/12 rounded-full bg-[#eceff3]" />
                  <div className="h-2 w-7/12 rounded-full bg-[#eceff3]" />
                </div>
              </article>
            </div>
          </div>
        </div>

        <article className="relative z-20 mt-4 rounded-[22px] border border-white bg-white p-4 shadow-[0_22px_50px_rgba(28,35,51,0.16)] sm:p-5 lg:absolute lg:top-[26%] lg:right-0 lg:mt-0 lg:w-[min(100%,440px)]">
          <h2 className="text-sm font-semibold text-[#1c1f26]">
            Your Cyber Risk Score
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {scores.map((score) => {
              const featured = "featured" in score;
              return (
                <li
                  key={score.label}
                  className={
                    featured
                      ? "relative rounded-xl bg-white p-3 shadow-[0_10px_28px_rgba(28,35,51,0.14)] ring-1 ring-black/5"
                      : "rounded-xl bg-[#f3f5f8] p-3"
                  }
                >
                  <p
                    className={
                      featured
                        ? "text-3xl font-bold tracking-tight text-[#111318]"
                        : "text-2xl font-semibold tracking-tight text-[#3a4150] sm:text-[1.7rem]"
                    }
                  >
                    {score.value}
                  </p>
                  <p className="mt-1 text-xs text-[#8b919c]">{score.label}</p>
                  {featured ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-7 right-3 text-[#1c1f26]"
                    >
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
                        <path d="M1 1.2 1.4 14.2l3.3-3.2 2.4 5.2 2.2-1-2.4-5.3 4.7.2L1 1.2Z" />
                      </svg>
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
}
