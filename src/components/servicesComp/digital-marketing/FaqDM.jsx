import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StylishDividerText from "../../homeComp/StylishDividerText";

/* =========================
   FAQ SECTION COMPONENT
========================= */
const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box sx={{ py: 2, backgroundColor: bgColor }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Subtitle */}
        {subtitle && (
          <Box sx={{ textAlign: "center", mb: 1 }}>
            <StylishDividerText text={subtitle} />
          </Box>
        )}

        {/* Title */}
        {title && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              mb: 4,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        )}

        {/* FAQ Accordions */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel-${index}`}
            onChange={() => setExpanded(expanded === `panel-${index}` ? null : `panel-${index}`)}
            sx={{
              borderRadius: "12px !important",
              mb: 1.5,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                backgroundColor: "#ffffff",
                borderColor: "#d9f7d9",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#1d4230" }} />}
              sx={{
                fontWeight: 600,
                color: "#1d4230",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "left",
              }}
            >
              <Typography sx={{ textAlign: "left" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

/* =========================
   UPDATED FAQ DATA
========================= */
const faqs = [
  {
    question: "How does Milta create a customized marketing plan?",
    answer:
      "Our first step at Milta is to understand your target market, business goals, and industry dynamics. We then select the most effective platforms and create a tailored digital marketing strategy aligned with your objectives.",
  },
  {
    question: "Can Milta help with website design and development?",
    answer:
      "Yes, we offer professional website design and development services in the USA to ensure your website reflects your brand identity and delivers an exceptional user experience.",
  },
  {
    question: "How does Milta ensure a high return on investment (ROI)?",
    answer:
      "As a leading digital marketing company in the USA, we use data-driven strategies to attract high-quality leads, continuously optimize campaigns, and focus on measurable growth and revenue.",
  },
  {
    question: "How long does it take for digital marketing to show results?",
    answer:
      "Results vary depending on goals and strategies, but many businesses begin seeing measurable improvements within a few months. We focus on sustainable, long-term success.",
  },
  {
    question: "Can Milta help my business stay competitive in a crowded market?",
    answer:
      "Absolutely. Our innovative marketing techniques and customized digital strategies help your business stand out and gain a competitive advantage.",
  },
  {
    question: "What makes Milta different from other digital marketing agencies?",
    answer:
      "Our personalized approach, proven results, client-first mindset, and transparent communication set Milta apart as one of the best digital marketing agencies in the USA.",
  },
  {
    question: "What digital marketing services does Milta offer?",
    answer:
      "Milta provides comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, website design and development, and analytics reporting.",
  },
  {
    question: "What is SEO, and how can it help my business?",
    answer:
      "SEO (Search Engine Optimization) improves your website’s visibility on search engines, increases organic traffic, and strengthens your online presence using proven and modern techniques.",
  },
];

/* =========================
   EXPORT COMPONENT
========================= */
const FaqDataEntry = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Digital Marketing FAQs"
      subtitle="Frequently Asked Questions"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqDataEntry;
