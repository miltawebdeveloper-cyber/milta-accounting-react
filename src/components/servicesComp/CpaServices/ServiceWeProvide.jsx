// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  {
    title: "Accounting & Bookkeeping Services",
    description: `
Financial statements for the month, quarter, and year.
Reconciliations and general ledger review.
Management of accounts payable and receivable.
Processing and compliance with payroll.
Reconciliation of credit cards and banks.
`,
  },
  {
    title: "Tax Planning & Preparation",
    description: `
Tax returns for individuals and corporations (Forms 1040, 1120S, 1065, etc.).
Sales tax and payroll filings.
Evaluations and advice on tax compliance.
IRS participation in audits.
`,
  },
  {
    title: "Financial Consulting & Advisory",
    description: `
Forecasting and budgeting techniques.
Optimization of cash flow.
Financial analysis and business valuation.
Internal controls and risk management.
Advice on mergers and acquisitions.
`,
  },
  {
    title: "Catch-Up & Clean-Up Accounting",
    description: `
Corrections to historical records.
Identification and reconciliation of discrepancies.
Upgrades to outdated accounting systems.
`,
  },
  {
    title: "Software Setup & Conversions",
    description: `
QuickBooks migration and customization.
Conversion to Xero-like cloud systems.
Continuous technical assistance and troubleshooting.
`,
  },
  {
    title: "Audit & Assurance Services",
    description: `
Risk assessments and internal audits.
Audits and evaluations of financial statements.
Regulatory reporting and compliance.
`,
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
        {/* Heading */}
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
          Our Core CPA Services in the USA
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
          From tax planning to audit and financial advisory, we support your
          business at every stage of growth.
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
                  minHeight: 300,
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
                    mb: 2,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Listing with icons */}
                <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
                  {service.description
                    .trim()
                    .split("\n")
                    .map((line, i) => (
                      <Box
                        key={i}
                        sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                      >
                        <CheckCircleIcon
                          sx={{ fontSize: 18, color: "#ff9401", mt: "2px" }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#f8f8f8",
                            fontFamily: "'Poppins', sans-serif",
                            lineHeight: 1.6,
                          }}
                        >
                          {line.trim()}
                        </Typography>
                      </Box>
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
