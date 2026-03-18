// src/App.jsx
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
} from "@mui/material";
import theme from "../theme";

import Hero from "../components/Industries/Manufacturing/Hero";
import ContractorsSidebar from "../components/Industries/Manufacturing/ContractorsSidebar";
import Overview from "../components/Industries/Manufacturing/Overview";
import Service from "../components/homeComp/Service";
import Advantages from "../components/Industries/Manufacturing/Advantages";
import Benefits from "../components/Industries/Manufacturing/Benefits";
import Faq from "../components/Industries/Manufacturing/Faq";
import AreasWeServe from "../components/common/AreasWeServe";
import IndustriesWeServe from "../components/common/IndustriesWeServe";
import ContactForm from "../components/common/ContactForm";
import useFullSEO from "../utils/useFullSEO";

function App() {
  useFullSEO({
    title: "Bookkeeping For Manufacturing Companies | Milta",
    description:
      "We provide professional accounting and bookkeeping services for manufacturing companies, ensuring accurate financial tracking and full tax compliance.",
    keywords:
      "accounting services for manufacturing, bookkeeping for manufacturing companies, accounting for manufacturing companies, accounting for manufacturing, manufacturing accounting, tax returns for manufacturing, manufacturing tax planning, tax planning for manufacturing",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-manufacturing/",
    ogTitle: "Bookkeeping For Manufacturing Companies | Milta",
    ogDescription: "We provide professional accounting and bookkeeping services for manufacturing companies, ensuring accurate financial tracking and full tax compliance.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-manufacturing/",
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
