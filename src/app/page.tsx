import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import MonitorViewTrace from "@/components/landing/MonitorViewTrace";
import CloudPanelScreenshots from "@/components/landing/CloudPanelScreenshots";
import QueryCTA from "@/components/landing/QueryCTA";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import AboutStatsSection from "@/components/landing/AboutStatsSection";
import ImpactSection from "@/components/landing/ImpactSection";

// TODO: Extract and convert the JSON-LD schema from the original index.html
// The original schema was:
// {"@context":"https://schema.org","@graph":[{"@type":["Person","Organization"],"@id":"https://endetect.com/#person","name":"Endetect"},{"@type":"WebSite","@id":"https://endetect.com/#website","url":"https://endetect.com","name":"Endetect","publisher":{"@id":"https://endetect.com/#person"},"inLanguage":"en-US","potentialAction":{"@type":"SearchAction","target":"https://endetect.com/?s={search_term_string}","query-input":"required name=search_term_string"}},{"@type":"ImageObject","@id":"https://endetect.com/wp-content/uploads/2020/04/internet.gif","url":"https://endetect.com/wp-content/uploads/2020/04/internet.gif","width":"200","height":"200","inLanguage":"en-US"},{"@type":"WebPage","@id":"https://endetect.com/#webpage","url":"https://endetect.com/","name":"EnDetect : Employee Monitoring and Productivity Tracking Software for Productive Teams","datePublished":"2017-08-01T10:27:45+00:00","dateModified":"2025-04-28T06:51:56+00:00","about":{"@id":"https://endetect.com/#person"},"isPartOf":{"@id":"https://endetect.com/#website"},"primaryImageOfPage":{"@id":"https://endetect.com/wp-content/uploads/2020/04/internet.gif"},"inLanguage":"en-US"},{"@type":"Person","@id":"https://endetect.com/author/endetect_0101/","name":"EnDetect","url":"https://endetect.com/author/endetect_0101/","image":{"@type":"ImageObject","@id":"https://secure.gravatar.com/avatar/0c8962ffa0f7f0176f5b6959ca2d654069313e12b0fe1e63f4a8db31c84f7b52?s=96&d=mm&r=g","url":"https://secure.gravatar.com/avatar/0c8962ffa0f7f0176f5b6959ca2d654069313e12b0fe1e63f4a8db31c84f7b52?s=96&d=mm&r=g","caption":"EnDetect","inLanguage":"en-US"}},{"@type":"Article","headline":"EnDetect : Employee Monitoring and Productivity Tracking Software for Productive Teams","keywords":"Employee Monitoring","datePublished":"2017-08-01T10:27:45+00:00","dateModified":"2025-04-28T06:51:56+00:00","author":{"@id":"https://endetect.com/author/endetect_0101/","name":"EnDetect"},"publisher":{"@id":"https://endetect.com/#person"},"description":"Track Employee with best employee monitoring and productivity tracking software with website history, behavior analysis report, keyboard activity and screenshot etc. Call us at 011-40141053 for Demo.","name":"EnDetect : Employee Monitoring and Productivity Tracking Software for Productive Teams","@id":"https://endetect.com/#richSnippet","isPartOf":{"@id":"https://endetect.com/#webpage"},"image":{"@id":"https://endetect.com/wp-content/uploads/2020/04/internet.gif"},"inLanguage":"en-US","mainEntityOfPage":{"@id":"https://endetect.com/#webpage"}}]}

export const metadata: Metadata = {
  title:
    "EnDetect : Employee Monitoring and Productivity Tracking Software for Productive Teams",
  description:
    "Track Employee with best employee monitoring and productivity tracking software with website history, behavior analysis report, keyboard activity and screenshot etc. Call us at 011-40141053 for Demo.",
  robots:
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title:
      "EnDetect : Employee Monitoring and Productivity Tracking Software for Productive Teams",
    description:
      "Track Employee with best employee monitoring and productivity tracking software with website history, behavior analysis report, keyboard activity and screenshot etc. Call us at 011-40141053 for Demo.",
    url: "https://endetect.com/",
    siteName: "EnDetect",
    images: [
      {
        url: "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
        width: 1200,
        height: 628,
        alt: "EnDetect Employee Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnDetect : Best Employee Activity Monitoring Software",
    description:
      "Employee Activity Monitoring Software - Monitor and track your employee's activity with great features eg : Frequent Screenshots, TIme sheets, Installed Software Report, browse history, social media reports, logs and USB storage access. Ask for a Demo now. Call us at +91-11-40141053.",
    images: [
      "https://pub-868e70c0da584e488cabbf226b5d569e.r2.dev/endetect-og.jpg",
    ],
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      <Hero />
      <FeaturesGrid />
      <MonitorViewTrace />
      <CloudPanelScreenshots />
      <QueryCTA />
      <IntegrationsSection />
      <AboutStatsSection />
     
      <ImpactSection />
    </main>
  );
}
