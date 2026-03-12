// src/pages/CPAApp.jsx (or App.jsx depending on your structure)
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

import HeroSer1 from "../components/servicesComp/CpaServices/HeroSer1";
import ServiceWeProvide from "../components/servicesComp/CpaServices/ServiceWeProvide";
import ScpaForSmallBusiness from "../components/servicesComp/ScpaForSmallBusiness";
import WhyYouChooseMilta from "../components/servicesComp/WhyYouChooseMilta";
import FaqSer from "../components/servicesComp/FaqSer"; 
import useFullSEO from "../utils/useFullSEO";



function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I outsource CPA services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing CPA services helps reduce operational costs, improves efficiency, and provides access to experienced accounting professionals without the expense of in-house hiring."
      }
    },
    {
      "@type": "Question",
      name: "Is Milta experienced in handling U.S.-based accounting regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Milta’s accounting professionals are well-versed in U.S. tax laws, accounting standards, and regulatory compliance requirements."
      }
    },
    {
      "@type": "Question",
      name: "What accounting software does Milta support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support leading accounting and tax platforms including QuickBooks, Xero, Lacerte, Drake, TaxSlayer, TurboTax, and other widely used U.S. accounting software."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer consulting services for business growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Milta provides financial consulting services focused on business growth, budgeting, forecasting, and profitability analysis."
      }
    }
  ]
};


  useFullSEO({
  title: "The best CPA service for small businesses in the USA | Milta",
  description:
    "We offer the best CPA service for small businesses in the USA as well as accounting firms that support and foster sustainable growth.",
  keywords:
    "cpa services in usa, cpa firms near me, cpa firms in the usa, accounting services for small business, cpa services for small businesses, best cpa service for small businesses in the usa, certified public accountant near me",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
      schema: faqSchema,

});


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero Section */}
        <HeroSer1 />

         {/* CPA for Small Businesses */}
         <ScpaForSmallBusiness />

        {/* CPA Service Overview */}
        <ServiceWeProvide />

        {/* Why Choose Milta */}
        <WhyYouChooseMilta />

        {/* FAQ Section */}
        <FaqSer />
      </main>
    </ThemeProvider>
  );
}

export default App;
