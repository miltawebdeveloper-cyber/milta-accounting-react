// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import FaqSer4 from "../components/servicesComp/taxPlanning/FaqSer4";
import HeroTax from "../components/servicesComp/taxPlanning/HeroTax";
import TaxPlanningandPreparationServices from "../components/servicesComp/taxPlanning/TaxPlanningandPreparationServices";
import ServiceinUsa from "../components/servicesComp/taxPlanning/ServiceinUsa";
import Benefits from "../components/servicesComp/taxPlanning/Benefits";
import CtaSection from "../components/common/CtaSection";
import FederalTaxForms from "../components/servicesComp/taxPlanning/FederalTaxForms";
import HowMiltaStandsOut from "../components/servicesComp/taxPlanning/HowMiltaStandsOut";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What type of forms do you handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle Form 1040, Form 1065, Form 1120, Form 1120S, and Form 990 for U.S. tax compliance."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with state and city taxes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide complete U.S. tax services for federal, state, and city taxes, ensuring full compliance at all levels."
        }
      }
    ]
  };

  useFullSEO({
    title: "US Expat Tax Service | Federal, State, and City Tax Filing",
    description:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 and more.",
    keywords:
      "us expat tax service, tax planning and preparation services, tax preparation service in the usa, tax planning and preparation services in the usa",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/tax-planning-and-preparation-services-usa/",
   ogTitle: "US Expat Tax Service | Federal, State, and City Tax Filing",
    ogDescription: "Professional US Expat Tax Service for Federal, State, and City Tax Preparation. We specialize in Forms 1040, 1041, 1065, 1120, 1120S, 990 and more.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl:  "https://www.milta.com/us/services/tax-planning-and-preparation-services-usa/",
    schema: faqSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>

        <HeroTax />
        <TaxPlanningandPreparationServices />

        <FederalTaxForms />
        <Benefits />
        <ServiceinUsa />

        <CtaSection />
        <HowMiltaStandsOut />
        <FaqSer4 />
      </main>
    </ThemeProvider>
  );
}

export default App;
