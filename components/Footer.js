import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Book Call", href: "https://calendly.com/firstclassfranchise/ai-booking-demo", external: true },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: () => (
      <>
        <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="22.5" cy="9.5" r="1.5" fill="currentColor" />
      </>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com",
    Icon: () => (
      <path d="M9 8h5.1l3.6 4.9 4.7-4.9H27l-7.7 8 7.9 10h-5.1l-4.1-5.4L13.4 26H7l8.6-9.1z" />
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    Icon: () => (
      <path d="M15 12.5V23a4 4 0 1 1-4-4c.34 0 .67.03 1 .09V15a6 6 0 1 1 6 6v-3.18c1 .83 2.3 1.33 3.7 1.33h.3v-3.4c-.84-.22-1.6-.63-2.27-1.19a5.8 5.8 0 0 1-1.73-4.2h-3Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:px-8 md:px-12 md:py-16 lg:flex-row lg:items-center lg:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col gap-4">
          <div className="heading-font text-2xl font-semibold text-white">First Class</div>
          <p className="max-w-sm text-sm text-white/60">
            High-performance AI automation & consulting for elite service operators.
          </p>
        </div>
        <nav className="flex flex-1 flex-col gap-6 text-sm text-white/60 md:flex-row md:items-center md:justify-end md:gap-10">
          <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="heading-font uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="heading-font uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-lg transition hover:border-[#ff3131]/70 hover:bg-[#ff3131]/15 hover:text-white"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <Icon />
                </svg>
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
      <div className="border-t border-white/5">
        <p className="mx-auto w-full max-w-6xl px-6 py-6 text-xs text-white/40 sm:px-8 md:px-12">
          © 2025 First Class Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
