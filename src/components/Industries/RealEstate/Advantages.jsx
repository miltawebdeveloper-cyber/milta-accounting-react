import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const RealEstateBookkeepingDetails = ({
  title = "Advantages of Professional Real Estate Bookkeeping and Tax Planning Services",
  bgColor = "#f9f9f9",
  maxWidth = "1000px",
}) => {
  const advantages = [
    {
      heading: "1. Improved Accuracy and Compliance",
      text: "Accurate bookkeeping for real estate ensures your financial records are always up to date and compliant with tax and legal regulations. Our property management bookkeeping services handle everything from security deposits to lease agreements with precision. This helps real estate professionals, investors, and property developers maintain compliance, avoid costly penalties, and ensure seamless financial reporting.",
    },
    {
      heading: "2. Time Savings for Real Estate Professionals",
      text: "Outsourcing bookkeeping for real estate agents and property managers saves valuable time that would otherwise be spent on administrative work. Instead, you can focus on high-value tasks like tenant satisfaction, property maintenance, and business growth while our expert team manages your financial records efficiently.",
    },
    {
      heading: "3. Enhanced Financial Clarity and Decision-Making",
      text: "With professional real estate accounting services, you gain complete visibility into your property’s financial performance. Our detailed tracking of income, expenses, and investments gives you the clarity needed for budgeting, forecasting, and maximizing profitability. Whether you’re a real estate agent or an investor, accurate financial insights support smarter decision-making.",
    },
    {
      heading: "4. Better Cash Flow Management",
      text: "Our bookkeeping for real estate investors and developers helps maintain consistent cash flow by tracking receivables, managing vendor payments, and identifying financial bottlenecks early. You’ll have the insights to prevent overspending, manage rent collections, and ensure steady income streams for long-term financial stability.",
    },
    {
      heading: "5. Streamlined Property Management Operations",
      text: "By leveraging property management bookkeeping solutions, you can simplify daily financial operations. From automating rent collection to reconciling accounts and generating financial statements, our standardized processes ensure efficiency and accuracy across all your properties.",
    },
    {
      heading: "6. Strategic Real Estate Tax Planning",
      text: "Our specialized real estate tax planning services cover every aspect of the industry, including tax planning for real estate agents, tax planning for property developers, and tax planning for real estate investors. We help reduce tax liabilities, identify eligible deductions, and align your financial strategies with your business goals for maximum profitability.",
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

export default RealEstateBookkeepingDetails;
