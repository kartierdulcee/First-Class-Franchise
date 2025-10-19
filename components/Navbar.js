import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button from "./Button";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

useEffect(() => {
  if (mobileOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [mobileOpen]);

useEffect(() => () => document.body.classList.remove("overflow-hidden"), []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-4 sm:px-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-3.5 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl md:px-8">
          <Link
            href="#hero"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-white transition hover:border-white/30 hover:bg-white/[0.08]"
            onClick={closeMobile}
          >
            <Image
              src="/logo.png"
              alt="First Class logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="heading-font text-[0.85rem] font-semibold uppercase tracking-[0.3em]">
              First Class
            </span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="heading-font rounded-full px-3 py-2 text-[0.75rem] uppercase tracking-[0.25em] text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <SignedIn>
              <Button href="/admin" variant="secondary">
                HQ
              </Button>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)]",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <Button href="/team-login" variant="secondary">
                Team Login
              </Button>
            </SignedOut>
            <Button
              href="https://calendly.com/firstclassfranchise/ai-booking-demo"
              variant="secondary"
              external
              className="min-w-[160px] justify-center"
            >
              Book a Call
            </Button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <Button
              href="https://calendly.com/firstclassfranchise/ai-booking-demo"
              external
              variant="secondary"
              className="px-4 py-2 text-xs tracking-[0.2em]"
            >
              Book
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-white/30 hover:bg-white/[0.12]"
            >
              <span className="sr-only">Menu</span>
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition ${
                    mobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span className={`h-0.5 w-6 rounded-full bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition ${
                    mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              aria-label="Close navigation menu"
              onClick={closeMobile}
            />
            <motion.div
              className="relative m-4 mt-24 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#161616] via-black to-[#0c0c0c] p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between">
                <span className="heading-font text-sm uppercase tracking-[0.3em] text-white/60">
                  Navigate
                </span>
                <button
                  type="button"
                  onClick={closeMobile}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60 transition hover:border-white/30 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.3em] text-white/80 transition hover:border-[#ff3131]/60 hover:bg-[#ff3131]/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <SignedIn>
                  <Button href="/admin" variant="secondary" className="w-full justify-center">
                    Go to HQ
                  </Button>
                  <div className="flex items-center justify-end">
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox:
                            "border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)] scale-110",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
                <SignedOut>
                  <Button href="/team-login" variant="secondary" className="w-full justify-center">
                    Team Login
                  </Button>
                </SignedOut>
                <Button
                  href="https://calendly.com/firstclassfranchise/ai-booking-demo"
                  variant="secondary"
                  external
                  className="w-full justify-center"
                >
                  Book a Call
                </Button>
              </div>
              <p className="mt-8 text-center text-[11px] uppercase tracking-[0.35em] text-white/30">
                First Class © {new Date().getFullYear()}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
