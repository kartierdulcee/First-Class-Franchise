import { motion } from "framer-motion";
import Button from "./Button";

const floatingNodes = [
  {
    id: "automation",
    label: "Workflow Sync",
    position: "top-[12%] left-[8%]",
    delay: 0.4,
    duration: 12,
    amplitudeY: 10,
    amplitudeX: 4,
  },
  {
    id: "sales",
    label: "AI Closer",
    position: "top-[18%] right-[12%]",
    delay: 0.8,
    duration: 13,
    amplitudeY: 12,
    amplitudeX: 6,
  },
  {
    id: "reporting",
    label: "Live Dashboard",
    position: "bottom-[18%] left-[4%]",
    delay: 1.2,
    duration: 14,
    amplitudeY: 11,
    amplitudeX: 5,
  },
  {
    id: "growth",
    label: "Growth Engine",
    position: "bottom-[10%] right-[18%]",
    delay: 0.6,
    duration: 12.5,
    amplitudeY: 9,
    amplitudeX: 4,
  },
];

const IconPulse = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white/80"
  >
    <path
      d="M4 17h6l3-9 6 20 3-11h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconRadar = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white/80"
  >
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M16 4v6m0 12v6m12-12h-6M10 16H4m17-7 4-4m-4 18 4 4M11 9 7 5m4 18-4 4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const IconNodes = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white/80"
  >
    <path
      d="M16 5v6m0 4v12m0-12h12M16 15H4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="16" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16" cy="27" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="27" cy="15" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="5" cy="15" r="3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconSpark = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white/80"
  >
    <path
      d="M16 3v6m0 14v6m10-16h-6M12 13H6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M16 12c1.8-1.8 4.2-3 7-3 0 2.8-1.2 5.2-3 7 1.8 1.8 3 4.2 3 7-2.8 0-5.2-1.2-7-3-1.8 1.8-4.2 3-7 3 0-2.8 1.2-5.2 3-7-1.8-1.8-3-4.2-3-7 2.8 0 5.2 1.2 7 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconMap = {
  automation: <IconNodes />,
  sales: <IconPulse />,
  reporting: <IconRadar />,
  growth: <IconSpark />,
};

export default function Hero({ id = "hero", ...props }) {
  return (
    <section id={id} className="relative overflow-hidden" {...props}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#070707]" />
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,49,49,0.25), transparent 55%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -left-48 top-52 h-80 w-80 rounded-full bg-[#ff3131]/30 blur-[160px]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute -right-48 top-24 h-96 w-96 rounded-full bg-white/10 blur-[180px]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-28 md:px-12 md:pb-36 md:pt-40 lg:flex-row lg:items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="heading-font inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
            Elite Automation Partner
          </span>
          <h1 className="heading-font mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Scale your business without hiring — powered by digital employees
            that work 24/7.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            First Class builds automated systems, AI agents, and growth engines
            that save time, cut costs, and multiply revenue. Luxury-grade
            execution for founders who demand results.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="https://calendly.com/firstclassfranchise/ai-booking-demo" external>
              Book a Free Audit Call
            </Button>
            <Button href="#process" variant="secondary">
              See How It Works
            </Button>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="https://firstclassfranchise.typeform.com/qualify"
              variant="secondary"
              className="sm:min-w-[220px] justify-center border-[#ff3131]/60 text-white hover:bg-[#ff3131]/10"
              external
            >
              See If You Qualify
            </Button>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Under 2 minutes to complete
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.4em] text-white/40">
            <span>Automations</span>
            <span>AI Employees</span>
            <span>Lead Systems</span>
          </div>
        </motion.div>

        <motion.div
          className="relative flex w-full max-w-lg flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur xl:max-w-lg">
            <div className="heading-font text-sm uppercase tracking-[0.35em] text-white/40">
              Flight Plan
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/80">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-white/50">Marketing</p>
                <p className="heading-font mt-1 text-2xl font-semibold text-white">
                  +230%
                </p>
                <p className="text-xs text-white/50">Booked calls in 30 days</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-white/50">Sales</p>
                <p className="heading-font mt-1 text-2xl font-semibold text-white">
                  4.7x
                </p>
                <p className="text-xs text-white/50">Pipeline velocity lift</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-white/50">Operational Cost</p>
                <p className="heading-font mt-1 text-2xl font-semibold text-white">
                  -42%
                </p>
                <p className="text-xs text-white/50">Time saved per client</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-xs text-white/50">Support</p>
                <p className="heading-font mt-1 text-2xl font-semibold text-white">
                  24/7
                </p>
                <p className="text-xs text-white/50">AI agents on standby</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {floatingNodes.map((node) => (
        <motion.div
          key={node.id}
          className={`pointer-events-none absolute hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur will-change-transform md:flex ${node.position}`}
          initial={{ opacity: 0, y: 10, x: 0 }}
          animate={{ opacity: 0.9, y: -node.amplitudeY, x: node.amplitudeX }}
          transition={{
            delay: node.delay,
            duration: node.duration,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.6,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06]">
            {iconMap[node.id]}
          </span>
          <span className="heading-font text-xs tracking-wide text-white">
            {node.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
