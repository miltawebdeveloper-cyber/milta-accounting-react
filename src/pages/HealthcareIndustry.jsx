// src/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import theme from "../theme";

import Hero from "../components/Industries/Health/Hero";
import ContractorsSidebar from "../components/Industries/Health/ContractorsSidebar";
import Overview from "../components/Industries/Health/Overview";
import Service from "../components/homeComp/Service";
import Advantages from "../components/Industries/Health/Advantages";
import Benefits from "../components/Industries/Health/Benefits";
import Faq from "../components/Industries/Health/Faq";
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
        name: "What are accounting services for healthcare providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Accounting services for healthcare include bookkeeping, payroll, tax planning, financial reporting, budgeting, and compliance support tailored to meet the unique needs of medical professionals and organizations such as clinics, hospitals, and pharmacies."
        }
      },
      {
        "@type": "Question",
        name: "What types of healthcare providers does Milta support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Milta serves a wide range of healthcare professionals, including dentists, physicians, medical clinics, hospitals and healthcare facilities, and pharmacies. Our personalized healthcare accounting services are designed to support providers of all sizes."
        }
      },
      {
        "@type": "Question",
        name: "Are you able to assist healthcare professionals with their tax returns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in healthcare tax returns, including Forms 1040, 1120, and 1065. Our experts help ensure compliance with tax regulations while maximizing eligible deductions, including those related to Medicare and Medicaid reimbursements."
        }
      },
      {
        "@type": "Question",
        name: "Is outsourcing healthcare accounting safe and compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. At Milta, we use secure, encrypted, cloud-based systems and follow HIPAA-compliant processes where applicable. We prioritize transparency while ensuring your financial data remains protected and fully compliant with industry standards."
        }
      }
    ]
  };


  useFullSEO({
    title: "We Provide Accounting Services For Healthcare",
    description:
      "Our specialized accounting services for healthcare professionals ensure accurate bookkeeping, tax planning, and financial management for doctors and medical practices.",
    keywords:
      "accounting services for healthcare, healthcare accounting firms, accounting for healthcare professionals, accounting in the healthcare industry, accountants for medical professionals, tax returns for healthcare",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-healthcare/",
    ogTitle: "We Provide Accounting Services For Healthcare",
    ogDescription: "Our specialized accounting services for healthcare professionals ensure accurate bookkeeping, tax planning, and financial management for doctors and medical practices.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-healthcare/",
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
              flexDirection: { xs: "column", lg: "row" }, // stack vertically on mobile
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
                flex: "1 1 100%",
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
