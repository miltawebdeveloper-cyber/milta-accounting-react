// src/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import theme from "../theme";

import Hero from "../components/Industries/Restaurant/Hero";
import ContractorsSidebar from "../components/Industries/Restaurant/ContractorsSidebar";
import Overview from "../components/Industries/Restaurant/Overview";
import Service from "../components/homeComp/Service";
import Advantages from "../components/Industries/Restaurant/Advantages";
import Benefits from "../components/Industries/Restaurant/Benefits";
import Faq from "../components/Industries/Restaurant/Faq";
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
        name: "Do you specialize in tax returns for restaurant businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in preparing accurate tax returns for restaurants, cafés, and food service businesses. We understand the complex tax and regulatory challenges restaurant operators face and help them navigate these requirements with confidence."
        }
      },
      {
        "@type": "Question",
        name: "What’s included in your restaurant tax preparation services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our restaurant tax preparation services include detailed tax return filing, year-end financial reporting, deduction optimization covering tips, payroll, and food costs, as well as proactive tax planning strategies."
        }
      },
      {
        "@type": "Question",
        name: "Can Milta manage quarterly estimated tax payments for restaurant businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We calculate and schedule quarterly estimated tax payments to help restaurants avoid IRS penalties and manage seasonal cash flow more effectively."
        }
      },
      {
        "@type": "Question",
        name: "When should I begin tax planning for my restaurant business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tax planning should begin early and continue throughout the year. This approach allows us to identify deductions, plan around peak seasons, and maintain accurate records for smooth and timely year-end tax filing."
        }
      }
    ]
  };

  useFullSEO({
    title: "Accounting and Bookkeeping for Small Restaurant Business - Milta",
    description:
      "We provide expert accounting and bookkeeping services for small restaurant businesses to help you stay organized, compliant, and profitable.",
    keywords:
      "bookkeeping for small restaurant, accounting for small restaurant business, bookkeeping for restaurant business, bookkeeping for restaurant, restaurant bookkeeping service, tax returns for restaurant",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-restaurant-businesses/",
    ogTitle: "Accounting and Bookkeeping for Small Restaurant Business - Milta",
    ogDescription: "We provide expert accounting and bookkeeping services for small restaurant businesses to help you stay organized, compliant, and profitable.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-restaurant-businesses/",
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
