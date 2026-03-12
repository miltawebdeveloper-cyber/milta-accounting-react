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
              <Typography sx={{ textAlign: "left" }}>
                {faq.question}
              </Typography>
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
    question: "What is bookkeeping, and why do I need it for my small business?",
    answer:
      "Bookkeeping involves recording, organizing, and managing your business's financial transactions. It helps you maintain accurate financial records, make informed decisions, and ensure compliance with U.S. tax laws and regulations. Proper bookkeeping is essential for tracking cash flow, preparing for tax season, and growing your business.",
  },
  {
    question: "Can I handle bookkeeping myself, or should I hire a professional?",
    answer:
      "While some small business owners manage their bookkeeping, hiring a professional ensures accuracy and saves time. Professionals are well-versed in U.S. tax laws, payroll management, and financial reporting, giving you peace of mind and allowing you to focus on your business.",
  },
  {
    question: "What types of bookkeeping services do you offer?",
    answer:
      "We provide a wide range of services, including bank and credit card reconciliation, accounts receivable and payable management, payroll processing, invoice generation, financial reporting, and tax preparation support. Our services are tailored to meet the unique needs of small businesses in the USA.",
  },
  {
    question: "How do your bookkeeping services benefit my small business?",
    answer:
      "Our services streamline your financial operations, prevent errors, and help you save time. You’ll gain clear insights into your financial health and ensure compliance with legal requirements, which is crucial for making strategic decisions and achieving business growth.",
  },
  {
    question: "Do you offer payroll and bookkeeping services together?",
    answer:
      "Yes, we provide comprehensive payroll and bookkeeping services in USA, ensuring your employees are paid accurately and on time while keeping your financial records organized and up-to-date.",
  },
  {
    question: "How do I find the best bookkeeping services for small businesses near me?",
    answer:
      "Look for providers with experience, expertise, and a track record of serving small businesses in the USA. Reviews, referrals, and transparency in pricing are also key indicators of a reliable service. We pride ourselves on being one of the best bookkeeping services for small businesses in the USA, offering personalized support to our clients.",
  },
  {
    question: "Is my business too small to hire a bookkeeping company in USA?",
    answer:
      "No business is too small for bookkeeping services. Accurate financial management is especially important for small businesses to monitor cash flow, prepare for taxes, and plan for growth. Our services are designed to be affordable and scalable to meet your needs.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a variety of industries, including retail, hospitality, professional services, e-commerce, and more. No matter your industry, our team tailors our bookkeeping solutions to fit your business.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "To keep your financial information safe, we employ secure systems and adhere to industry best practices. Your information is handled with maximum confidentiality and care.",
  },
  {
    question: "How can I get started with your bookkeeping services in USA?",
    answer:
      "Contact us today to schedule a consultation. Whether you’re searching for bookkeeping services near me or need help managing your payroll, our team is ready to support your small business.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqBookKeep = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Bookkeeping FAQs"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqBookKeep;
