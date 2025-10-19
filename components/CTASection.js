import { motion } from "framer-motion";
import Section from "./Section";
import Button from "./Button";

export default function CTASection() {
  return (
    <Section className="pb-16">
      <motion.div
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#1a1a1a] via-black to-[#090909] px-8 py-16 text-center md:px-16 md:py-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-white/[0.06]" />
        <div className="pointer-events-none absolute -left-10 top-24 h-48 w-48 rounded-full bg-[#ff3131]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full bg-white/10 blur-[100px]" />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="heading-font text-3xl font-semibold text-white md:text-4xl">
            Let AI employees run your business — so you can focus on growth.
          </h2>
          <Button href="https://calendly.com/firstclassfranchise/ai-booking-demo" external className="mt-2">
            Book Your Free Audit Call
          </Button>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Limited availability this month.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
