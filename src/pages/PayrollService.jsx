// src/pages/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import HeroBook from "../components/servicesComp/Payroll/HeroBook";
import TopNotch from "../components/servicesComp/Payroll/TopNotch";
import BusinessNeedIt from "../components/servicesComp/Payroll/BusinessNeedIt";
import WhyChooseMiltaBookkeeping from "../components/servicesComp/Payroll/WhyChooseMiltaBookkeeping";
import OurSolutions from "../components/servicesComp/Payroll/OurSolutions";
import WaveDivider from "../components/homeComp/WaveDivider";
import { Title, Meta, Link } from "react-head";
import useFullSEO from "../utils/useFullSEO";
import FAQ from "../components/servicesComp/Payroll/FaqDM";
import PayrollBestPractices from "../components/servicesComp/Payroll/PayrollBestPractices";
import PayrollWorkflow from "../components/servicesComp/Payroll/PayrollWorkflow";


function App() {
   
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "1. What are payroll management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations. These services ensure employees are paid accurately and on time while businesses remain compliant with payroll laws."
      }
    },
    {
      "@type": "Question",
      name: "2. How do payroll management services ensure compliance and accuracy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional payroll management companies use advanced payroll management systems and experienced specialists to calculate wages, manage deductions, file payroll taxes, and follow current labor laws. Automated processes and regular audits help maintain accuracy and compliance."
      }
    },
    {
      "@type": "Question",
      name: "3. Why should businesses outsource payroll management services in the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing payroll management services in the USA helps businesses save time, reduce compliance risks, minimize errors, and protect sensitive employee data. Payroll experts stay updated with changing tax laws and regulations, ensuring accurate filings and timely payments."
      }
    },
    {
      "@type": "Question",
      name: "Is payroll outsourcing suitable for small and growing businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Payroll outsourcing is ideal for small and growing businesses that lack in-house payroll expertise or are expanding their workforce. Payroll management services scale easily with business growth and eliminate the need for costly software and dedicated payroll staff."
      }
    }
  ]
};



  useFullSEO({
  title: "Payroll Management Services in the USA | Milta FS",
  description:
    "Best payroll management services in the USA. Streamline your payroll processes, ensure compliance, and save time with our expert services.",
  keywords:
    "payroll management services, payroll management services in the usa, payroll management company in the usa, a payroll management company in the usa",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/services/best-digital-marketing-agency-in-usa/",
  schema: faqSchema,
});

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <HeroBook />
        <TopNotch />
        <PayrollWorkflow/>
        <OurSolutions />
        <BusinessNeedIt />
        <WaveDivider/>
        <WhyChooseMiltaBookkeeping/>
        <PayrollBestPractices/>
        <FAQ/>
     
      </main>
    </ThemeProvider>
  );
}

export default App;
