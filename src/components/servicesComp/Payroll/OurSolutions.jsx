// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  {
    title: "End-to-End Payroll Processing",
    list: [
      "Complete payroll calculation and processing.",
      "Accurate salary computation and deductions.",
      "Automated payslip generation and distribution.",
      "Timely payroll execution without delays.",
    ],
  },
  {
    title: "Payroll Tax Compliance & Filing",
    list: [
      "Federal, state, and local payroll tax compliance.",
      "Accurate tax calculations and timely filings.",
      "Handling of payroll-related statutory obligations.",
      "Reduced compliance risks and penalties.",
    ],
  },
  {
    title: "Employee Onboarding & Offboarding",
    list: [
      "Seamless payroll setup for new hires.",
      "Accurate salary structuring and tax setup.",
      "Final settlements and exit payroll processing.",
      "Compliance-ready documentation management.",
    ],
  },
  {
    title: "Time & Attendance Integration",
    list: [
      "Automated tracking of work hours and overtime.",
      "Leave and attendance synchronization.",
      "Error-free payroll based on real-time data.",
      "Improved payroll accuracy and transparency.",
    ],
  },
  {
    title: "Multi-Country Payroll Support",
    list: [
      "Payroll services across multiple geographies.",
      "Support for USA, UK, Canada, Australia, and India.",
      "Country-specific compliance and tax handling.",
      "Centralized global payroll management.",
    ],
  },
  {
    title: "Employee Benefits & Deductions",
    list: [
      "Management of insurance and retirement plans.",
      "Handling reimbursements and statutory deductions.",
      "Accurate benefit calculations and reporting.",
      "Employee-friendly and compliant payroll structure.",
    ],
  },
  {
    title: "Custom Payroll Reports",
    list: [
      "Audit-ready payroll and compliance reports.",
      "Custom reports tailored to business needs.",
      "Real-time dashboards for payroll insights.",
      "Improved decision-making with accurate data.",
    ],
  },
  {
    title: "Payroll Software Integration",
    list: [
      "Integration with leading payroll platforms.",
      "QuickBooks, Gusto, ADP, Paychex support.",
      "Xero, Zoho, and Odoo payroll integration.",
      "Seamless data flow across accounting systems.",
    ],
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 7 },
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            color: "#ff9401",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Payroll Management Services by Milta Accounting
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: "900px",
            mx: "auto",
            color: "#fffdfb",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.6,
          }}
        >
          Milta Accounting is a leading payroll management company offering
          comprehensive Payroll Management Services in the USA and globally,
          helping businesses stay compliant, accurate, and stress-free.
        </Typography>

        {/* Services Grid */}
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
                  maxWidth: 400,
                  mx: "auto",
                  p: 4,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",

                  // Glassmorphism effect
                  background: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",

                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid #ff9401",
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
                    mb: 2,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Card List */}
                <Stack spacing={1.2}>
                  {service.list.map((item, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1}
                      alignItems="flex-start"
                    >
                      <CheckCircleIcon
                        sx={{ color: "#ff9401", fontSize: 20, mt: "2px" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#f8f8f8",
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSolutions;
