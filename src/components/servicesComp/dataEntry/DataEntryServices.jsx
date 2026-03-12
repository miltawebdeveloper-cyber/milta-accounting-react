// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "General Ledger Entry",
    description:
      "We maintain an accurate and thorough general ledger by methodically documenting all of your financial activities.",
  },
  {
    title: "Accounts Payable and Receivable Data Entry",
    description:
      "We manage your billing and payments accurately, streamlining cash flow and improving vendor relationships.",
  },
  {
    title: "Invoice Data Entry",
    description:
      "Efficient processing of invoices for timely payments and organized record-keeping.",
  },
  {
    title: "Bank Reconciliation",
    description:
      "We reconcile bank statements with your accounting records to eliminate discrepancies and ensure consistency.",
  },
  {
    title: "Payroll Data Entry",
    description:
      "From salaries to deductions, we ensure your payroll records are precise and compliant.",
  },
  {
    title: "Expense Report Data Management Service",
    description:
      "For efficient planning and payment, we arrange and evaluate business spending.",
  },
  {
    title: "Financial Statement Preparation",
    description:
      "Prepare accurate financial reports, including balance sheets and profit and loss statements, for better decision-making.",
  },
  {
    title: "Custom Data Entry Services",
    description:
      "Our flexible solutions cater to your unique business requirements, providing personalized data management support.",
  },
  {
    title: "QuickBooks Data Entry",
    description:
      "We specialize in QuickBooks integration, managing everything from invoice entry to report generation. By leveraging QuickBooks, we help you maintain accurate and accessible financial records.",
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 8 },
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
          Our Data Entry Services in USA
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
          All of your accounting data entry needs are met by our extensive variety of services. Each service is customized to ensure accuracy and efficiency.
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
