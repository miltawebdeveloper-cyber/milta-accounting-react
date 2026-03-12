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
  title = "Frequently Asked Questions for the Real Estate Industry",
  subtitle = "Helping Real Estate Professionals Manage Finances Better",
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
          px: { xs: 2, sm: 4, md: 6 },
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
              mb: 2,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        )}

        {/* Subtitle */}
        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              textAlign: "center",
              mb: 5,
            }}
          >
            {subtitle}
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
      "What makes Milta the right choice for real estate bookkeeping outsourcing?",
    answer:
      "We recognize the unique financial requirements of the real estate business. Whether you're a real estate agent, investor, or property manager, our bookkeeping solutions are built to scale with your business and streamline complex financial processes.",
  },
  {
    question:
      "What are the benefits of outsourcing bookkeeping for my real estate business?",
    answer:
      "Outsourcing to Milta helps you reduce operational costs, save time, and gain access to expert services such as real estate tax planning, property income tracking, and regulatory compliance. You can skip the headache of recruiting and training internal employees.",
  },
  {
    question: "Can I trust Milta with my financial information?",
    answer:
      "Absolutely. We use secure, encrypted, cloud-based systems to protect your data at every stage. Our infrastructure is designed to ensure transparency, reliability, and complete peace of mind.",
  },
  {
    question: "What if I already use different accounting software?",
    answer:
      "Milta works seamlessly with a wide range of accounting platforms like QuickBooks, Xero, Sage, and more. Our team adapts quickly to your existing tools to ensure smooth onboarding and ongoing support.",
  },
  {
    question: "Who can I contact if I need help or have questions?",
    answer:
      "You’ll have a dedicated account manager who is readily available through email, phone, or chat to assist with anything you need, ensuring responsive, personalized support.",
  },
  {
    question:
      "How much does Milta cost for bookkeeping services for Real Estate?",
    answer:
      "Our cost is flexible and customized to your specific business requirements. We provide customized quotes based on the volume, complexity, and nature of your bookkeeping and accounting needs.",
  },
  {
    question: "How does Milta ensure the security of client data?",
    answer:
      "We follow strict data protection protocols, including end-to-end encryption, multi-level access control, and routine audits, to keep your data secure, confidential, and fully compliant with industry standards.",
  },
  {
    question: "Which accounting software platforms do you work with?",
    answer:
      "Milta supports a wide range of industry-leading software, including QuickBooks, Xero, FreshBooks, Wave, and others, making us a trusted partner for various real estate accounting services.",
  },
  {
    question: "How do I get started with a free trial?",
    answer:
      "Getting started is simple. Visit our website or contact us directly to schedule a free consultation or trial, and discover how Milta can transform your real estate financial management.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqRealEstate = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Frequently Asked Questions for the Real Estate Industry"
      subtitle="Your Top Real Estate Bookkeeping Questions Answered"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqRealEstate;
