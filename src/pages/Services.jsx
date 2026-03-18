import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

import TwoColumnFeaturesNoImage from "../components/common/TwoColumnFeaturesNoImage";
import SectionTitle from "../components/common/SectionTitle";
import StylishDividerText from "../components/homeComp/StylishDividerText";
import WhyYouChooseMilta from "../components/servicesComp/WhyYouChooseMilta";
import CtaSection from "../components/common/CtaSection";
import FaqSer from "../components/servicesComp/FaqSer";
import ScpaForSmallBusiness from "../components/servicesComp/ScpaForSmallBusiness";
import Heroser from "../components/servicesComp/HeroSer";
import Service from "../components/homeComp/Service";
import CtaSer from "../components/servicesComp/CtaSer";
import Industries from "../components/servicesComp/Industries";
import useFullSEO from "../utils/useFullSEO";

/* ✅ FAQ SCHEMA DEFINED */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Milta offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Milta offers accounting, bookkeeping, tax planning and preparation, financial consulting, audit services, and digital marketing solutions for small businesses."
      }
    },
    {
      "@type": "Question",
      "name": "Does Milta provide services for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, Milta specializes in providing customized accounting, CPA, tax, and financial services specifically for small and growing businesses."
      }
    }
  ]
};

function App() {
  useFullSEO({
    title: "Milta - Our Services You Can Trust to Make Business Easier.",
    description:
      "At Milta, we don’t just provide services, we provide solutions. Our services are customised to meet your specific needs and planned solutions.",
    keywords:
      "bookkeeping services for small business, tax planning and preparation service, cpa services for small business, virtual assistant service, digital marketing services usa, financial controller services, accounting data entry services",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/services",
    ogTitle: "Milta - Our Services You Can Trust to Make Business Easier.",
    ogDescription:"At Milta, we don’t just provide services, we provide solutions. Our services are customised to meet your specific needs and planned solutions.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/services",
    schema: faqSchema, // ✅ ERROR FIXED
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Heroser />
        <Service />
        <CtaSer />
      </main>
    </ThemeProvider>
  );
}

export default App;
