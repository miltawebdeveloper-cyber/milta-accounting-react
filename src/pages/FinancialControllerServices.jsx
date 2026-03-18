// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import FaqSer3 from "../components/servicesComp/financialController/FaqSer3";
import HeroFinance from "../components/servicesComp/financialController/HeroFinance";
import OutSorcedFinancialController from "../components/servicesComp/financialController/OutSorcedFinancialController";
import ControllerVsCFO from "../components/servicesComp/financialController/ControllerVsCFO";
import WhenToChoose from "../components/servicesComp/financialController/WhenToChoose";
import OurFinancialServices from "../components/servicesComp/financialController/OurFinancialServices";
import WhyChooseMiltaController from "../components/servicesComp/financialController/WhyChooseMiltaController";
import Benefits from "../components/servicesComp/financialController/Benefits";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of businesses benefit from Financial Controller Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small and medium-sized businesses, startups, and growing companies that require expert financial oversight but are not ready to hire a full-time financial controller can greatly benefit from these services."
        }
      },
      {
        "@type": "Question",
        name: "What services does a Financial Controller provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Financial Controller oversees accounting operations, prepares and monitors budgets, analyzes financial reports, ensures regulatory compliance, manages cash flow, and supports internal and external audits."
        }
      },
      {
        "@type": "Question",
        name: "How do I get started with Milta Financial Controller Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get started by contacting Milta for a free consultation. Our team will assess your business needs and design a customized financial controller solution tailored to your goals."
        }
      }
    ]
  };


  useFullSEO({
    title:
      "Outsourced Financial Controller Services for SMEs in the USA",
    description:
      "Our Outsourced Financial Controller Services support small and medium businesses with expert reporting, compliance, cash flow, and financial management.",
    keywords:
      "financial controller services in the usa, financial controller services, outsourced financial controller, accounting controller, financial controller services for smes",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/",
    ogTitle: "Outsourced Financial Controller Services for SMEs in the USA",
    ogDescription: "Our Outsourced Financial Controller Services support small and medium businesses with expert reporting, compliance, cash flow, and financial management.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/services/financial-controller-services-in-the-usa/",
    schema: faqSchema,

  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <HeroFinance />
        <OutSorcedFinancialController />
        <OurFinancialServices />
        <ControllerVsCFO />
        <WhenToChoose />
        <Benefits />
        <WhyChooseMiltaController />
        <FaqSer3 />

      </main>
    </ThemeProvider>
  );
}

export default App;
