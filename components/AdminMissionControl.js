import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import Button from "@/components/Button";

const quickActions = [
  {
    title: "Client Command Center",
    description: "Review live client KPIs, pipelines, and retention signals.",
    href: "https://hq.firstclass.ai/client-metrics",
  },
  {
    title: "Launch Automation Blueprint",
    description: "Kick off a new automation build with scoped requirements.",
    href: "https://hq.firstclass.ai/launch-checklist",
  },
  {
    title: "Escalate Support Ticket",
    description: "Surface blockers to the leadership pod in under 2 minutes.",
    href: "https://hq.firstclass.ai/support/escalate",
  },
];

const resourceHubs = [
  {
    title: "Resource Library",
    description: "Centralized docs, playbooks, and frameworks for every service line.",
    href: "https://hq.firstclass.ai/resources",
    badge: "Always updated",
  },
  {
    title: "Client Intelligence",
    description: "ICP profiles, active initiatives, and upcoming deliverables.",
    href: "https://hq.firstclass.ai/client-intel",
    badge: "Live dashboards",
  },
  {
    title: "Creative Vault",
    description: "Approved assets, messaging angles, and brand kits.",
    href: "https://hq.firstclass.ai/creative",
    badge: "Curated weekly",
  },
];

const sops = [
  {
    title: "New Client Onboarding",
    updated: "Updated Jan 2025",
    href: "https://hq.firstclass.ai/sops/new-client",
  },
  {
    title: "Automation QA & Rollout",
    updated: "Updated Dec 2024",
    href: "https://hq.firstclass.ai/sops/automation-qa",
  },
  {
    title: "Outbound Agent Optimization",
    updated: "Updated Jan 2025",
    href: "https://hq.firstclass.ai/sops/outbound-optimization",
  },
  {
    title: "Support Escalation Ladder",
    updated: "Updated Nov 2024",
    href: "https://hq.firstclass.ai/sops/support-escalation",
  },
];

const tools = [
  {
    name: "HubSpot Sales Hub",
    purpose: "Pipeline & revenue dashboards",
    href: "https://app.hubspot.com/login",
  },
  {
    name: "Make.com",
    purpose: "Automation orchestration & monitoring",
    href: "https://www.make.com/en",
  },
  {
    name: "Notion HQ",
    purpose: "Documentation, briefs, and async huddles",
    href: "https://www.notion.so/login",
  },
  {
    name: "OpenAI Control Center",
    purpose: "Prompt libraries & agent configurations",
    href: "https://platform.openai.com/",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AdminMissionControl() {
  return (
    <div className="flex w-full flex-col gap-12 pb-20">
      <header className="flex flex-col gap-8 rounded-4xl border border-white/10 bg-white/[0.03] px-8 py-10 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-3xl md:flex-row md:items-center md:justify-between">
        <div>
          <motion.span
            className="heading-font inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/60"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Internal Access
          </motion.span>
          <motion.h1
            className="heading-font mt-4 text-3xl font-semibold md:text-4xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Mission Control & Staff Headquarters
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-sm text-white/60 md:text-base"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Everything your elite team needs to deliver white-glove automation — in one command
            center. Track deliverables, pull SOPs, and launch new initiatives fast.
          </motion.p>
        </div>
        <motion.div
          className="flex items-center gap-4 self-start rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <div className="text-right text-xs uppercase tracking-[0.2em] text-white/40">
            Logged in as
          </div>
          <UserButton
            appearance={{
              elements: { rootBox: "scale-110", avatarBox: "border border-white/20" },
            }}
            afterSignOutUrl="/"
          />
        </motion.div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.title}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-[#ff3131]/60 hover:bg-[#ff3131]/10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.05 * index}
          >
            <div>
              <p className="heading-font text-xs uppercase tracking-[0.25em] text-white/40">
                Quick Action
              </p>
              <h2 className="heading-font mt-3 text-xl font-semibold">{action.title}</h2>
              <p className="mt-3 text-sm text-white/60">{action.description}</p>
            </div>
            <Button href={action.href} variant="secondary" className="mt-6 justify-center" external>
              Open
            </Button>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {resourceHubs.map((resource, index) => (
          <motion.div
            key={resource.title}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.01] p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.05 * index}
          >
            <div className="heading-font inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
              {resource.badge}
            </div>
            <h3 className="heading-font mt-4 text-xl font-semibold text-white">
              {resource.title}
            </h3>
            <p className="mt-3 text-sm text-white/60">{resource.description}</p>
            <Button href={resource.href} variant="secondary" className="mt-6 justify-center" external>
              Enter Workspace
            </Button>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="heading-font text-xs uppercase tracking-[0.3em] text-white/40">
            SOP Library
          </div>
          <div className="mt-6 space-y-4">
            {sops.map((sop) => (
              <a
                key={sop.title}
                href={sop.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-4 transition hover:border-[#ff3131]/60 hover:bg-[#ff3131]/10"
              >
                <div>
                  <p className="heading-font text-sm text-white">{sop.title}</p>
                  <p className="text-xs text-white/50">{sop.updated}</p>
                </div>
                <span className="heading-font text-xs uppercase tracking-[0.25em] text-[#ff3131]">
                  View
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="heading-font text-xs uppercase tracking-[0.3em] text-white/40">
            Tool Stack
          </div>
          <div className="mt-6 space-y-4">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-black/40 px-4 py-4 transition hover:border-[#ff3131]/60 hover:bg-[#ff3131]/10"
              >
                <p className="heading-font text-sm text-white">{tool.name}</p>
                <p className="text-xs text-white/50">{tool.purpose}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
