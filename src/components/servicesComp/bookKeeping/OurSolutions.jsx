// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "Bank and Credit Card Reconciliation",
    description:
      "We ensure your financial records align with actual bank and credit card statements through regular reconciliation—preventing errors, fraud, and discrepancies.",
  },
  {
    title: "Handling Cash Flow, Accounts Receivable (AR), and Accounts Payable (AP)",
    description:
      "We document and track all cash inflows and outflows, ensuring effective AR/AP management and a clear picture of your business cash flow.",
  },
  {
    title: "Invoice Generation and Recording",
    description:
      "We handle invoice generation, timely recording, and follow-ups to maintain a steady income stream and ensure accurate financial records.",
  },
  {
    title:
      "Maintaining a Well-Organized Chart of Accounts and Accounting Preparation System",
    description:
      "We help set up and maintain a clear chart of accounts for accurate categorization, easy tracking, and efficient accounting preparation.",
  },
  {
    title: "Payroll Processing, Taxation, and Employee Benefits Management",
    description:
      "Our payroll experts manage salary calculations, tax withholdings, and employee benefits, ensuring timely and compliant payroll processing.",
  },
  {
    title: "Regular Financial Reporting (Weekly, Monthly & Yearly)",
    description:
      "We provide consistent, detailed financial reports offering insights into revenue, expenses, and profits—helping you make data-driven decisions.",
  },
  {
    title:
      "Assistance with Small Business Accounting, Non-Profit Bookkeeping, and Clean-Up Tasks",
    description:
      "We assist with accounting for small businesses and non-profits and offer bookkeeping clean-up services to keep your records accurate.",
  },
  {
    title: "Collaborating with CPAs for Year-End Tax Preparations",
    description:
      "We work closely with CPAs to ensure accurate and timely year-end tax preparation, keeping your books ready for audits and filings.",
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            color: "#ff9401",
          }}
        >
          End-to-End Bookkeeping and Financial Organization
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
            color: "#fffdfb",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Our Comprehensive Bookkeeping Solutions for Small Businesses
        </Typography>

        {/* Grid Layout */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: 200,
                  width: "100%",
                  maxWidth: 400,
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  borderRadius: 4,
                  mx: "auto",
                  background: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid #ff9401",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                    background: "rgba(255, 255, 255, 0.12)",
                  },
                }}
              >
                {/* Card Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#ff9401",
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Card Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#f8f8f8",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSolutions;
