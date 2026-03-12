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
    <Box sx={{ py: 2, backgroundColor: bgColor }}>
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
    question: "What is accounting data entry?",
    answer:
      "Accounting data entry involves recording financial transactions into organized systems for accurate reporting and analysis. It’s essential for maintaining up-to-date financial records.",
  },
  {
    question: "Why should I outsource accounting data entry?",
    answer:
      "Outsourcing saves time, reduces costs, and ensures accuracy by leveraging the expertise of professionals.",
  },
  {
    question: "Are your services customized for small businesses?",
    answer:
      "Yes, our services are specifically designed to meet the needs of small and medium-scale businesses in the USA.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We use secure data transfer methods, encryption, and confidentiality agreements to protect your sensitive information.",
  },
  {
    question: "Can you handle customized data entry requests?",
    answer:
      "Absolutely! We offer customized alternatives to match your specific requirements.",
  },
  {
    question: "What software do you use for accounting data entry?",
    answer:
      "We work with leading accounting software like QuickBooks, Xero, and other custom platforms as per your preference.",
  },
  {
    question: "How quickly can you process my data?",
    answer:
      "Turnaround time depends on the volume of data, but we pride ourselves on delivering timely and efficient service.",
  },
  {
    question: "Is your team familiar with US accounting standards?",
    answer:
      "Yes, our staff is knowledgeable in US accounting rules and concepts.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqDataEntry = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Accounting Data Entry FAQs"
      subtitle="Frequently A sked Questions"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqDataEntry;
