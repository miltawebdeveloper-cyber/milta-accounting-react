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
const sectionBg = "#faf9f6";

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
          Reliable Data Entry & Management Services in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            California, USA
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
        >
          Harness precision-driven accounting data entry solutions for flawless fiscal tracking, paired with strategic data management services that transform chaos into clarity.
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
          Claim Your Free 30-Min Zoom Discovery Call Now
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

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
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
          textAlign: "center",
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= DATA ENTRY SERVICES ================= */
const DataEntryServices = () => {
  const services = [
    { title: "General Ledger Entry", desc: "We maintain an accurate and thorough general ledger by methodically documenting all of your financial activities." },
    { title: "Accounts Payable and Receivable Data Entry Services", desc: "We manage your billing and payments accurately, streamlining cash flow and improving vendor relationships." },
    { title: "Invoice Data Entry", desc: "Efficient processing of invoices for timely payments and organized record-keeping." },
    { title: "Bank Reconciliation", desc: "We reconcile bank statements with your accounting records to eliminate discrepancies and ensure consistency." },
    { title: "Payroll Data Entry Services", desc: "From salaries to deductions, we ensure your payroll records are precise and compliant." },
    { title: "Expense Report Data Management Service", desc: "For efficient planning and payment, arrange and evaluate business spending." },
    { title: "Financial Statement Preparation", desc: "Prepare accurate financial reports, including balance sheets and profit and loss statements, for better decision-making." },
    { title: "Custom Data Entry Services", desc: "Our flexible solutions cater to your unique business requirements, providing personalized data management support." },
    { title: "QuickBooks Data Entry", desc: "We specialize in QuickBooks integration, managing everything from invoice entry to report generation." },
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
          Our Data Entry Services in California, USA
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
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

/* ================= FAQ SECTION ================= */
const FAQSection = () => {
  const faqs = [
    { q: "What are accounting data entry services?", a: "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis. It’s essential for maintaining up-to-date financial records." },
    { q: "Why should I outsource accounting data entry?", a: "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging the expertise of professionals." },
    { q: "Are your services customized for small businesses?", a: "Yes, our services are specifically designed to meet the needs of small and medium-scale businesses in the USA." },
    { q: "How do you ensure data security?", a: "We use secure data transfer methods, encryption, and confidentiality agreements to protect your sensitive information." },
    { q: "Can you handle customized data entry requests?", a: "Absolutely! We offer customized alternatives to match your specific requirements." },
    { q: "What software do you use for accounting data entry?", a: "We work with leading accounting software like QuickBooks, Xero, and other custom platforms as per your preference." },
    { q: "How quickly can you process my data?", a: "Turnaround time depends on the volume of data, but we pride ourselves on delivering timely and efficient service." },
    { q: "Is your team familiar with US accounting standards?", a: "Yes, our staff is knowledgeable in US accounting rules and concepts." },
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
          Frequently Asked Questions (FAQs)
        </Typography>

        {faqs.map((item, i) => (
          <Accordion
            key={i}
            sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}>
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
export default function DataEntryCalifornia() {
  useFullSEO({
    title: "Reliable Data Entry Services in California, USA | Milta",
    description: "Our California data entry experts streamline processes, ensure data accuracy, protect sensitive information, and support businesses with efficient accounting data management.",
    keywords: "data entry companies, accounting data entry, data entry services, data management services",
    author: "Milta Accounting",
    canonical: "https://miltafs.com/us/services/outsourcing-accounting-data-entry-california/",
  });

  const highlights = [
    "Accurate Data Management",
    "Efficient Accounting Data Entry",
    "Secure & Confidential",
    "Custom Data Solutions",
  ];

  return (
    <>
      <BannerSection />

      <Section title="Who We Are & What We Do">
        <Typography mb={3}>
          As a frontrunner among data entry companies, we deliver accounting data entry expertise laser-focused on the unique needs of U.S. small and midsize businesses. Our mission? To liberate your time and resources through meticulous, error-free data entry services that slash inefficiencies and amplify productivity.
        </Typography>
        <Typography mb={2}>
          Backed by decades of mastery in data management services, our agile team transforms disorganized numbers into audit-ready financial records, ensuring compliance and real-time accuracy. The result? You gain the clarity to steer decisions with unshakable confidence.
        </Typography>
        <Typography>
          From granular data collection and reconciliation to dynamic reporting and custom data management services, our end-to-end solutions are engineered for growing businesses. We lock down security protocols so you can zero in on scaling while we handle the heavy lifting of your mission-critical data. Experience accuracy and efficiency with Milta’s expert-driven accounting data entry solutions.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Our Efficient Accounting Data Entry Process">
        <HighlightBoxes boxes={highlights} />
        <Typography mt={4}>
          We implement a structured workflow trusted by top data entry companies to ensure precise and efficient accounting data entry. This includes data collection, verification, chart of accounts setup, double-entry accounting checks, reconciliation, and financial reporting.
        </Typography>
      </Section>

      <DataEntryServices />

      <FAQSection />
    </>
  );
}
