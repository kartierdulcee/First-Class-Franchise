import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Poppins } from "next/font/google";
import ChatbaseWidget from "@/components/ChatbaseWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  const publishableKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_placeholder";

  return (
    <ClerkProvider publishableKey={publishableKey} {...pageProps}>
      <div className={`${inter.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
        <ChatbaseWidget />
      </div>
    </ClerkProvider>
  );
}
