import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const RetailAccountingFeatures = ({
title = "Key Features of Our Retail Accounting & Bookkeeping Services",
bgColor = "#f9f9f9",
maxWidth = "1000px",
}) => {
const features = [
{
title: "Sales & Expense Tracking",
text: "Real-time recording and categorization of sales and expenditures.",
},
{
title: "Inventory Management",
text: "Integrated inventory tracking across multiple locations and platforms.",
},
{
title: "Cash Flow Monitoring",
text: "Visibility into receivables, payables, and liquidity for better financial control.",
},
{
title: "Tax Planning & Preparation",
text: "We provide accurate tax return preparation for retail businesses, including comprehensive year-end financial reporting. Our retail tax experts ensure compliance, maximize deductions, and support strategic planning for the next fiscal year.",
},
{
title: "Financial Reporting",
text: "Clear, accurate financial statements for internal review, investors, or lenders.",
},
{
title: "Multi-Channel Integration",
text: "Unified reports for businesses operating in-store, online, or both.",
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
{title} </Typography>

    {/* Features List */}
    <Stack spacing={3}>
      {features.map((item, index) => (
        <Box key={index}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              mb: 0.5,
            }}
          >
            {item.title}
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

export default RetailAccountingFeatures;
