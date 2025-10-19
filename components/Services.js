import { motion } from "framer-motion";
import Section from "./Section";

const pillars = [
  {
    title: "Marketing Automation",
    description: "Deploy omnipresent marketing engines that produce demand on autopilot.",
    highlights: ["AI content pipelines", "Outbound & inbound sequencing", "Ad creative systems"],
  },
  {
    title: "Sales Optimization",
    description: "Tighten every conversion point with AI closers, optimized CRM flows, and instant lead routing.",
    highlights: ["AI-assisted closing", "Deal health monitoring", "Pipeline acceleration"],
  },
  {
    title: "Operations Efficiency",
    description: "Replace manual busywork with orchestrated automations that keep your team lean.",
    highlights: ["Workflow orchestration", "Dynamic SOP execution", "Agent collaboration"],
  },
  {
    title: "Reporting & Scale",
    description: "Command actionable dashboards and optimization loops that surface what moves the needle.",
    highlights: ["Unified dashboards", "Impact reporting", "Continuous optimization"],
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="flex flex-col gap-12">
        <header className="max-w-2xl">
          <p className="heading-font text-xs uppercase tracking-[0.35em] text-[#ff3131]">
            What We Do
          </p>
          <h2 className="heading-font mt-4 text-3xl font-semibold text-white md:text-4xl">
            Systems engineered for scale, built end-to-end by First Class.
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Every pillar is architected to compound — so marketing, sales, operations, and
            leadership align behind data-backed automation.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff3131]/10 blur-[90px] transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative">
                <p className="heading-font text-sm uppercase tracking-[0.3em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="heading-font mt-4 text-2xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm text-white/60 md:text-base">{pillar.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/60">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#ff3131]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
