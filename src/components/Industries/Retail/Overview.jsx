import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const RetailAccountingLayout = () => {
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
Retail Accounting & Bookkeeping Services by Milta
</Typography>

    {/* Introductory Paragraphs */}
    <Stack spacing={2.5} sx={{ mb: 6 }}>
      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        In today’s competitive retail environment, effective bookkeeping for retail
        businesses is more than a best practice—it’s essential for growth,
        profitability, and compliance. From traditional storefronts to e-commerce
        platforms and hybrid models, every retail business needs accurate financial
        records to make informed decisions, manage inventory, and ensure compliance
        with tax laws.
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        As the retail landscape evolves through digital transformation, traditional
        accounting methods no longer suffice. That’s why Milta offers advanced,
        customized retail accounting services designed to meet the dynamic needs of
        modern retailers.
      </Typography>
    </Stack>

    {/* Subsection Title */}
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        mb: 4,
        color: "#1d4230",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      Key Components of Retail Accounting
    </Typography>

    {/* Key Elements List */}
    <Stack spacing={3}>
      {[
        {
          title: "1. Inventory Management",
          text: "Accurate bookkeeping for retail businesses begins with effective inventory management. Tracking stock levels, purchase costs, and sales margins helps maintain profitability and avoid overstocking or shortages.",
        },
        {
          title: "2. Point-of-Sale (POS) Integration",
          text: "Modern POS systems can sync directly with your accounting software, ensuring every sale, return, and discount is accurately recorded in real time for smoother reconciliation.",
        },
        {
          title: "3. Sales Tax Compliance",
          text: "Retailers operate under varying state and local sales tax laws. Our team ensures that all sales tax collections and filings are accurate and submitted on time to avoid penalties.",
        },
        {
          title: "4. Expense Tracking & Cost Control",
          text: "Keeping track of operational costs—like rent, utilities, and vendor payments—is essential for profitability. We categorize and analyze expenses to identify savings opportunities.",
        },
        {
          title: "5. Payroll Management",
          text: "Retail businesses often have fluctuating staff levels. Our payroll solutions ensure accurate wage calculations, tip reporting, and compliance with labor regulations.",
        },
        {
          title: "6. Financial Reporting & Analysis",
          text: "Comprehensive financial statements, including profit/loss and cash flow reports, help retailers monitor performance and plan strategically for future growth.",
        },
        {
          title: "7. Multi-Location Consolidation",
          text: "For businesses with multiple outlets, we provide consolidated accounting and reporting, ensuring unified financial visibility across all branches.",
        },
        {
          title: "8. Tax Planning & Preparation",
          text: "Our retail tax accountants help minimize liabilities through proactive planning, accurate filings, and strategic deductions tailored to your business structure.",
        },
        {
          title: "9. Vendor & Supplier Management",
          text: "We manage accounts payable, negotiate better payment terms, and track supplier performance to optimize your retail supply chain finances.",
        },
        {
          title: "10. Cloud-Based Accounting Solutions",
          text: "We leverage cloud accounting tools that allow retailers to access financial data anytime, automate reconciliation, and enhance decision-making with real-time insights.",
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

export default RetailAccountingLayout;
