// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import HeroData from "../components/servicesComp/dataEntry/HeroData";
import FaqSer2 from "../components/servicesComp/dataEntry/FaqSer2";
import WhoweAre from "../components/servicesComp/dataEntry/WhoweAre";
import OurDataEntryServicesinUSA from "../components/servicesComp/dataEntry/OurDataEntryServicesinUSA";
import BenefitsDataEntry from "../components/servicesComp/dataEntry/BenefitsDataEntry";
import DataEntryServices from "../components/servicesComp/dataEntry/DataEntryServices";
import OurProcess from "../components/servicesComp/dataEntry/OurProcess";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is accounting data entry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accounting data entry involves accurately recording financial transactions such as invoices, expenses, receipts, and payments into accounting systems. It helps maintain organized, up-to-date financial records for reliable reporting and decision-making."
      }
    },
    {
      "@type": "Question",
      name: "Why should I outsource accounting data entry services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing accounting data entry saves time, reduces operational costs, and minimizes errors by leveraging trained professionals and standardized processes."
      }
    },
    {
      "@type": "Question",
      name: "How do you ensure data security and confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow strict data security protocols, including encrypted data transfer, secure systems, access controls, and NDA-compliant processes to protect sensitive financial information."
      }
    },
    {
      "@type": "Question",
      name: "Is your team familiar with U.S. accounting standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our team is experienced in U.S. accounting standards and practices, including GAAP, and works with popular U.S.-based accounting software to ensure accuracy and compliance."
      }
    }
  ]
};


  useFullSEO({
  title: "Outsourcing Accounting Data Entry Services In the USA",
  description:
    "Our professional accounting data entry services improve accuracy, save time, and support the growth of your small business operations.",
  keywords:
    "data entry services in the usa, accounting data entry services, data entry companies, bookkeeping data entry, outsourcing accounting data entry",
  author: "Milta Accounting",
  canonical:
    "https://miltafs.com/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
      schema: faqSchema,

});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <HeroData />
        <WhoweAre/>
        <DataEntryServices/>
       
          <OurDataEntryServicesinUSA/>
           <OurProcess/>
         <BenefitsDataEntry/>
        <FaqSer2/>
      </main>
    </ThemeProvider>
  );
}

export default App;
