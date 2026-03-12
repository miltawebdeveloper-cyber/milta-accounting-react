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
title = "Frequently Asked Questions for Retail Industries",
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
{title} </Typography>
)}

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
question: "Are tax returns for retail firms your area of expertise?",
answer:
"Yes, we specialize in preparing accurate tax returns for retail businesses of all sizes. Our team understands the unique tax challenges retailers face and ensures full compliance with federal and state tax laws.",
},
{
question: "What’s included in your retail tax preparation services?",
answer:
"Our services include accurate tax return filing, year-end financial reporting, deduction optimization, and strategic planning to minimize future tax liability.",
},
{
question: "How do you ensure accuracy in year-end reports for retailers?",
answer:
"We use industry-standard accounting tools to reconcile income, expenses, inventory, and payroll, providing a complete and compliant year-end report customized to your retail operations.",
},
{
question:
"Can you help with quarterly estimated tax payments for my retail business?",
answer:
"Absolutely. We assist retail business owners in calculating and submitting quarterly estimated tax payments to help avoid penalties and manage cash flow effectively.",
},
{
question: "How early should I start planning taxes for my retail business?",
answer:
"Ideally, tax planning should be a year-round process. Starting early allows us to identify tax-saving opportunities and prepare accurate year-end financials for a stress-free tax season.",
},
];

export default function RetailFAQ() {
return <FAQSection faqs={faqs} />;
}
