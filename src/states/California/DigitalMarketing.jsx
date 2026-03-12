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
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";

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
          Premier Digital Marketing Agency in California
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
        >
          Outshine the competition with cutting-edge digital marketing services
          in California.
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
          Request a Proposal
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
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
          },
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
const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      desc:
        "Achieve higher organic rankings and visibility through ethical SEO practices, keyword research, on-page and off-page optimization, and Google Search Console tracking.",
    },
    {
      title: "Technical SEO Service",
      desc:
        "Improve crawlability and indexability with site audits, speed optimization, HTTPS checks, redirect audits, duplicate content removal, structured data, and site migration support.",
    },
    {
      title: "Link Building Service",
      desc:
        "Generate consistent referral traffic and consumer trust using high-authority backlinks through guest blogging, sponsorships, partnerships, infographics, and social engagement.",
    },
    {
      title: "Web Design & Development Services",
      desc:
        "Custom, mobile-ready, SEO-optimized websites with strong visual hierarchy, simplified forms, clear CTAs, and audience-focused content.",
    },
    {
      title: "Social Media Marketing",
      desc:
        "Grow and engage your audience with data-driven campaigns, competitor benchmarking, customer behavior analysis, and paid social advertising.",
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      desc:
        "Precision-driven PPC campaigns managed by certified specialists with optimized bidding, custom ad copy, device targeting, seasonal trends, and ROI tracking.",
    },
    {
      title: "Content Marketing Service",
      desc:
        "High-quality content creation that strengthens SEO with compelling headlines, keyword optimization, relevant visuals, and structured formatting.",
    },
    {
      title: "Email Marketing Service",
      desc:
        "Personalized email campaigns that avoid spam filters, engage subscribers, build trust, and drive conversions using tested messaging strategies.",
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
          Milta Digital Marketing Services in California
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
                transition: "all 0.35s ease",
                "&:hover": { transform: "translateY(-8px)" },
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
const FAQSection = ({ faqData }) => (
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

      {faqData.map((item, i) => (
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

/* ================= PAGE ================= */
export default function DigitalMarketingCalifornia() {
  useFullSEO({
    title: "Results-Driven Digital Marketing Agency in California",
    description:
      "Milta’s California digital marketing experts to boost online visibility, generate quality leads, and drive sustainable business growth.",
    keywords:
      "digital marketing agency, digital marketing services, digital marketing agency in california, california internet marketing, digital marketing services in california",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/best-digital-marketing-agency-in-california/",
  });

  const highlights = [
    "Comprehensive Services",
    "Expert California Marketing Team",
    "Customized Digital Strategies",
    "Data-Driven Decision Making",
    "Proven Track Record",
    "Commitment to Measurable Results",
  ];

  const faqData = [
    {
      q: "How can digital marketing help my California business?",
      a:
        "Digital marketing helps increase visibility, attract quality leads, improve conversions, and drive sustainable business growth using data-driven strategies.",
    },
    {
      q: "What digital marketing services does Milta offer?",
      a:
        "We offer SEO, Technical SEO, Link Building, Web Design, PPC, Social Media Marketing, Content Marketing, and Email Marketing services.",
    },
    {
      q: "Do you work with small and large businesses?",
      a:
        "Yes. We support startups, growing businesses, and enterprise-level companies across California.",
    },
    {
      q: "How do you measure campaign success?",
      a:
        "We track performance using analytics, conversion data, ROI metrics, and continuous optimization to ensure measurable results.",
    },
    {
      q: "How can I get started with Milta?",
      a:
        "Simply request a proposal or contact our team for a consultation to discuss your business goals.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Accelerate Your Brand’s Success with Premier Digital Marketing Services in California">
        <Typography mb={3}>
          At our leading digital marketing agency in California, we deliver
          high-impact digital marketing services tailored to businesses of all
          sizes. Our expertise spans SEO, PPC advertising, and strategic email
          marketing to ensure your brand gains maximum visibility.
        </Typography>

        <Typography>
          With a deep understanding of California internet marketing, our team
          leverages data-driven insights and cutting-edge strategies to attract
          quality traffic, drive conversions, and fuel long-term business growth.
        </Typography>
      </Section>

      {WaveDivider && <WaveDivider />}

      <Section title="Connect with Your Audience at the Perfect Moment – Right Time, Right Platform">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <DigitalMarketingServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
