// src/App.jsx
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import theme from "../theme";

import IndustriesWeServe from "../components/common/IndustriesWeServe";
import AreasWeServe from "../components/common/AreasWeServe";
import Service from "../components/homeComp/Service";
import Hero from "../components/Industries/RealEstate/Hero";
import ContractorsSidebar from "../components/Industries/RealEstate/ContractorsSidebar";
import Faq from "../components/Industries/RealEstate/Faq";
import Benefits from "../components/Industries/RealEstate/Benefits";
import Advantages from "../components/Industries/RealEstate/Advantages";
import Overview from "../components/Industries/RealEstate/Overview";
import ContactForm from "../components/common/ContactForm";
import useFullSEO from "../utils/useFullSEO";

function App() {

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Milta the right choice for real estate bookkeeping outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recognize the unique financial requirements of the real estate business. Whether you're a real estate agent, investor, or property manager, our bookkeeping solutions are built to scale with your business and streamline complex financial processes."
      }
    },
    {
      "@type": "Question",
      name: "What are the benefits of outsourcing bookkeeping for my real estate business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Outsourcing to Milta helps you reduce operational costs, save time, and gain access to expert services such as real estate tax planning, property income tracking, and regulatory compliance. You can skip the headache of recruiting and training internal employees."
      }
    },
    {
      "@type": "Question",
      name: "Can I trust Milta with my financial information?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We use secure, encrypted, cloud-based systems to protect your data at every stage. Our infrastructure is designed to ensure transparency, reliability, and complete peace of mind."
      }
    },
    {
      "@type": "Question",
      name: "How do I get started with a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is simple. Visit our website or contact us directly to schedule a free consultation or trial, and discover how Milta can transform your real estate financial management."
      }
    }
  ]
};


  useFullSEO({
  title: "Reliable Bookkeeping For Real Estate Companies | Milta",
  description:
    "Milta offers reliable bookkeeping services for real estate businesses. Book a free consultation today and simplify your property financial management.",
  keywords:
    "bookkeeping for real estate, property management bookkeeping, bookkeeping for real estate agents, bookkeeping for real estate investors, property management bookkeeping services, real estate accounting services, real estate tax planning, tax planning for real estate agents, tax planning for property developers, tax planning for real estate developers",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/industry/bookkeeping-for-real-estate-companies/",
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
              maxWidth: "1900px",
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
                flex: "1 1 100%",
                width: "100%",
                maxWidth: { lg: "60%" },
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

            {/* ===== RIGHT COLUMN (Desktop Only) ===== */}
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
                textAlign: "center",
                minHeight: "400px",
              }}
            >
              <Box
                sx={{
                  color: "#1d4230",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  mb: 2,
                  pt: 4,
                }}
              >
                Reach Out Us
              </Box>
              <ContactForm />
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
