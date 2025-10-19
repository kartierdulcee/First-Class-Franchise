import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

function RedirectToAdmin() {
  const router = useRouter();

  useEffect(() => {
    void router.replace("/admin");
  }, [router]);

  return null;
}

export default function TeamLogin() {
  return (
    <>
      <Head>
        <title>First Class Team Login</title>
        <meta
          name="description"
          content="Secure access for First Class team members. Sign in to your headquarters workspace."
        />
      </Head>
      <SignedIn>
        <RedirectToAdmin />
      </SignedIn>
      <SignedOut>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-[#080808] to-[#020202] px-4 py-16">
          <div className="w-full max-w-2xl rounded-[40px] border border-white/10 bg-white/[0.05] p-10 text-white shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
            <div className="heading-font text-lg font-semibold uppercase tracking-[0.32em] text-white/70">
              First Class
            </div>
            <h1 className="heading-font mt-4 text-4xl font-semibold text-white">
              Team Portal Login
            </h1>
            <p className="mt-3 max-w-xl text-base text-white/60">
              Authorized staff only. Use the credentials issued by HQ to access mission control.
            </p>
            <div className="mt-10 rounded-[28px] border border-white/10 bg-black/60 p-8">
              <SignIn
                routing="hash"
                afterSignInUrl="/admin"
                signUpUrl={undefined}
                appearance={{
                  baseTheme: dark,
                  variables: {
                    colorPrimary: "#ff3131",
                    colorBackground: "transparent",
                    colorInputBackground: "rgba(255,255,255,0.04)",
                    colorText: "#f5f5f5",
                    borderRadius: "18px",
                    fontFamily: "var(--font-inter)",
                  },
                  elements: {
                    card: "bg-transparent shadow-none border-0 p-0",
                    headerTitle: "heading-font text-2xl text-white",
                    headerSubtitle: "text-sm text-white/60",
                    formButtonPrimary:
                      "mt-4 rounded-full bg-[#ff3131] py-2 font-semibold text-white transition hover:bg-[#ff4a4a]",
                    socialButtonsBlockButton:
                      "rounded-full border border-white/20 bg-white/10 text-white hover:border-[#ff3131]/70 hover:bg-[#ff3131]/15",
                    dividerLine: "bg-white/10",
                    dividerText: "text-white/50",
                    formFieldLabel: "text-white/60 text-xs uppercase tracking-[0.2em]",
                    formFieldInput:
                      "rounded-xl border border-white/15 bg-black/40 text-white placeholder:text-white/30 focus:border-[#ff3131]",
                    footer: "hidden",
                    footerAction: "hidden",
                    identityPreview: "rounded-xl border border-white/15 bg-black/40",
                    alternativeMethodsBlockToggle:
                      "rounded-full border border-white/20 text-white hover:border-[#ff3131]/70",
                    formFieldWarningText: "text-[#ffb347]",
                    formResendCodeLink: "text-[#ff3131]",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
}
