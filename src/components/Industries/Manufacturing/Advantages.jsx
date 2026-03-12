import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ManufacturingAdvantages = ({
title = "Advantages of Choosing Milta for Your Manufacturing Accounting Needs",
bgColor = "#f9f9f9",
maxWidth = "1000px",
}) => {
const advantages = [
"Industry-Focused Expertise: We understand the complexities of manufacturing accounting—from raw material tracking and inventory valuation to job costing and production overheads. Our solutions are tailored to your specific operational needs.",
"Full-Cycle Inventory & Cost Management: From raw materials to finished goods, we ensure real-time visibility into your inventory and cost of goods sold (COGS), helping you make informed pricing and production decisions.",
"Advanced Job Costing and Budgeting: Our detailed job costing reports and accurate forecasts enable you to track profitability, control expenses, and plan confidently for future growth.",
"Manufacturing Tax Expertise: We help identify eligible deductions, maximize tax credits, and ensure compliance with evolving federal and state regulations, keeping your finances optimized.",
"Technology-Driven Solutions: We leverage advanced accounting tools like QuickBooks Desktop Enterprise, Xero, NetSuite, and Sage for cloud-based collaboration, automation, and data security.",
"Dedicated Support & Transparent Reporting: You’ll work with a professional account manager who provides proactive insights, consistent communication, and clear, on-time reporting—no surprises, just measurable results.",
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
      At Milta, we specialize in delivering accurate, efficient, and
      industry-specific accounting and bookkeeping services for manufacturing
      companies across the U.S. Our experience and focus on the manufacturing
      sector ensure that your financial operations are streamlined, compliant,
      and built for growth.
    </Typography>

    {/* Advantages List */}
    <Stack spacing={2.2}>
      {advantages.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "flex-start" }}>
          <ArrowForwardIosIcon
            sx={{
              fontSize: "16px",
              color: "#ff7b00",
              mt: "4px",
              mr: 1.5,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.9,
              fontSize: { xs: "15px", md: "16px" },
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Container>
</Box>


);
};

export default ManufacturingAdvantages;
