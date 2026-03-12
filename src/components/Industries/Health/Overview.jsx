import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const HealthcareAccountingLayout = () => {
return (
<Box
sx={{
py: { xs: 6, md: 5 },
background: "linear-gradient(180deg, #f9f9f9 0%, #f0f8f5 100%)",
display: "flex",
justifyContent: "center",
}}
>
<Container
maxWidth={false}
sx={{
maxWidth: { xs: "95%", sm: "90%", md: "1000px" },
color: "#1d4230",
fontFamily: "'Poppins', sans-serif",
textAlign: "left",
}}
>
{/* Section Title */}
<Typography
variant="h4"
sx={{
fontWeight: 700,
mb: 4,
color: "#1d4230",
textAlign: { xs: "center", md: "left" },
}}
>
Professional Accounting Services for Healthcare – Powered by Milta </Typography>

    {/* Introductory Paragraphs */}
    <Stack spacing={2.5} sx={{ mb: 6 }}>
      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        At Milta, we specialize in delivering reliable, outsourced accounting
        services for healthcare providers across the United States. With over 6 years
        of hands-on experience, our team understands the unique financial demands of
        the healthcare sector. Whether you're running a private practice, managing an
        urgent care clinic, or operating a large hospital, Milta is your trusted
        financial partner, so you can focus on delivering quality patient care.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, color: "#1d4230" }}>
        Who We Serve
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        Milta, one of the leading healthcare accounting companies, works with a
        variety of healthcare providers, including large healthcare groups and
        independent medical practitioners.
      </Typography>
    </Stack>

    {/* Key Elements List */}
    <Stack spacing={3}>
      {[
        {
          title: "Dentists",
          text: "We offer specialized accounting for healthcare professionals in the dental industry, ensuring accurate billing, compliance, and smooth financial operations.",
        },
        {
          title: "Pharmacies",
          text: "Milta provides custom accounting solutions for pharmacies, helping them navigate complex financial processes while boosting profitability and regulatory compliance.",
        },
        {
          title: "Hospitals & Healthcare Facilities",
          text: "We support large healthcare institutions with full-scale financial services, from financial reporting and payroll to insurance claim processing and vendor payments.",
        },
        {
          title: "Medical Practices",
          text: "Whether you manage a small clinic or a multi-specialty practice, our accountants for medical professionals handle all aspects of your bookkeeping and financial reporting.",
        },
      ].map((item, index) => (
        <Box key={index}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "#1d4230",
            }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Container>
</Box>


);
};

export default HealthcareAccountingLayout;
