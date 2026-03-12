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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StylishDividerText from "../../homeComp/StylishDividerText";

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle = "Here to help you out",
  maxWidth = "900px",
  bgColor = "#f4f8ee",
}) => {
  const [expanded, setExpanded] = useState(null);

  // Function to format answer with arrows
  const formatAnswer = (answer) => {
    const lines = answer.split("\n").map((line) => line.trim()).filter(Boolean);
    return lines.map((line, idx) => {
      if (line.startsWith("•")) {
        return (
          <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", mb: 0.5 }}>
            <ArrowRightIcon sx={{ fontSize: 18, mr: 1, mt: "2px", color: "#1d4230" }} />
            <Typography
              variant="body2"
              sx={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.6 }}
            >
              {line.replace("•", "")}
            </Typography>
          </Box>
        );
      } else if (line.startsWith("-")) {
        return (
          <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", mb: 0.5, ml: 3 }}>
            <ArrowRightIcon sx={{ fontSize: 16, mr: 1, mt: "2px", color: "#1d4230" }} />
            <Typography
              variant="body2"
              sx={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.6 }}
            >
              {line.replace("-", "")}
            </Typography>
          </Box>
        );
      } else {
        return (
          <Typography
            key={idx}
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.6, mb: 0.5 }}
          >
            {line}
          </Typography>
        );
      }
    });
  };

  return (
    <Box sx={{ py: 3, backgroundColor: bgColor, position: "relative", overflow: "hidden" }}>
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(173, 216, 230, 0.3)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(144, 238, 144, 0.25)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          position: "relative",
          zIndex: 1,
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
              {formatAnswer(faq.answer)}
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
    question: "Can Milta prepare both personal and company tax returns?",
    answer:
      "Absolutely. We specialize in individual and business tax returns, including complex filings for partnerships, corporations, and non-profits.",
  },
  {
    question: "Do you assist with IRS audits?",
    answer:
      "Yes, our team is experienced in handling IRS audits and can provide comprehensive support to resolve any issues.",
  },
  {
    question: "What documents are required for tax preparation?",
    answer: `To ensure accurate and complete tax preparation, you’ll need to provide the following documents:
    
• Personal Information:
  - Social Security numbers and dates of birth for you, your spouse, and dependents
  - Copies of last year’s tax return (optional but helpful)
  - Bank account number and routing number (for direct deposit)
  
• Income Information:
  - W-2 forms for you and your spouse
  - 1099 forms (C, G, MISC, R, S, INT, DIV, B, or K-1) for various income types
  - SSA-1099 for Social Security benefits
  - Alimony received
  - Business or farming income records (profit/loss statement, capital equipment info)
  - Rental property income and expenses (profit/loss statement, suspended loss info)
  - Prior year installment sale info (Forms 6252, principal and interest collected)
  - Miscellaneous income (jury duty, gambling winnings, scholarships, etc.)`,
  },
  {
    question: "Can you help with state and city taxes?",
    answer:
      "Yes, we provide complete US expat tax service for federal, state, and city taxes, ensuring compliance at all levels.",
  },
  {
    question: "Is Milta's service affordable?",
    answer:
      "Yes, we provide competitive pricing while maintaining high quality. We aim to deliver exceptional value to each client.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqTaxPlanning = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="FAQs About Milta Tax Planning and Preparation Services"
      subtitle="Expert Guidance for Every Tax Need"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqTaxPlanning;
