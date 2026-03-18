// src/App.jsx
import React from "react";
import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material";
import theme from "../theme";

import Hero from "../components/Industries/NonProfit/Hero";
import ContractorsSidebar from "../components/Industries/NonProfit/ContractorsSidebar";
import Overview from "../components/Industries/NonProfit/Overview";
import Service from "../components/homeComp/Service";
import Advantages from "../components/Industries/NonProfit/Advantages";
import Faq from "../components/Industries/NonProfit/Faq";
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
        name: "Why do nonprofit organizations need bookkeeping services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nonprofits must maintain transparent and accurate financial records to ensure compliance with IRS regulations, attract donors, and manage grants effectively. Reliable nonprofit bookkeeping in the US also supports informed decision-making and long-term sustainability."
        }
      },
      {
        "@type": "Question",
        name: "Which tax returns are required of nonprofits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most nonprofit organizations in the US are required to file IRS Form 990, 990-EZ, or 990-N annually, depending on annual revenue. At Milta, our nonprofit tax preparation experts ensure accurate and timely filings while helping organizations avoid penalties and remain IRS-compliant."
        }
      },
      {
        "@type": "Question",
        name: "How secure is my nonprofit’s financial data with Milta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your data security is our top priority. We use encrypted, cloud-based accounting systems with strict access controls to safeguard all client information, ensuring confidentiality for nonprofits of every size."
        }
      },
      {
        "@type": "Question",
        name: "Can you help with late or missed nonprofit tax filings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your nonprofit has missed required tax filings, our experts can assess your situation, prepare and submit the necessary documents, and help restore your organization’s good standing with the IRS."
        }
      }
    ]
  };



  useFullSEO({
    title: "Best Bookkeeping for Nonprofits in the US",
    description:
      "Milta provides accurate and reliable bookkeeping for nonprofits in the US. Whether you're launching a new nonprofit or managing a growing organization, we support your financial operations.",
    keywords:
      "bookkeeping for nonprofits in the us, nonprofit accountants near me, bookkeeping for nonprofit, bookkeeping for nonprofit organizations in the us, non profit accountant near me, accounting for small nonprofits, tax returns for nonprofit, nonprofit tax preparation, nonprofit tax preparers near me, tax filing for nonprofit corporation, nonprofit corporation tax filing",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-nonprofit-organizations/",
    ogTitle: "Best Bookkeeping for Nonprofits in the US",
    ogDescription: "Milta provides accurate and reliable bookkeeping for nonprofits in the US. Whether you're launching a new nonprofit or managing a growing organization, we support your financial operations.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-nonprofit-organizations/",
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
