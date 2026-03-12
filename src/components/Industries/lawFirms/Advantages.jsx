import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const LawFirmBookkeeping = ({
title = "Advantages of Law Firm Bookkeeping Services",
bgColor = "#f9f9f9",
maxWidth = "1000px",
}) => {
const reasons = [
"Expertise in Law Firm Accounting: We understand the legal industry’s accounting requirements inside and out.",
"Customized Services: Every law firm is different, and so is our approach.",
"Software Integration: Seamless syncing with legal tech tools for better efficiency.",
"Affordable Solutions: We offer flexible plans that reduce your overhead costs.",
"Accuracy & Compliance: Stay audit-ready and compliant with every report we deliver.",
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
      Milta is a trusted provider of bookkeeping services for lawyers across the United States.
      We help law firms streamline financial management, maintain compliance, and focus more
      on client advocacy than administrative work.
    </Typography>

    {/* Reasons List */}
    <Stack spacing={2.2}>
      {reasons.map((item, index) => (
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
  </Container>
</Box>


);
};

export default LawFirmBookkeeping;
