import Head from "next/head";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const title = "First Class | Elite AI Automation Agency for Service Businesses";
  const description =
    "Scale your service business with luxury-grade AI employees, automations, and growth systems engineered by First Class.";
  const url = "https://firstclass.agency";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${url}/og-image.png`} />
      </Head>
      <div className="bg-black text-white">
        <Navbar />
        <main className="flex flex-col gap-8 md:gap-10">
          <Hero />
          <Logos />
          <Services />
          <Process />
          <CaseStudies />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
