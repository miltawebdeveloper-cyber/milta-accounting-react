// src/App.jsx
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";

import theme from "../theme";
import Hero from "../components/Industries/contractors/Hero";
import IndustriesWeServe from "../components/common/IndustriesWeServe";
import AreasWeServe from "../components/common/AreasWeServe";
import Service from "../components/homeComp/Service";
import ContractorsSidebar from "../components/Industries/contractors/ContractorsSidebar";
import Faq from "../components/Industries/contractors/Faq";
import Benefits from "../components/Industries/contractors/Benefits";
import Advantages from "../components/Industries/contractors/Advantages";
import Overview from "../components/Industries/contractors/Overview";
import ContactForm from "../components/common/ContactForm";
import useFullSEO from "../utils/useFullSEO";


function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do welders and contractors need bookkeeping services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Welders and construction professionals manage project-based billing, job costing, and subcontractor payments, making accurate financial tracking essential for staying profitable. Proper bookkeeping for contractors ensures smoother operations, from invoicing to tax filings."
        }
      },
      {
        "@type": "Question",
        name: "Can you manage progress billing and retainage tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide support for progress billing, ensuring accurate invoicing based on work completed. We also handle retainage tracking, helping you maintain healthy cash flow until final payments are released."
        }
      },
      {
        "@type": "Question",
        name: "How do you manage payroll for construction workers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer complete construction payroll services, including calculating union wages, overtime, and handling compliance with federal and state labor laws, giving you peace of mind and accurate pay runs."
        }
      },
      {
        "@type": "Question",
        name: "Can you track equipment depreciation and maintenance costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our bookkeeping services include tracking capital equipment purchases, depreciation schedules, and ongoing maintenance expenses, helping you understand operational costs and manage asset value effectively."
        }
      }
    ]
  };


  useFullSEO({
    title: "Accounting and Bookkeeping Services for Contractor Businesses",
    description:
      "Expert bookkeeping for contractor businesses. Track income, expenses, payroll, and taxes to keep your construction finances accurate and compliant.",
    keywords:
      "bookkeeping for contractors, bookkeeping for construction companies, bookkeeping for small construction business, accounting for construction companies, accounting for construction, construction tax planning, tax planning for contractors",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/bookkeeping-for-contractors-companies/",
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
        {/* ===== HERO SECTION ===== */}
        <Hero />

        <Box component="section" sx={{ py: { xs: 2, md: 2 }, bgcolor: "#fff" }}>
          {/* ===== START CONTAINER ===== */}
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" }, // stack on mobile
              gap: 3,
              mt: 4,
              position: "relative",
            }}
          >
            {/* ===== LEFT SIDEBAR DESKTOP ONLY ===== */}
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
                flex: { xs: "1 1 100%", lg: "1 1 80%" },
                maxWidth: { xs: "100%", lg: "80%" },
                px: { xs: 2, md: 1 },
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
          {/* ===== END CONTAINER ===== */}
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
