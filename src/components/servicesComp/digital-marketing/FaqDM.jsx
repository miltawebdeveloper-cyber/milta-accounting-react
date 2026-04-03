import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Grid,
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
  maxWidth = "1100px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(null);

  // Split FAQs into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  return (
    <Box sx={{ py: { xs: 4, sm: 5, md: 6 }, backgroundColor: bgColor }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: maxWidth },
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
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
              mb: { xs: 3, sm: 4, md: 5 },
              textAlign: "center",
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            {title}
          </Typography>
        )}

        {/* Two Column FAQ Layout */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            maxWidth: { md: "1100px" },
            mx: "auto",
          }}
        >
          {/* Left Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              maxWidth: { md: "500px" },
              width: "100%",
              mx: "auto",
            }}
          >
            {leftColumnFaqs.map((faq, index) => (
              <Accordion
                key={`left-${index}`}
                expanded={expanded === `left-panel-${index}`}
                onChange={() => setExpanded(expanded === `left-panel-${index}` ? null : `left-panel-${index}`)}
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
                    padding: { xs: "0 16px", sm: "0 20px" },
                    "& .MuiTypography-root": {
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                      fontWeight: 600,
                    },
                  }}
                >
                  <Typography sx={{ textAlign: "left" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{
                  textAlign: "left",
                  padding: { xs: "8px 16px 16px", sm: "8px 20px 20px" }
                }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.875rem", sm: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Right Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              maxWidth: { md: "550px" },
              width: "100%",
              mx: "auto",
            }}
          >
            {rightColumnFaqs.map((faq, index) => (
              <Accordion
                key={`right-${index}`}
                expanded={expanded === `right-panel-${index}`}
                onChange={() => setExpanded(expanded === `right-panel-${index}` ? null : `right-panel-${index}`)}
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
                    padding: { xs: "0 16px", sm: "0 20px" },
                    "& .MuiTypography-root": {
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                      fontWeight: 600,
                    },
                  }}
                >
                  <Typography sx={{ textAlign: "left" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{
                  textAlign: "left",
                  padding: { xs: "8px 16px 16px", sm: "8px 20px 20px" }
                }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.875rem", sm: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
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
      "SEO (Search Engine Optimization) improves your website's visibility on search engines, increases organic traffic, and strengthens your online presence using proven and modern techniques.",
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
      maxWidth="1200px"
    />
  );
};

export default FaqDataEntry;