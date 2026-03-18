import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

import HeroBook from "../components/servicesComp/bookKeeping/HeroBook";
import TopNotch from "../components/servicesComp/bookKeeping/TopNotch";
import BusinessNeedIt from "../components/servicesComp/bookKeeping/BusinessNeedIt";
import WhyChooseMiltaBookkeeping from "../components/servicesComp/bookKeeping/WhyChooseMiltaBookkeeping";
import OurSolutions from "../components/servicesComp/bookKeeping/OurSolutions";
import WaveDivider from "../components/homeComp/WaveDivider";
import FaqSer1 from "../components/servicesComp/bookKeeping/FaqSer1";

import useFullSEO from "../utils/useFullSEO";

function App() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What type of bookkeeping services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide a wide range of bookkeeping services including bank and credit card reconciliation, accounts receivable and payable management, payroll processing, invoice generation, financial reporting, and tax preparation support. Our services are tailored for small businesses in the USA."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer payroll and bookkeeping services together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive payroll and bookkeeping services in the USA, ensuring accurate payroll processing while keeping your financial records organized and up to date."
        }
      },
      {
        "@type": "Question",
        name: "What industries do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with multiple industries including retail, hospitality, professional services, e-commerce, and more. Our bookkeeping solutions are customized to suit each business type."
        }
      },
      {
        "@type": "Question",
        name: "How do you ensure data security?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use secure systems, encrypted platforms, and industry best practices to protect your financial data. All information is handled with strict confidentiality and care."
        }
      }
    ]
  };


  useFullSEO({
    // MAIN SEO
    title: "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes",
    description:
      "We create customized bookkeeping solutions for small and growing businesses in the USA. Speak with our bookkeeping pros and get a free consultation today.",
    keywords:
      "bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, payroll and bookkeeping services, bookkeeping company in the usa",
    author: "Milta Accounting",
    canonical: "https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/",
    ogTitle: "Advanced Bookkeeping Services in the USA | Free Bookkeeping Quotes",
    ogDescription: "We create customized bookkeeping solutions for small and growing businesses in the USA. Speak with our bookkeeping pros and get a free consultation today.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/services/bookkeeping-company-in-the-usa/",
    schema: faqSchema,

  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroBook />
        <TopNotch />
        <OurSolutions />
        <BusinessNeedIt />
        <WaveDivider />
        <WhyChooseMiltaBookkeeping />
        <FaqSer1 />
      </main>
    </ThemeProvider>
  );
}

export default App;
