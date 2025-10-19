import { motion } from "framer-motion";
import Section from "./Section";

const caseStudies = [
  {
    metric: "+230%",
    headline: "Booked calls in 30 days.",
    description:
      "Automated outbound agents + AI qualifying funnel for a premium coaching brand.",
    quote: "“We hit our quarterly pipeline target in four weeks without hiring.”",
    author: "Founder, Elite Coaching Collective",
  },
  {
    metric: "4.5x",
    headline: "Increase in sales velocity.",
    description:
      "Dynamic CRM automations and AI closer playbooks that keep follow-up instant and personalized.",
    quote: "“Deals now move exponentially faster, and win rates have never been higher.”",
    author: "Head of Sales, Velocity Partners",
  },
  {
    metric: "-42%",
    headline: "Operating costs per client.",
    description:
      "Rebuilt onboarding, support, and reporting with digital employees overseeing every workflow.",
    quote: "“It feels like we added an entire ops team that works through the night.”",
    author: "COO, Horizon Media Group",
  },
];

export default function CaseStudies() {
  return (
    <Section id="case-studies">
      <div className="flex flex-col gap-12">
        <header className="max-w-3xl">
          <h2 className="heading-font text-3xl font-semibold text-white md:text-4xl">
            Proof from the cockpit.
          </h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            First Class systems don’t just automate tasks — they unlock new operating leverage.
            Here’s a glimpse at recent wins for high-performing service leaders.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.metric}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div>
                <span className="heading-font text-xs uppercase tracking-[0.3em] text-[#ff3131]">
                  Result
                </span>
                <p className="heading-font mt-4 text-4xl font-semibold text-white">
                  {item.metric}
                </p>
                <p className="mt-2 text-sm text-white/60">{item.headline}</p>
                <p className="mt-4 text-sm text-white/60">{item.description}</p>
              </div>
              <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.04] p-6">
                <p className="text-sm text-white/70">{item.quote}</p>
                <p className="heading-font mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
                  {item.author}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
