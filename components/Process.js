import { motion } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    title: "Audit",
    description:
      "Analyze workflows, data flows, and inefficiencies to surface the critical leverage points.",
    Icon: () => (
      <path
        d="M8 20V8a4 4 0 0 1 4-4h8m4 8v12a4 4 0 0 1-4 4H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Blueprint",
    description:
      "Design automations, agent roles, and integrations with a technical roadmap tailored to your team.",
    Icon: () => (
      <path
        d="M10 6h12v6H10zM6 18h12v6H6zM10 12v6m8-6v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Build",
    description:
      "Implement, orchestrate, and QA every workflow so it performs flawlessly under load.",
    Icon: () => (
      <path
        d="m9 11 5-5 5 5m0 10-5 5-5-5M4 16h24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Scale",
    description:
      "Monitor, optimize, and expand the stack with live reporting and always-on iteration loops.",
    Icon: () => (
      <path
        d="M8 20a8 8 0 0 1 8-8v-5l8 8-8 8v-5a8 8 0 0 0-8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Process() {
  return (
    <Section id="process">
      <div className="flex flex-col gap-12">
        <header className="max-w-3xl">
          <h2 className="heading-font text-3xl font-semibold text-white md:text-4xl">
            Audit. Blueprint. Build. Scale.
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Precision execution across every phase. We architect the strategy, engineer the stack,
            and stay in the cockpit as your automation systems continue to accelerate.
          </p>
        </header>
        <div className="relative">
          <div className="absolute left-4 top-8 bottom-8 hidden w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:left-1/2 md:block" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="heading-font flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] text-sm font-semibold text-black">
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <div className="heading-font text-sm uppercase tracking-[0.3em] text-white/40">
                    {step.title}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-[#ff3131]"
                  >
                    <step.Icon />
                  </svg>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
