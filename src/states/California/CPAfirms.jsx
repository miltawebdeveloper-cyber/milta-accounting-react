import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";
const sectionBg = "#f6f8f3";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "radial-gradient(circle at top, #0f3f2f 0%, #071f18 70%)",
        color: white,
        py: { xs: 7, sm: 9, md: 11 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={2}
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          California CPA Services for{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Growing Small Businesses
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
          color="#ffffff"
        >
          Professional CPA services in California helping small businesses manage
          accounting, tax compliance, and financial growth with confidence.
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 700,
            borderRadius: 30,
            fontSize: "1rem",
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": {
              bgcolor: "#ffa726",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Schedule a Free Consultation
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={900} mx="auto">
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHTS ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
      gap: 3,
      mt: 2,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          p: 3.5,
          bgcolor: softOrange,
          borderRadius: 3,
          border: `1px solid ${hoverOrange}`,
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= SERVICES ================= */
const CPAServices = () => {
  const services = [
    {
      title: "Accounting & Bookkeeping Services",
      desc: "Accurate financial records, reconciliations, payroll processing, and financial statement preparation.",
    },
    {
      title: "Tax Planning & Preparation",
      desc: "Corporate, individual, payroll, and sales tax filings with proactive tax-saving strategies.",
    },
    {
      title: "Catch-Up & Clean-Up Accounting",
      desc: "Correcting backlogs, reconciling discrepancies, and restoring financial order.",
    },
    {
      title: "Accounting Software Setup & Conversion",
      desc: "QuickBooks and Xero setup, training, and seamless cloud migrations.",
    },
    {
      title: "Financial Consulting & Advisory",
      desc: "Budgeting, forecasting, cash flow optimization, and strategic growth consulting.",
    },
    {
      title: "Audit & Assurance Services",
      desc: "Audits, reviews, compilations, and risk assessments performed by US CPAs.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        py: { xs: 7, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Our CPA Services in California
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <Typography fontWeight={700} mb={2} color={primaryGreen}>
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ ================= */
const FAQSection = () => {
  const faqs = [
    {
      q: "Why should I outsource CPA services?",
      a: "Outsourcing reduces operational costs, improves efficiency, and provides access to specialized CPA expertise.",
    },
    {
      q: "Are you experienced with US tax regulations?",
      a: "Yes, our team is well-versed in US accounting standards, IRS regulations, and compliance requirements.",
    },
    {
      q: "What accounting software do you support?",
      a: "We support QuickBooks, Xero, Lacerte, Drake, Tax Slayer, TurboTax, and more.",
    },
    {
      q: "Do you offer financial consulting services?",
      a: "Yes, we provide budgeting, forecasting, cash flow management, and business growth consulting.",
    },
    {
      q: "Can you support CPA firms in California?",
      a: "Absolutely. We provide back-office support, tax prep assistance, reconciliations, and audit preparation.",
    },
  ];

  return (
    <Box sx={{ py: 9, bgcolor: sectionBg }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={5}
          textAlign="center"
          color={primaryGreen}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((item, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2,
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
            >
              <Typography fontWeight={700}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

/* ================= PAGE ================= */
export default function CPAServicesCalifornia() {
  useFullSEO({
    title: "California CPA Services for Growing Small Businesses",
    description:
      "Professional CPA services in California helping small businesses manage accounting, compliance, and financial growth with confidence.",
    keywords:
      "cpa services in california, cpa firms near me, accounting services for small business, certified public accountant near me",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/cpa-services-in-california/",
  });

  const highlights = [
    "Local California CPA Expertise",
    "Scalable & Cost-Efficient Services",
    "Tax Compliance & Accuracy",
    "Tech-Driven Financial Insights",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Top-Rated CPA Firm in California for Your Business Needs">
        <Typography mb={3}>
          Milta is a trusted CPA firm in California delivering customized
          accounting and tax services for small businesses and CPA firms.
        </Typography>
        <Typography>
          Our certified public accountants focus on precision, compliance, and
          long-term financial growth.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Why Partner with Milta for CPA Services?">
        <Typography mb={4}>
          Outsource your CPA services to reduce overhead, increase efficiency,
          and gain access to experienced professionals.
        </Typography>
        <HighlightBoxes boxes={highlights} />
      </Section>

      <CPAServices />

      <FAQSection />
    </>
  );
}
