import React, { useState, useEffect } from "react";   // <-- FIXED HERE
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import Header from "../components/common/Header";
import Hero from "../components/homeComp/Hero";
import ServicesCarousel from "../components/homeComp/ServicesCarousel";
import Faq from "../components/homeComp/FAQSection";
import Whoweare from "../components/homeComp/Whoweare";
import HowWillBeHelp from "../components/homeComp/HowWillBeHelp";
import Absection from "../components/homeComp/Absection";
import Service from "../components/homeComp/Service";
import Certification from "../components/homeComp/Certifications";
import AreasWeServe from "../components/common/AreasWeServe";
import IndustriesWeServe from "../components/common/IndustriesWeServe";
import ToolsSection from "../components/homeComp/ToolsSection";
import Strengths from "../components/homeComp/Strengths";
import AccProf from "../components/homeComp/AccProf";
import useFullSEO from "../utils/useFullSEO";
import HowWeWork from "../components/homeComp/HowWeWork";

function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What Services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide bookkeeping, payroll management, tax planning & preparation, CPA services, virtual assistance, data entry solutions, and controller services for U.S. businesses."
        }
      },
      {
        "@type": "Question",
        name: "How do I get started with your services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply schedule a consultation with us. Our team will understand your needs and set up a customized plan for smooth onboarding."
        }
      },
      {
        "@type": "Question",
        name: "How do you ensure data security and confidentiality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow strict U.S. security standards, encrypted systems, and NDA-compliant processes to protect sensitive data at every step."
        }
      },
      {
        "@type": "Question",
        name: "What Accounting software do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with leading tools such as QuickBooks, Xero, Sage, Wave, Zoho Books, and other U.S.-based accounting platforms."
        }
      }
    ]
  };

  useFullSEO({
    title: "Exceptional Accounting Outsourcing Services for Small Businesses USA.",
    description:
      "We provide outsourced accounting services for Small Businesses that will help you keep a complete record of all the expenses and the cash flow",
    keywords:
      "business outsourcing services, accounting services for small business, finance and accounting outsourcing, outsource accounting services.",
    author: "Milta Accounting",
    canonical: "https://miltafs.com/",
    ogTitle: "Exceptional Accounting Outsourcing Services for Small Businesses USA.",
    ogDescription: "We provide outsourced accounting services for Small Businesses that will help you keep a complete record of all the expenses and the cash flow",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://miltafs.com/",
    schema: faqSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Hero />
        <Service />
        <Absection />
        <Whoweare />
        <HowWillBeHelp />
        <Certification />
        <AreasWeServe />
        <IndustriesWeServe />
        <ToolsSection />

        <Strengths />
        <AccProf />
        <Faq />

      </main>
    </ThemeProvider>
  );
}

export default App;
