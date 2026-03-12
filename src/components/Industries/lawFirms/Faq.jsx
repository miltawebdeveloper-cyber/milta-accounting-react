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
{title} </Typography>
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

const faqs = [
{
question: "Why do law firms need bookkeeping services?",
answer:
"Law firms need specialized bookkeeping to maintain compliance, manage trust accounts, and streamline operations. Proper financial management ensures accuracy and supports regulatory requirements.",
},
{
question: "Can you track billable hours and client invoicing?",
answer:
"Yes, we ensure accurate time tracking and invoicing for every matter, helping law firms maintain transparent billing and efficient revenue management.",
},
{
question: "Do you handle trust accounting and escrow management?",
answer:
"Absolutely. We specialize in trust and escrow management aligned with legal standards, ensuring every client fund is properly accounted for and reconciled.",
},
{
question: "How is payroll for employees of legal firms handled?",
answer:
"We oversee all aspects of payroll and benefits administration while maintaining compliance with tax and employment laws specific to the legal industry.",
},
{
question: "Do you help attorneys with their tax planning?",
answer:
"Yes, legal firms can benefit from tailored tax-saving techniques offered by our tax planning experts, helping you minimize liabilities while ensuring compliance.",
},
{
question: "Which accounting program would you suggest for legal firms?",
answer:
"We integrate with and suggest programs like LEAP, QuickBooks, and Clio for seamless management of legal accounting, billing, and trust accounts.",
},
{
question: "Are you able to keep track of case-related costs and payments?",
answer:
"Yes, we make sure that all allowable case-related expenses are appropriately recorded and reported, ensuring clear client billing and accurate financial reporting.",
},
{
question: "Are you in charge of multi-partner legal firms' financial reporting?",
answer:
"For law firms with multiple partners, we offer comprehensive financial reporting, profit-sharing statements, and partner distribution tracking to maintain transparency and accuracy.",
},
];

const FaqLawFirm = () => {
return ( <FAQSection
   faqs={faqs}
   title="Frequently Asked Questions for Law Firms"
   subtitle="Legal Accounting & Bookkeeping FAQs"
   bgColor="#f4f8ee"
   maxWidth="900px"
 />
);
};

export default FaqLawFirm;
