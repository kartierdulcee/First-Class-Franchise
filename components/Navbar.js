import Link from "next/link";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button from "./Button";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center px-6 sm:px-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl md:px-6">
        <Link
          href="#hero"
          className="heading-font text-base font-semibold uppercase tracking-[0.25em] text-white"
        >
          First Class
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
        <div className="flex items-center gap-2">
          <SignedIn>
            <Button href="/admin" variant="secondary" className="hidden md:inline-flex">
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
            <Button href="/team-login" variant="secondary" className="hidden md:inline-flex">
              Team Login
            </Button>
            <Button href="/team-login" variant="secondary" className="md:hidden">
              Login
            </Button>
          </SignedOut>
          <Button
            href="https://calendly.com/firstclassfranchise/ai-booking-demo"
            variant="secondary"
            external
            className="hidden min-w-[160px] justify-center md:inline-flex"
          >
            Book a Call
          </Button>
          <Button
            href="https://calendly.com/firstclassfranchise/ai-booking-demo"
            external
            variant="secondary"
            className="md:hidden"
          >
            Book
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
