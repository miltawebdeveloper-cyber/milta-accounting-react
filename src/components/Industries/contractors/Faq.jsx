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
    <Box sx={{ py: 8, backgroundColor: bgColor }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          mx: "auto",
          px: { xs: 2, sm: 2, md: 0 },
        }}
      >

        {/* Title */}
        {title && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              mb: 5,
              textAlign: "center", // Centered title
            }}
          >
            {title}
          </Typography>
        )}

        {/* FAQ Accordions */}
        <Box sx={{ textAlign: "left" }}>
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
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.8,
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// -------------------------- //
//     UPDATED FAQ DATA       //
// -------------------------- //
const faqs = [
  {
    question: "Why do welders and contractors need bookkeeping services?",
    answer:
      "Welders and construction professionals manage project-based billing, job costing, and subcontractor payments, making accurate financial tracking essential for staying profitable. Proper bookkeeping for contractors ensures smoother operations, from invoicing to tax filings.",
  },
  {
    question: "Do you handle job costing and project-based accounting?",
    answer:
      "Absolutely. Our accounting for construction companies includes detailed tracking of labor, materials, and overhead costs for each project. This allows you to analyze job profitability and stay within budget, crucial for any small construction business.",
  },
  {
    question: "Can you manage progress billing and retainage tracking?",
    answer:
      "Yes. We provide support for progress billing, ensuring accurate invoicing based on work completed. We also handle retainage tracking, helping you maintain healthy cash flow until final payments are released.",
  },
  {
    question: "How do you manage payroll for construction workers?",
    answer:
      "We offer complete construction payroll services, including calculating union wages, overtime, and handling compliance with federal and state labor laws, giving you peace of mind and accurate pay runs.",
  },
  {
    question: "Can you track equipment depreciation and maintenance costs?",
    answer:
      "Yes. Our bookkeeping services include tracking capital equipment purchases, depreciation schedules, and ongoing maintenance expenses, key to understanding your operational costs and managing asset value.",
  },
  {
    question: "How do you handle materials and inventory tracking?",
    answer:
      "We monitor material purchases, inventory levels, and job usage. With accurate tracking, you can avoid cost overruns and keep your construction bookkeeping streamlined.",
  },
  {
    question: "Do you provide cash flow management for construction businesses?",
    answer:
      "Definitely. We support cash flow forecasting and budget tracking, so your construction company maintains financial stability, even across large or delayed projects.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqBookKeep = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="FAQ for Accounting and Bookkeeping for a Contractor's Company"
      subtitle="Construction & Contractor Bookkeeping FAQs"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqBookKeep;
