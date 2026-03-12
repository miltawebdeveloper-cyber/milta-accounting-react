// src/components/FaqSection.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const faqs = [
  {
    id: "panel1",
    question: "What does ecommerce accounting include?",
    answer:
      "Ecommerce accounting covers bookkeeping, sales reconciliation, inventory and COGS tracking, payroll, financial reporting, and cash flow management, specifically tailored to online businesses.",
  },
  {
    id: "panel2",
    question: "Do you support Amazon, Shopify, and WooCommerce sellers?",
    answer:
      "Yes. We work with ecommerce sellers on Amazon, Shopify, WooCommerce, and other platforms, integrating all sales data into a single, accurate accounting system.",
  },
  {
    id: "panel3",
    question: "How do you reconcile ecommerce sales and payouts?",
    answer:
      "We match sales orders with payment gateway settlements, platform fees, refunds, and bank deposits to ensure your revenue and cash flow figures are accurate.",
  },
  {
    id: "panel4",
    question: "Can you help with inventory accounting and COGS?",
    answer:
      "Yes. We track stock movements and calculate cost of goods sold (COGS) to give you a clear understanding of profitability and inventory performance.",
  },
  {
    id: "panel5",
    question:
      "Is your service suitable for small and growing ecommerce businesses in the UK?",
    answer:
      "Absolutely. Our ecommerce accounting services are designed to support startups, growing online stores, and established UK ecommerce businesses, scaling as your business grows.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box sx={{ pt: { xs: 8, md: 6 }, pb: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
      {/* CENTERED WRAPPER */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          px: { xs: 2, sm: 4 },
          textAlign: "center",
        }}
      >
        {/* LABEL */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#97ba3a",
            }}
          />
          <Typography fontWeight={600}>
            FAQs – Ecommerce Accounting Services in the UK
          </Typography>
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontFamily: "var(--uk-font-primary)",
            color:"#2b6d2a",
            fontWeight: 700,
            lineHeight: 1.25,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: 24, sm: 30, md: 40 },
          }}
        >
          Frequently Asked Questions
        </Typography>

        {/* ACCORDIONS */}
        <Box sx={{ textAlign: "left" }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                "&::before": { display: "none" },
                borderBottom: "1px solid #000",
              }}
            >
              <AccordionSummary sx={{ px: 0, py: { xs: 1.5, sm: 2 } }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: 14, sm: 15 },
                      lineHeight: 1.6,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "#97ba3a", mr: 1 }}
                    >
                      {`0${index + 1}.`}
                    </Box>
                    {faq.question}
                  </Typography>

                  <ArrowOutwardIcon
                    sx={{
                      fontSize: 18,
                      color:
                        expanded === faq.id
                          ? "#97ba3a"
                          : "#2b6d2a",
                      transform:
                        expanded === faq.id
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                      transition: "0.3s ease",
                      mt: "4px",
                      flexShrink: 0,
                    }}
                  />
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 13.5, sm: 14 },
                    lineHeight: 1.8,
                    maxWidth: 650,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;
