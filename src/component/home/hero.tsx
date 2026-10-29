import { CommandCentre } from "@/component/home/command-center";
import { PillButton } from "@/component/shared/pill-button";
import {
  primaryButtonClassName,
  secondaryButtonClassName,
} from "@/component/shared/styles";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

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
          <Link href="/cyber-risk-score" className={primaryButtonClassName}>
            Get Your Cyber Risk Score
          </Link>
          <a
            href="#platform"
            className={cn(secondaryButtonClassName, "gap-2 bg-[#2a2e38]/80")}
          >
            Explore the Platform
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <CommandCentre />
    </section>
  );
}
