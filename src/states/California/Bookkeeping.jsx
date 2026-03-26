import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const lightGreen = "#145a43";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${primaryGreen}, ${lightGreen})`,
        color: "#fff",
        py: { xs: 6, sm: 8, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={700} mb={2}>
          Elite Bookkeeping Services for<br></br> Small Businesses in California, USA
        </Typography>

        <Typography mb={3} opacity={0.9} color="#ffffff">
          Need bookkeeping services near me that streamline your finances?  
          We've got you covered.
        </Typography>

        <Button
          sx={{
            px: 4,
            py: 1.3,
            bgcolor: hoverOrange,
            color: "#020000",
            fontWeight: 600,
            borderRadius: 30,
            "&:hover": { bgcolor: "#ffa726" },
          }}
          onClick={() => navigate("/contact")}
        >
          Partner with Us Today
        </Button>
      </Container>
    </Box>
  );
};

/* ================= REUSABLE SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} mb={3} color={primaryGreen}>
        {title}
      </Typography>
      {children}
    </Container>
  </Box>
);

/* ================= FAQ ================= */
const FAQSection = () => (
  <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion key={i} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= PAGE ================= */
export default function Bookkeeping() {
  useFullSEO({
    title: "Bookkeeping Services for Small Businesses in California",
    description:
      "Our California bookkeeping firm provides accurate, reliable bookkeeping services tailored to small businesses for stress-free financial management.",
    keywords:
      "bookkeeping services, bookkeeping services near me, bookkeeping services for small business, best bookkeeping for small business, bookkeeping company in california, bookkeeping services in california",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/best-bookkeeping-services-in-california/",
  });

  const solutions = [
    {
      title: "Bank and Credit Card Reconciliation",
      desc: "We ensure your financial records match your bank and credit card statements, eliminating discrepancies, preventing fraud, and maintaining accurate accounts.",
    },
    {
      title: "Cash Flow, Accounts Receivable & Accounts Payable Management",
      desc: "We manage your cash inflows and outflows, track receivables, and ensure vendors are paid on time for optimal financial health.",
    },
    {
      title: "Invoice Generation & Payment Tracking",
      desc: "Our invoicing system ensures timely billing, payment tracking, and follow-ups to maintain consistent cash flow.",
    },
    {
      title: "Chart of Accounts & Accounting System Setup",
      desc: "We create customized charts of accounts and maintain organized accounting systems for easy access and compliance.",
    },
    {
      title: "Payroll Processing & Tax Compliance",
      desc: "We handle payroll calculations, employee benefits, and tax compliance to ensure accurate and timely payments.",
    },
    {
      title: "Customized Financial Reporting",
      desc: "Weekly, monthly, and yearly reports provide insights into revenue, expenses, and profitability to guide smart decisions.",
    },
    {
      title: "Small Business & Non-Profit Bookkeeping",
      desc: "We offer accounting services for small businesses, nonprofits, and financial clean-up solutions.",
    },
    {
      title: "CPA Collaboration for Tax Preparation",
      desc: "We collaborate with CPAs to streamline year-end tax filings and ensure complete accuracy.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unrivaled Bookkeeping Services for Small Businesses in California">
        <Typography maxWidth="900px" mx="auto" mb={3}>
          Struggling to find bookkeeping services near me that truly elevate your
          business? Milta delivers precision-driven bookkeeping services for
          small businesses, transforming financial data into growth-focused
          insights.
        </Typography>

        <Typography maxWidth="900px" mx="auto" mb={4}>
          As a leading bookkeeping company in California, our certified experts
          ensure seamless transaction tracking, elite reporting, and financial
          clarity that keeps your business agile and ahead.
        </Typography>

        <Button
          sx={{
            px: 4,
            py: 1.3,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 600,
            borderRadius: 30,
            "&:hover": { bgcolor: "#ffa726" },
          }}
           onClick={() => navigate("/contact")}
        >
          Schedule Your Free Consultation
        </Button>
      </Section>

      <Divider />

      <Section title="Why Bookkeeping Services for Small Businesses in California Are Essential">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {[
            "Track income and expenses effectively",
            "Prepare for tax season without last-minute stress",
            "Gain insights into financial performance",
            "Ensure compliance with tax and legal obligations",
          ].map((text, i) => (
            <Box
              key={i}
              sx={{
                width: 300,
                p: 3,
                borderLeft: `5px solid ${primaryGreen}`,
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <Typography fontWeight={600}>{text}</Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Box sx={{ py: 8, bgcolor: sectionBg }}>
        <Container maxWidth="xl">
          <Typography variant="h4" fontWeight={700} mb={4} textAlign="center">
            Comprehensive Bookkeeping & Financial Solutions Customized to Your Needs
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
            {solutions.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: 300,
                  minHeight: 280,
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 3,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                <Typography fontWeight={700} mb={2}>
                  {index + 1}. {item.title}
                </Typography>
                <Typography>{item.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <FAQSection />
    </>
  );
}

/* ================= DATA ================= */
const faqData = [
  {
    q: "What is bookkeeping, and why do I need it?",
    a: "Bookkeeping records, organizes, and manages financial transactions to ensure compliance, accuracy, and informed decision-making.",
  },
  {
    q: "Should I hire a professional bookkeeper?",
    a: "Yes. Professional bookkeeping saves time, ensures accuracy, and keeps your business compliant with U.S. tax laws.",
  },
  {
    q: "Do you offer payroll and bookkeeping together?",
    a: "Yes, we provide complete payroll and bookkeeping services across California.",
  },
  {
    q: "How do I get started?",
    a: "Contact us today to schedule a free consultation with our bookkeeping experts.",
  },
];
