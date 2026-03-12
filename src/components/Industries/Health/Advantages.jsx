import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const HealthcareAccountingAdvantages = ({
  title = "Advantages of Accounting Services for Healthcare Professionals",
  bgColor = "#f9f9f9",
  maxWidth = "1000px",
}) => {
  const advantages = [
    {
      heading: "1. Enhanced Financial Accuracy and Transparency",
      text: "Our specialized accounting services for healthcare providers ensure complete accuracy and transparency in every financial record. From diverse revenue streams—insurance reimbursements, patient payments, and medical grants—to managing complex overhead costs, our expert accountants for medical professionals maintain precise records. This accuracy not only eliminates costly errors but also enhances your financial credibility among stakeholders and investors.",
    },
    {
      heading: "2. Assured Regulatory Compliance",
      text: "The healthcare industry operates under strict compliance standards such as HIPAA, Medicare, Medicaid, and evolving tax laws. Partnering with experienced healthcare accounting firms ensures that every financial transaction and document complies with these regulations. Our services help mitigate risks of fines, penalties, and legal complications while maintaining a strong compliance framework.",
    },
    {
      heading: "3. Improved Cash Flow and Revenue Cycle Management",
      text: "Effective accounting in the healthcare industry involves mastering medical billing, insurance claims, and revenue cycle management. We streamline your billing process, ensure accurate medical coding, and manage claim denials efficiently. This approach enhances reimbursement rates, minimizes revenue leakage, and strengthens your overall cash flow—critical for maintaining smooth daily operations.",
    },
    {
      heading: "4. Enhanced Security and Fraud Prevention",
      text: "We prioritize financial and patient data security. Our accounting services for healthcare include robust internal controls, encrypted data management, and restricted access systems to safeguard sensitive information—helping you prevent fraud and ensure regulatory compliance at all times.",
    },
    {
      heading: "5. Accurate Tax Returns for Healthcare Providers",
      text: "Our experienced accountants also manage tax returns for healthcare organizations and professionals, ensuring maximum deductions, compliance with healthcare-specific tax codes, and timely submissions.",
    },
  ];

  return (
    <Box
      sx={{
          pt: { xs: 0, md:0 },
   pb: { xs: 4, md:6 },
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          textAlign: "left",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#1d4230",
            fontFamily: "'Poppins', sans-serif",
            mb: 4,
          }}
        >
          {title}
        </Typography>

        {/* Advantages List */}
        <Stack spacing={4}>
          {advantages.map((item, index) => (
            <Box key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#2a2a2a",
                  fontFamily: "'Poppins', sans-serif",
                  mb: 1,
                  fontSize: { xs: "17px", md: "18px" },
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.9,
                  fontSize: { xs: "15px", md: "16px" },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HealthcareAccountingAdvantages;
