// src/components/servicesComp/financialController/FaqFinancialController.jsx
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

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Box sx={{ py: 3, backgroundColor: bgColor }}>
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
              <Typography sx={{ textAlign: "left" }}>{faq.question}</Typography>
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

// -------------------------- //
//     UPDATED FAQ DATA       //
// -------------------------- //
const faqs = [
  {
    question: "What is a Financial Controller?",
    answer:
      "A financial controller is in charge of the accounting department of your business, guaranteeing compliance, accurate financial reporting, and strategic financial management.",
  },
  {
    question: "Why should I outsource Financial Controller Services?",
    answer:
      "Outsourcing provides access to experienced professionals without the cost of a full-time hire, helping you save money while maintaining high-quality financial oversight.",
  },
  {
    question: "What types of businesses benefit from Financial Controller Services?",
    answer:
      "Small and medium-sized businesses, startups, and growing companies that need expert financial management but are not ready for a full-time hire can greatly benefit.",
  },
  {
    question: "What services does a Financial Controller provide?",
    answer:
      "A Financial Controller manages accounting operations, prepares budgets, analyzes reports, ensures compliance, oversees cash flow, and assists with audits.",
  },
  {
    question: "How can outsourced Financial Controller Services help my business?",
    answer:
      "These services streamline your financial processes, enhance compliance, improve cash flow management, and provide insights for strategic decision-making.",
  },
  {
    question: "How does Miltafs customize Financial Controller Services to my business?",
    answer:
      "Miltafs customizes its services to match your business size, industry, and specific financial goals, ensuring personalized solutions that meet your needs.",
  },
  {
    question: "What’s the difference between a Financial Controller and a CFO?",
    answer:
      "A Financial Controller focuses on accounting and financial management, while a CFO develops long-term financial strategies and oversees the company’s overall financial health.",
  },
  {
    question: "Can a Financial Controller help with audits?",
    answer:
      "Yes, Financial Controllers assist with audit preparation by organizing documentation, ensuring compliance, and providing support throughout the audit process.",
  },
  {
    question: "How often will I receive financial reports?",
    answer:
      "Miltafs provides regular financial reports, including monthly, quarterly, and annual updates, depending on your business requirements.",
  },
  {
    question: "Is outsourcing a cost-effective solution for Financial Controller Services?",
    answer:
      "Of course! At a fraction of the price of employing a controller on a full-time basis, outsourcing gives you access to elite experience.",
  },
  {
    question: "Can Miltafs handle compliance with federal and state regulations?",
    answer:
      "Yes, Miltafs ensures that all financial reporting complies with federal and state regulations, minimizing risks and penalties.",
  },
  {
    question: "How do I get started with Miltafs Financial Controller Services?",
    answer:
      "Contact Miltafs today for a free consultation to assess your needs and discuss customized solutions for your business.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqFinancialController = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="FAQs for Financial Controller Services"
      subtitle="Financial Controller FAQs"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqFinancialController;
