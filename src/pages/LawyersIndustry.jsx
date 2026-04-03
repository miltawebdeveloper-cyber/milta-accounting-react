// src/App.jsx
import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme";
import Hero from "../components/Industries/lawFirms/Hero";
import IndustriesWeServe from "../components/common/IndustriesWeServe";
import AreasWeServe from "../components/common/AreasWeServe";
import Service from "../components/homeComp/Service";
import ContractorsSidebar from "../components/Industries/lawFirms/ContractorsSidebar";
import Faq from "../components/Industries/lawFirms/Faq";
import Benefits from "../components/Industries/lawFirms/Benefits";
import Advantages from "../components/Industries/lawFirms/Advantages";
import Overview from "../components/Industries/lawFirms/Overview";
import ContactForm from "../components/common/ContactForm";
import useFullSEO from "../utils/useFullSEO";

function App() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do law firms need bookkeeping services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Law firms need specialized bookkeeping to maintain compliance, manage trust accounts, and streamline daily financial operations."
        }
      },
      {
        "@type": "Question",
        name: "Can you track billable hours and client invoicing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we ensure accurate billable time tracking and precise client invoicing for every legal matter."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle trust accounting and escrow management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in trust and escrow accounting, ensuring compliance with legal and regulatory standards."
        }
      },
      {
        "@type": "Question",
        name: "Which accounting program would you suggest for legal firms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We integrate with and recommend accounting platforms such as LEAP, QuickBooks, and Clio, based on your firm’s workflow and compliance needs."
        }
      }
    ]
  };


  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  useFullSEO({
    title: "Bookkeeping And Accounting Services For Law Firms And Lawyers",
    description:
      "Outsourced bookkeeping and accounting services for lawyers and law firms. We handle financial management, billing, reporting, and compliance.",
    keywords:
      "law firm bookkeeping, bookkeeping for lawyers, law firm accounting services, law firm bookkeeping services, bookkeeping services for lawyers, tax planning lawyer, tax planning law firm",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/industry/accounting-services-for-lawfirms/",
    ogTitle: "Bookkeeping And Accounting Services For Law Firms And Lawyers",
    ogDescription: "Outsourced bookkeeping and accounting services for lawyers and law firms. We handle financial management, billing, reporting, and compliance.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/industry/accounting-services-for-lawfirms/",
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
              flexDirection: { xs: "column", lg: "row" },
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
            {/* ===== MOBILE MENU ICON ===== */}
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: { xs: "flex", lg: "none" },
                position: "fixed",
                top: 16,
                left: 16,
                zIndex: 1300,
                bgcolor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <MenuIcon sx={{ color: "#1d4230" }} />
            </IconButton>

            {/* ===== LEFT SIDEBAR (Desktop) ===== */}
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

            {/* ===== MOBILE DRAWER SIDEBAR ===== */}
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={toggleDrawer}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  width: 260,
                  bgcolor: "#f9fafb",
                  p: 2,
                },
              }}
            >
              <ContractorsSidebar /> {/* ✅ FIXED: Replaced BookkeepingSidebar */}
            </Drawer>

            {/* ===== CENTER CONTENT ===== */}
            <Box
              sx={{
                flex: "1 1 80%",
                maxWidth: { lg: "80%" },
                width: "100%",
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
