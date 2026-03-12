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
              textAlign: "center",
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
    question:
      "Why is proper bookkeeping so important to manufacturing companies?",
    answer:
      "Accurate bookkeeping helps manufacturing businesses monitor production costs, manage inventory, prepare for taxes, and make informed financial decisions. It ensures every transaction—whether related to raw materials, payroll, or overhead—is recorded and tracked, providing clear visibility into profitability and compliance.",
  },
  {
    question:
      "Can you keep track of raw materials, work in progress (WIP), and finished items inventory?",
    answer:
      "Yes. We provide full inventory tracking for all stages of production—raw materials, work-in-progress, and finished goods. This enables precise inventory valuation and helps reduce waste, avoid stockouts, and maintain accurate cost of goods sold (COGS) reporting.",
  },
  {
    question: "Do you offer job costing and production cost analysis services?",
    answer:
      "Absolutely. Our accounting services include extensive task costing and cost-of-production analysis. We track direct supplies, labor, and overhead for every project or batch, providing you with an accurate picture of real versus planned costs and assisting you in improving efficiency and pricing strategies.",
  },
  {
    question: "How do you manage supplier invoices and outgoing payments?",
    answer:
      "We manage every step of the accounts payable process, including scheduling payments, confirming invoices against purchase orders, recording invoices, and making sure they are paid on time. This prevents late fees and duplicate payments while preserving positive vendor relationships.",
  },
  {
    question:
      "Do you advise manufacturers on tax planning, deductions, and compliance?",
    answer:
      "Yes, we specialize in manufacturing tax planning. We help identify eligible deductions, manage sales and use taxes, and ensure full compliance with federal and state tax regulations. Reducing your tax liability while maintaining compliance is our aim.",
  },
  {
    question: "Can you handle payroll processing for factory and production staff?",
    answer:
      "Yes. We manage payroll specifically tailored for manufacturing environments, including wage calculations, shift differentials, overtime, union rules (if applicable), and benefits. We also ensure timely payroll tax filings and compliance with labor laws.",
  },
  {
    question: "Which accounting software do you recommend for manufacturing businesses?",
    answer:
      "We recommend software tailored for manufacturing, such as QuickBooks Desktop Enterprise, Xero, NetSuite, or Sage 100cloud. These platforms offer advanced capabilities, including production scheduling, job costing, inventory management, and real-time financial reporting.",
  },
  {
    question:
      "Do you track equipment depreciation and maintenance costs accurately?",
    answer:
      "Yes. We maintain detailed fixed asset records, track depreciation schedules, and record maintenance expenses. This helps with capital budgeting, accurate tax deductions, and long-term asset management.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqManufacturing = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Frequently Asked Questions (FAQs) for Manufacturing Businesses"
      subtitle="Answers to common manufacturing accounting queries"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqManufacturing;
