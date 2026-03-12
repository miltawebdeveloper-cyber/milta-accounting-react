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
question: "What are accounting services for healthcare providers?",
answer:
"Accounting services for healthcare include bookkeeping, payroll, tax planning, financial reporting, budgeting, and compliance support tailored to meet the unique needs of medical professionals and organizations like clinics, hospitals, and pharmacies.",
},
{
question: "Why do healthcare professionals need specialized accountants?",
answer:
"The healthcare industry has complex billing systems, insurance reimbursements, and regulatory requirements. Accountants for medical professionals understand these nuances and help ensure accurate financial reporting, compliance, and profitability.",
},
{
question: "What types of healthcare providers does Milta support?",
answer:
"Milta serves a wide range of healthcare professionals, including dentists, physicians, medical clinics, hospitals and healthcare facilities, and pharmacies. Our team provides personalized accounting services designed to support providers of all sizes.",
},
{
question: "Are you able to assist healthcare professionals with their tax returns?",
answer:
"Absolutely. We specialize in tax returns for healthcare, including Forms 1040, 1120, and 1065. Our experts ensure your practice stays compliant with tax laws and maximizes deductions, especially concerning Medicare and Medicaid reimbursements.",
},
{
question: "How is Milta different from traditional accounting firms?",
answer:
"As a specialized healthcare accounting firm, Milta offers industry-specific expertise, US GAAP-compliant processes, automation, and cost-effective outsourcing. We assign you a dedicated healthcare accountant and provide real-time support in your time zone.",
},
{
question: "Is outsourcing healthcare accounting safe and compliant?",
answer:
"Yes. At Milta, we use secure, encrypted, cloud-based systems and follow HIPAA-compliant processes where applicable. We maintain full transparency while ensuring your financial data is protected and fully compliant with industry standards.",
},
{
question: "Do you assist medical personnel with their payroll processing?",
answer:
"Yes. We offer complete payroll management services tailored for healthcare accounting, ensuring timely, accurate payroll processing while staying compliant with labor and tax laws.",
},
{
question: "How do you help manage cash flow in a medical practice?",
answer:
"Our team monitors your income and expenses to identify gaps, forecast cash flow, and ensure you have sufficient liquidity to cover operational needs. We help you maintain financial stability with precision-focused healthcare accounting tools.",
},
{
question: "Can you integrate with my existing accounting or EHR software?",
answer:
"Yes, we integrate with popular accounting platforms like QuickBooks and Xero, and coordinate data with your electronic health records (EHR) or billing software to ensure seamless operations.",
},
{
question: "How do I get started with Milta's healthcare accounting services?",
answer:
"It’s simple! For a free consultation, get in touch with us through our website or give our support staff a call. We’ll evaluate your company’s needs and assign a dedicated healthcare accountant to get your accounts and compliance in order.",
},
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqHealthcare = () => {
return ( <FAQSection
   faqs={faqs}
   title="Frequently Asked Questions (FAQs) for Healthcare Providers"
   subtitle="Healthcare Accounting & Bookkeeping FAQs"
   bgColor="#f4f8ee"
   maxWidth="900px"
 />
);
};

export default FaqHealthcare;
