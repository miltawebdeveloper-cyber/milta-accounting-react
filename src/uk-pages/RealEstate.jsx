// src/App.jsx
import React from "react";
import { Box, Container } from "@mui/material";

import Hero from "../uk-components/Industries/RealEstate/Hero";
import IntroSection from "../uk-components/Industries/RealEstate/IntroSection";
import ServicesSection from "../uk-components/Industries/RealEstate/ServicesSection";
import WhyChoose from "../uk-components/Industries/RealEstate/WhyChoose";
import Offer from "../uk-components/Industries/RealEstate/WhoWeServe";
import Faq from "../uk-components/Industries/RealEstate/Faq";

import ContractorsSidebar from "../uk-components/Industries/RealEstate/Sidebar"; // create or reuse sidebar
import ContactForm from "../components/common/ContactForm";

import useFullSEO from "../utils/useFullSEO";

function App() {
useFullSEO({
  title: "Best accounting services for real estate in the UK",
  description:
    "We offer real estate bookkeeping to strategic tax planning and compliance, we understand the complexities of property transactions, rental income tracking, and etc.",
  keywords:
    "real estate accounting services, accounting services for real estate, property management accounting, quickbooks for property management, real estate accountant near me, real estate bookkeeping, real estate accounting, property management bookkeeping",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/uk/accounting-services-for-real-estate/",
});

  return (
    <main>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== 3 COLUMN LAYOUT ===== */}
      <Box component="section" sx={{ py: { xs: 3, md: 5 }, bgcolor: "#fff" }}>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            gap: { xs: 2, sm: 2.5, lg: 3 },
            px: { xs: 2, sm: 3, lg: 4 },
            width: "100%",
            maxWidth: "1900px",
            mx: "auto",
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
              maxWidth: { lg: "70%" },
              minWidth: 0,
            }}
          >
            <Box id="overview"><IntroSection /></Box>
            <Box id="services"><ServicesSection /></Box>
            <Box id="offer"><Offer /></Box>
            <Box id="why"><WhyChoose /></Box>
            <Box id="faq"><Faq /></Box>
          </Box>

          {/* ===== RIGHT CONTACT FORM (Desktop Only) ===== */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: "0 0 15%",
              maxWidth: "15%",
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
  );
}

export default App;