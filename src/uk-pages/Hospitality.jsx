// src/App.jsx
import React from "react";
import { Box, Container } from "@mui/material";

import Hero from "../uk-components/Industries/Hospitality/Hero";
import IntroSection from "../uk-components/Industries/Hospitality/IntroSection";
import ServicesSection from "../uk-components/Industries/Hospitality/ServicesSection";
import WhyChoose from "../uk-components/Industries/Hospitality/WhyChoose";
import Offer from "../uk-components/Industries/Hospitality/WhoWeServe";
import Faq from "../uk-components/Industries/Hospitality/Faq";
import Strategies from "../uk-components/Industries/Hospitality/Strategies";

import ContractorsSidebar from "../uk-components/Industries/Hospitality/Sidebar"; // reuse or create UK sidebar
import ContactForm from "../components/common/ContactForm";

import useFullSEO from "../utils/useFullSEO";

function App() {

useFullSEO({
  title: "Ecommerce Accounting Services for UK Businesses",
  description:
    "At Milta, we provide end-to-end ecommerce accounting services and back-office services designed specifically for UK online sellers.",
  keywords:
    "ecommerce accounting services, accounting services for ecommerce, ecommerce bookkeeping services, shopify bookkeeping",
  author: "Milta Accounting",
  canonical: "https://www.miltafs.com/uk/ecommerce-accounting-service/",
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
              maxWidth: { lg: "65%" },
              minWidth: 0,
            }}
          >
            <Box id="overview"><IntroSection /></Box>
            <Box id="services"><ServicesSection /></Box>
           
            <Box id="why"><WhyChoose /></Box>
            <Box id="strategies"><Strategies /></Box>
            
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