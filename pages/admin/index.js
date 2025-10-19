import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import AdminMissionControl from "@/components/AdminMissionControl";
import AdminCopilot from "@/components/AdminCopilot";

const sidebarItems = [
  { id: "mission", label: "Mission Control", description: "Dashboards, SOPs, resources" },
  { id: "copilot", label: "AI Copilot", description: "Ask our First Class-powered assistant" },
];

const sidebarIndicator = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function AdminHQ() {
  const [activeView, setActiveView] = useState("mission");

  return (
    <>
      <Head>
        <title>First Class HQ | Internal Command Center</title>
        <meta
          name="description"
          content="Secure operations HQ for First Class staff. Access resources, SOPs, and automation tooling."
        />
      </Head>
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-[#080808] to-[#020202] px-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <h1 className="heading-font text-xl font-semibold">First Class HQ</h1>
            <p className="mt-2 text-sm text-white/60">
              Authenticate with your staff credentials to access the headquarters.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4">
              <SignIn
                path="/admin"
                routing="path"
                signUpUrl="https://firstclass.ai/team-access"
                afterSignInUrl="/admin"
                appearance={{
                  elements: {
                    formButtonPrimary:
                      "bg-[#ff3131] text-white rounded-full py-2 font-semibold hover:bg-[#ff4a4a]",
                    card: "bg-transparent shadow-none",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="min-h-screen bg-gradient-to-br from-black via-[#050505] to-[#090909] text-white">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 pb-20 pt-12 lg:flex-row lg:gap-16">
            <aside className="sticky top-10 z-10 flex flex-row gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl lg:h-[calc(100vh-6rem)] lg:w-72 lg:flex-col">
              {sidebarItems.map((item) => {
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveView(item.id)}
                    className={`group relative flex-1 rounded-2xl border border-white/5 px-4 py-4 text-left transition-all duration-300 lg:flex-auto ${
                      isActive
                        ? "border-[#ff3131]/70 bg-[#ff3131]/10 shadow-[0_12px_40px_rgba(255,49,49,0.25)]"
                        : "bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        variants={sidebarIndicator}
                        initial="hidden"
                        animate="visible"
                        className="heading-font mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#ff3131]"
                      >
                        Active
                      </motion.span>
                    ) : (
                      <span className="heading-font mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                        {item.label === "Mission Control" ? "Operations" : "Intelligence"}
                      </span>
                    )}
                    <div className="heading-font text-lg font-semibold text-white">{item.label}</div>
                    <p className="mt-2 text-xs text-white/50">{item.description}</p>
                  </button>
                );
              })}
            </aside>
            <main className="flex-1">
              {activeView === "mission" ? <AdminMissionControl /> : <AdminCopilot />}
            </main>
          </div>
        </div>
      </SignedIn>
    </>
  );
}
