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

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions for Related Services",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleAccordionChange = (panelId) => (_, isExpanded) => {
    setExpandedPanel(isExpanded ? panelId : null);
  };

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

        <Box sx={{ textAlign: "left" }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.question}
              expanded={expandedPanel === `faq-${index}`}
              onChange={handleAccordionChange(`faq-${index}`)}
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
    question: "Do you provide accounting and bookkeeping services remotely across the USA?",
    answer:
      "Yes, we offer businesses all across the US totally remote accounting, bookkeeping, tax, CPA, and virtual assistant services. Using secure cloud-based tools like QuickBooks and Xero, we support clients in multiple states while ensuring full compliance with US accounting standards.",
  },
  {
    question: "Which US states do you currently serve?",
    answer:
      "We currently serve businesses in Florida, Georgia, New York, New Jersey, North Carolina, Connecticut, South Carolina, Maryland, Massachusetts, Ohio, Pennsylvania, and Virginia. Our remote service model also allows us to support businesses operating in additional states upon request.",
  },
  {
    question: "How do you handle state-specific tax and compliance requirements?",
    answer:
      "Our team stays updated with federal and state-level regulations, including sales tax, payroll taxes, and reporting requirements. We tailor our accounting and bookkeeping processes based on each state’s compliance rules to ensure accurate and timely financial management.",
  },
  {
    question: "Is remote bookkeeping secure for US businesses?",
    answer:
      "Yes, remote bookkeeping is highly secure. We use encrypted cloud accounting software, secure document-sharing systems, and strict access controls to protect client data. Our processes are designed to meet US data security and compliance standards.",
  },
];

export default function RetailFAQ() {
  return <FAQSection faqs={faqs} />;
}
