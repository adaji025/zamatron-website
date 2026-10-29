"use client";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const navigation = [
  {
    id: "cyber-defence",
    label: "Cyber Defence",
    items: [
      { label: "Managed SOC", href: "/cyber-defence/managed-soc" },
      { label: "Incident Response", href: "/cyber-defence/incident-response" },
      { label: "Penetration Testing", href: "/cyber-defence/penetration-testing" },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    items: [
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Enterprise", href: "/solutions/enterprise" },
      { label: "Public Sector", href: "/solutions/public-sector" },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    items: [
      { label: "ISO 27001", href: "/compliance/iso-27001" },
      { label: "GDPR", href: "/compliance/gdpr" },
      { label: "Cyber Essentials", href: "/compliance/cyber-essentials" },
    ],
  },
] as const;

type MenuId = (typeof navigation)[number]["id"];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuBaseId = useId();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggleMenu(id: MenuId) {
    setOpenMenu((current) => (current === id ? null : id));
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 px-3 pt-5 sm:px-12 sm:pt-5"
    >
      <nav
        ref={navRef}
        aria-label="Primary"
        className={cn(
          "app-width relative flex h-23.5 w-full items-center justify-between rounded-3xl border border-white/10 px-2.5 transition-[background-color,box-shadow,backdrop-filter] duration-300 sm:px-5",
          scrolled
            ? "bg-[rgba(8,14,28,0.55)] shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl supports-backdrop-filter:bg-[rgba(8,14,28,0.4)]"
            : "bg-transparent",
        )}
      >
        <Link href="/" className="flex items-center pl-2">
          <img
            src="/images/svgs/zamatron-logo.svg"
            alt="Zamatron Cyber Defence Ltd."
            width={113}
            height={75}
            className="h-16 w-auto sm:h-17"
          />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navigation.map((item) => {
            const isOpen = openMenu === item.id;
            const menuId = `${menuBaseId}-${item.id}`;

            return (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-[15px] font-medium text-white/90 transition-colors hover:text-white"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => toggleMenu(item.id)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {isOpen ? (
                    <motion.div
                      id={menuId}
                      role="region"
                      aria-label={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute top-[calc(100%+1.15rem)] left-1/2 z-10 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[rgba(8,14,28,0.94)] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                    >
                      <ul>
                        {item.items.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-xl px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                              onClick={() => setOpenMenu(null)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline"
          >
            Log In
          </Link>
          <Link
            href="/book-a-demo"
            className="inline-flex h-10 items-center rounded-full border border-blue-zam-500 bg-[linear-gradient(40.06deg,#3B82F6_-32.04%,#10101F_139.25%)] px-6 text-sm font-medium text-white shadow-[inset_0_-2px_8px_rgba(191,219,254,0.4)] backdrop-blur-[301.6px] sm:h-12 sm:px-8 sm:text-base"
          >
            Book a Demo
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="mr-1 inline-flex size-10 items-center justify-center rounded-full text-white md:hidden"
              onClick={() => setOpenMenu(null)}
            >
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton
              className="w-full max-w-[20rem] gap-0 border-white/10 bg-[rgba(8,14,28,0.97)] text-white shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden **:data-[slot=sheet-close]:text-white"
            >
              <SheetHeader className="border-b border-white/10 px-5 pt-5 pb-4">
                <SheetTitle className="text-left text-white">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-1 flex-col overflow-y-auto px-3 pb-4">
                {navigation.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-white/8 py-3 last:border-b-0"
                  >
                    <p className="px-3 py-1 text-xs font-medium tracking-[0.14em] text-white/45 uppercase">
                      {item.label}
                    </p>
                    <ul>
                      {item.items.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2 border-t border-white/10 p-4 sm:hidden">
                <Link
                  href="/login"
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Log In
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
