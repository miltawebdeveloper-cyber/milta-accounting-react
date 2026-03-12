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
question: "Do you specialize in tax returns for restaurant businesses?",
answer:
"Yes, we specialize in preparing accurate tax returns for restaurants, cafés, and food service businesses. We understand the complicated tax and regulatory problems that restaurant operators confront, and we are here to assist you in negotiating them.",
},
{
question: "What’s included in your restaurant tax preparation services?",
answer:
"Our services include detailed tax return filing, year-end financial reporting, deduction optimization (including tips, payroll, and food costs), and proactive tax planning strategies.",
},
{
question: "How do you ensure accuracy in year-end reports for restaurants?",
answer:
"We reconcile income, expenses, inventory, vendor payments, and payroll using restaurant-focused accounting tools to deliver precise and IRS-compliant year-end reporting.",
},
{
question:
"Can Milta manage quarterly estimated tax payments for restaurant businesses?",
answer:
"Absolutely. We calculate and schedule estimated quarterly payments to help your restaurant avoid IRS penalties and better manage seasonal cash flow fluctuations.",
},
{
question: "When should I begin tax planning for my restaurant business?",
answer:
"Preparation for taxes should start early and last all year. This allows us to identify deductions, plan around peak seasons, and ensure accurate records for smooth year-end filing.",
},
];

export default function RestaurantFAQ() {
return <FAQSection faqs={faqs} />;
}
