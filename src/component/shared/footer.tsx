import Link from "next/link";

const solutions = [
  { label: "Cosmetic Surgery", href: "/solutions/cosmetic-surgery" },
  { label: "BBL Clinics", href: "/solutions/bbl-clinics" },
  { label: "Aesthetic Clinics", href: "/solutions/aesthetic-clinics" },
  { label: "Pharmacies", href: "/solutions/pharmacies" },
  { label: "Care Homes", href: "/solutions/care-homes" },
  { label: "GP Practices", href: "/solutions/gp-practices" },
] as const;

const company = [
  { label: "About", href: "/about" },
  { label: "Trust Centre", href: "/trust-centre" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
] as const;

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "X", href: "https://x.com", icon: XIcon },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#05070f] text-white">
      <img
        src="/images/pngs/footer-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="app-width relative pt-20 lg:pt-28">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[280px]">
            <Link href="/" className="inline-flex">
              <img
                src="/images/svgs/zamatron-logo.svg"
                alt="Zamatron Cyber Defence Ltd."
                width={113}
                height={75}
                className="h-[72px] w-auto"
              />
            </Link>
            <p className="mt-6 text-sm leading-6 text-white/70">
              Cybersecurity, compliance, risk and digital trust for healthcare
              organizations.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white/10"
                  >
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-16 sm:gap-28">
            <FooterColumn title="Solutions" links={solutions} />
            <FooterColumn title="Company" links={company} />
          </div>
        </div>

        <p className="mt-16 border-t border-white/25 py-6 text-center text-xs text-white/75 sm:text-sm">
          Copyright © 2026. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[15px] font-semibold text-white">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M14.2 8.2V6.7c0-.6.4-.8 1-.8h1.3V3.5h-1.9C12.2 3.5 11 4.8 11 6.8v1.4H9.2v2.5H11V20h2.8v-9.3h2l.3-2.5h-2.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.8" cy="7.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true" fill="currentColor">
      <path d="M14.6 4h2.5l-5.5 6.3L18 20h-4.7l-3.7-4.8L5.6 20H3.1l5.9-6.7L3 4h4.8l3.3 4.4L14.6 4Zm-.9 14.4h1.4L7.4 5.5H5.9l7.8 12.9Z" />
    </svg>
  );
}
