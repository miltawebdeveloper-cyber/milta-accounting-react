// src/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import theme from "../theme";

import Hero from "../components/Industries/Retail/Hero";
import ContractorsSidebar from "../components/Industries/Retail/ContractorsSidebar";
import Overview from "../components/Industries/Retail/Overview";
import Service from "../components/homeComp/Service";
import Advantages from "../components/Industries/Retail/Advantages";
import Benefits from "../components/Industries/Retail/Benefits";
import Faq from "../components/Industries/Retail/Faq";
import AreasWeServe from "../components/common/AreasWeServe";
import IndustriesWeServe from "../components/common/IndustriesWeServe";
import ContactForm from "../components/common/ContactForm";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are tax returns for retail firms your area of expertise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in preparing accurate tax returns for retail businesses of all sizes. Our team understands the unique tax challenges retailers face and ensures full compliance with federal and state tax regulations."
        }
      },
      {
        "@type": "Question",
        name: "What’s included in your retail tax preparation services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our retail tax preparation services include accurate tax return filing, year-end financial reporting, deduction optimization, and strategic tax planning to help minimize future tax liability."
        }
      },
      {
        "@type": "Question",
        name: "How do you ensure accuracy in year-end reports for retailers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use industry-standard accounting tools to reconcile income, expenses, inventory, and payroll, delivering a complete, accurate, and compliant year-end financial report tailored to your retail operations."
        }
      },
      {
        "@type": "Question",
        name: "How early should I start planning taxes for my retail business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ideally, tax planning should be a year-round process. Starting early allows us to identify tax-saving opportunities in advance and prepare precise year-end financials for a smooth and stress-free tax season."
        }
      }
    ]
  };


  useFullSEO({
    title: "Milta - Accounting services for retail Businesses in the USA",
    description:
      "We offer professional accounting services for retail businesses in the USA, including expense tracking, cash flow monitoring, tax maintenance, and reporting.",
    keywords:
      "bookkeeping for retail, accounting services for retail, retail accounting services, retail accounting, tax returns for retail",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/",
    ogTitle: "Milta - Accounting services for retail Businesses in the USA",
    ogDescription: "We offer professional accounting services for retail businesses in the USA, including expense tracking, cash flow monitoring, tax maintenance, and reporting.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-retail-businesses/",
    schema: faqSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* ===== HERO SECTION ===== */}
        <Hero />

        {/* ===== MAIN SECTION ===== */}
        <Box component="section" sx={{ py: { xs: 3, md: 5 }, bgcolor: "#fff" }}>
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" }, // stack on mobile
              justifyContent: "center",
              alignItems: "flex-start",
              gap: { xs: 2, sm: 2.5, lg: 3 },
              px: { xs: 2, sm: 3, lg: 4 },
              width: "100%",
              maxWidth: "80%",
              mx: "auto",
              position: "relative",
            }}
          >
            {/* ===== LEFT SIDEBAR (Desktop Only) ===== */}
            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                flex: "0 0 20%",
                maxWidth: "20%",
                bgcolor: "#f9fafb",
                borderRadius: 2,
                p: 2.5,
                border: "1px solid #e6e6e6",
                boxShadow: "0 0 8px rgba(0,0,0,0.04)",
                position: "sticky",
                top: 32,
                alignSelf: "flex-start",
                minHeight: "400px",
              }}
            >
              <ContractorsSidebar />
            </Box>

            {/* ===== CENTER CONTENT ===== */}
            <Box
              sx={{
                flex: "1 1 80%",
                width: "100%",
                maxWidth: { lg: "80%" },
                minWidth: 0,
                px: { xs: 0, md: 1 },
              }}
            >
              <Box id="overview"><Overview /></Box>
              <Box id="services"><Service /></Box>
              <Box id="advantages"><Advantages /></Box>
              <Box id="benefits"><Benefits /></Box>
              <Box id="faq"><Faq /></Box>
              <Box id="areas"><AreasWeServe /></Box>
              <Box id="industries"><IndustriesWeServe /></Box>
            </Box>


          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
