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
          Best Payroll Solutions for Businesses in{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            California
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
        >
          Boost payroll efficiency and manage costs effectively with our
          professional payroll management services in California.
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
          Book a Free 30-Minute Consultation
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
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= PAGE ================= */
export default function PayrollManagementCalifornia() {
  useFullSEO({
    title: "Best Payroll Solutions for Businesses in California | Milta Accounting",
    description:
      "Boost payroll efficiency and manage costs effectively with our professional payroll management services in California. Contact us today!",
    keywords:
      "payroll management services in california, payroll management system, payroll management company, payroll management services, payroll management",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/payroll-services-in-the-california/",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <BannerSection />

      {/* ================= INTRO ================= */}
      <Section title="Payroll Management Services in California">
        <Typography mb={3}>
          Accurate payroll processing is a cornerstone of successful business
          operations, yet it is often one of the most complex and regulation-heavy
          responsibilities. At Milta Accounting, we offer reliable Payroll
          Management Services in California, helping businesses streamline payroll
          workflows, reduce administrative errors, and stay fully compliant with
          federal, state, and local payroll requirements.
        </Typography>

        <Typography>
          As your trusted payroll management partner, we take full ownership of
          the payroll process—carefully managing wage calculations, deductions,
          and tax filings while ensuring every payment and submission is completed
          correctly and on schedule.
        </Typography>
      </Section>

      <WaveDivider />

      {/* ================= WHAT WE HANDLE ================= */}
      <Section
        title="End-to-End Payroll Management You Can Rely On"
        bg={sectionBg}
      >
        <Typography mb={4}>
          Our payroll administration services are designed to deliver a
          technologically advanced and well-organized payroll management
          solution to companies of all sizes. We manage everything from
          timesheets to payroll tax filings, allowing you to focus on business
          growth instead of administrative burdens.
        </Typography>

        <HighlightBoxes
          boxes={[
            "Employee Timesheet Management",
            "Accurate Calculation of Wages & Overtime",
            "Payroll Tax Calculation, Payment & Filing",
            "Payslip Generation & Payroll Reporting",
          ]}
        />
      </Section>

      {/* ================= PAYROLL SYSTEM ================= */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "#f9fbfa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            fontWeight={800}
            mb={6}
            textAlign="center"
            color={primaryGreen}
          >
            How Our Payroll Management System Works
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {[
              {
                step: "01",
                title: "Time & Wage Calculation",
                desc: "Working hours, paid leave, holidays, overtime, non-exempt employee calculations, and gross pay estimation after deductions.",
              },
              {
                step: "02",
                title: "Payroll Processing & Payments",
                desc: "Automated payroll runs, direct deposits or paper checks, and on-time salary disbursement.",
              },
              {
                step: "03",
                title: "Payroll Reporting & Insights",
                desc: "Labor cost analysis, employee headcount tracking, vacation and leave balances, and earning insights.",
              },
              {
                step: "04",
                title: "Payroll Tax Processing & Deductions",
                desc: "Federal, state, and local tax calculation, automated tax payments, voluntary deductions, and wage garnishments.",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: white,
                  border: "1px solid #e6efea",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  display: "flex",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: "50%",
                    bgcolor: "#e9f5ef",
                    color: primaryGreen,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.step}
                </Box>

                <Box>
                  <Typography fontWeight={700} color={primaryGreen}>
                    {item.title}
                  </Typography>
                  <Typography fontSize="0.95rem">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= WHY PAYROLL ================= */}
      <Section
        title="Why Payroll Management Is Essential for US Businesses"
        bg={sectionBg}
      >
        <HighlightBoxes
          boxes={[
            "Employee Satisfaction",
            "Time Efficiency",
            "Data Security",
            "Scalability",
          ]}
        />

        <Typography mt={4}>
          An expert payroll management firm guarantees compliance while keeping
          your business operations running smoothly.
        </Typography>
      </Section>

      {/* ================= FAQ ================= */}
      <Box sx={{ py: 9, bgcolor: sectionBg }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            fontWeight={800}
            mb={5}
            textAlign="center"
            color={primaryGreen}
          >
            Payroll Management FAQs
          </Typography>

          {[
            {
              q: "What are payroll management services?",
              a: "Payroll management services handle salary calculations, tax deductions, payroll processing, pay slip generation, and regulatory compliance.",
            },
            {
              q: "How do payroll services ensure compliance?",
              a: "Payroll experts use advanced systems, audits, and up-to-date tax knowledge to ensure compliance.",
            },
            {
              q: "Why outsource payroll in California?",
              a: "Outsourcing reduces compliance risk, saves time, minimizes errors, and protects sensitive data.",
            },
            {
              q: "Is payroll outsourcing suitable for small businesses?",
              a: "Yes. Payroll outsourcing is ideal for small and growing businesses that need scalable and compliant payroll solutions.",
            },
          ].map((item, i) => (
            <Accordion
              key={i}
              sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
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
    </>
  );
}
