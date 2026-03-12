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

// -------------------------- //
//     UPDATED FAQ DATA       //
// -------------------------- //
const faqs = [
{
question: "Why do nonprofit organizations need bookkeeping services?",
answer:
"Nonprofits must maintain transparent and accurate financial records to ensure compliance with IRS regulations, attract donors, and manage grants effectively. Reliable bookkeeping for nonprofit organizations in the US also supports better decision-making and long-term sustainability.",
},
{
question: "What are the key differences between nonprofit and for-profit bookkeeping practices?",
answer:
"While both require accurate tracking of income and expenses, bookkeeping for nonprofit entities focuses on fund accounting, donor restrictions, grant tracking, and tax-exempt compliance. Nonprofits must also prepare specific reports, such as the Statement of Activities and Form 990.",
},
{
question: "Do I need a nonprofit accountant near me, or can I outsource this service?",
answer:
"You don’t need to limit your search to a nonprofit accountant near me—you can outsource to trusted firms like Milta, which specializes in bookkeeping for nonprofits in the US. Our cloud-based systems allow us to serve nonprofits nationwide with real-time access and secure data handling.",
},
{
question: "Which tax returns are required of nonprofits?",
answer:
"Most nonprofit organizations in the US are required to file IRS Form 990, 990-EZ, or 990-N annually, depending on their annual revenue. At Milta, our nonprofit tax preparation experts specialize in accurate and timely tax filing for nonprofit corporations. We help ensure your nonprofit stays compliant with IRS regulations while avoiding late filing penalties.",
},
{
question: "Is Milta equipped to track restricted and unrestricted funding separately?",
answer:
"Yes. We specialize in managing restricted, unrestricted, and temporarily restricted funds. Our nonprofit accounting services ensure that your donations are categorized and reported correctly according to donor intent and IRS rules.",
},
{
question: "What if my nonprofit is small and can't afford a full-time accountant?",
answer:
"That’s exactly where we come in. Milta provides scalable solutions for accounting for small nonprofits, giving you expert support without the cost of hiring in-house staff. It's a smart, budget-friendly way to stay compliant and organized.",
},
{
question: "Is grant and donation tracking included in your service?",
answer:
"Absolutely. Grant and donation tracking is a core part of our bookkeeping for nonprofit services. We ensure funds are used by donor restrictions and provide reports that satisfy grantors and auditors alike.",
},
{
question: "How secure is my nonprofit’s financial data with Milta?",
answer:
"Your data security is our top priority. We use encrypted, cloud-based accounting systems with secure access controls to protect all client information. Whether you're a small nonprofit or a large foundation, your data is safe with Milta.",
},
{
question: "Can you help with late or missed nonprofit tax filings?",
answer:
"Yes. If you’ve missed a nonprofit corporation tax filing, we can help you get back on track. Our experts will assess your situation, file the necessary documents, and help restore your organization's good standing with the IRS.",
},
{
question: "How do I get started with Milta’s nonprofit bookkeeping services?",
answer:
"It’s easy! Whether you’re looking for nonprofit tax preparers near me or need help setting up your nonprofit accounting system from scratch, Milta is here to help.",
},
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqNonprofit = () => {
return ( <FAQSection
   faqs={faqs}
   title="Frequently Asked Questions (FAQs) for Nonprofit Organizations"
   subtitle="Bookkeeping & Accounting for Nonprofits"
   bgColor="#f4f8ee"
   maxWidth="900px"
 />
);
};

export default FaqNonprofit;
