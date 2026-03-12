// src/components/servicesComp/virtualAssistant/FaqVirtualAssistant.jsx
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
              <Typography sx={{ textAlign: "left" }}>{faq.question}</Typography>
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
    question: "What distinguishes a typical employee from a virtual assistant?",
    answer:
      "A virtual assistant works remotely and provides services on a flexible or part-time basis, unlike traditional employees who require physical office space and full-time salaries.",
  },
  {
    question: "Can virtual assistants handle confidential data?",
    answer:
      "Yes, our virtual assistants follow strict security measures to ensure the confidentiality of your business data.",
  },
  {
    question: "Are virtual assistant services affordable for small businesses?",
    answer:
      "Absolutely! Our services are cost-effective, offering professional support without the high expenses associated with full-time employees.",
  },
  {
    question: "How can I contact my virtual assistant?",
    answer:
      "We provide multiple communication channels, including email, video calls, and project management tools, ensuring seamless interaction.",
  },
  {
    question:
      "Can I customize the tasks assigned to my virtual assistant services in the USA?",
    answer:
      "Yes, our services are entirely customizable to suit your specific business needs and priorities.",
  },
];

// -------------------------- //
//   EXPORT DEFAULT COMPONENT //
// -------------------------- //
const FaqVirtualAssistant = () => {
  return (
    <FAQSection
      faqs={faqs}
      title="Frequently Asked Questions"
      subtitle="Virtual Assistant FAQs"
      bgColor="#f4f8ee"
      maxWidth="900px"
    />
  );
};

export default FaqVirtualAssistant;
