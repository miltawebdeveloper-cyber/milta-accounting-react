import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const NonprofitAccountingDetails = ({
title = "Comprehensive Nonprofit Accounting Services by Milta",
bgColor = "#f9f9f9",
maxWidth = "1000px",
}) => {
const services = [
"Accrual and fund accounting setup",
"Segregated tracking for grants, donations, and contributions",
"Bank reconciliations",
"IRS reporting and nonprofit tax preparation",
"Ongoing compliance and internal audits",
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
mb: 3,
}}
>
{title} </Typography>

    {/* Intro Paragraph */}
    <Typography
      variant="body1"
      sx={{
        color: "text.secondary",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.9,
        mb: 4,
        fontSize: { xs: "15px", md: "16px" },
      }}
    >
      If you’re searching for “nonprofit accountants near me” or “a nonprofit accountant near me,”
      Milta offers a complete suite of services to support your organization’s financial health.
      We provide professional bookkeeping and accounting services tailored to the unique needs
      of nonprofit entities, ensuring accuracy, transparency, and compliance.
    </Typography>

    {/* Services List */}
    <Stack spacing={2.2} sx={{ mb: 4 }}>
      {services.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            color: "text.secondary",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.9,
            fontSize: { xs: "15px", md: "16px" },
          }}
        >
          • {item}
        </Typography>
      ))}
    </Stack>

    {/* Outro Paragraph */}
    <Typography
      variant="body1"
      sx={{
        color: "text.secondary",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.9,
        fontSize: { xs: "15px", md: "16px" },
      }}
    >
      Outsourcing to Milta allows your nonprofit to stay focused on its mission while we manage
      the financial side accurately, professionally, and on time.
    </Typography>
  </Container>
</Box>


);
};

export default NonprofitAccountingDetails;
