import { motion } from "framer-motion";
import Section from "./Section";

const brands = [
  "Apex Labs",
  "Nova Estates",
  "Velocity HQ",
  "Atlas Ventures",
  "Summit Media",
  "Luminary Co.",
  "Prime Dynamics",
  "Horizon Collective",
  "Sterling Ventures",
  "Polaris Agency",
  "Ascend Partners",
  "Crestline Media",
];

const marqueeTransition = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 28,
  ease: "linear",
};

export default function Logos() {
  const marqueeItems = [...brands, ...brands];

  return (
    <Section className="pt-10 md:pt-12">
      <div className="flex flex-col items-center gap-10 text-center">
        <motion.p
          className="heading-font text-xs uppercase tracking-[0.35em] text-white/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Trusted by top-performing founders & modern brands.
        </motion.p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-6 py-4"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={marqueeTransition}
          >
            {marqueeItems.map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="heading-font flex h-20 min-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-center text-sm uppercase tracking-[0.25em] text-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                {brand}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
      </div>
    </Section>
  );
}
