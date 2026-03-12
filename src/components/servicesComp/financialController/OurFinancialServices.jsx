// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const services = [
  {
    title: "Reporting from Management",
    description: `
We provide accurate, timely financial reporting, ensuring that key stakeholders have the insights they need to make informed decisions.`,
  },
  {
    title: "Oversight and Evaluation of Transaction Processing",
    description: `
Our team closely monitors transaction processes, ensuring accuracy and efficiency in your financial operations.`,
  },
  {
    title: "Assessment of Internal Control Mechanisms",
    description: `
We assess your current internal control mechanisms, identifying gaps and providing recommendations for improvements to safeguard your financial integrity.`,
  },
  {
    title: "Procedures and Policy Direction and Conformity",
    description: `
We ensure that your business adheres to established procedures and policies, maintaining consistency and regulatory compliance.`,
  },
  {
    title: "Timely Payment Management",
    description: `
We oversee the timely payment of all liabilities, ensuring that your business meets deadlines and avoids penalties.`,
  },
  {
    title: "Reports that Are Requested",
    description: `
Our team prepares reports on demand, addressing specific business needs and delivering financial data quickly and efficiently.`,
  },
  {
    title: "Monthly Review and Reporting",
    description: `
We conduct regular reviews and provide detailed monthly financial reports to ensure that your business stays on track with its goals.`,
  },
  {
    title: "Adherence to Federal and State Regulations",
    description: `
We ensure your business complies with both federal and state financial regulations, mitigating the risk of non-compliance penalties.`,
  },
  {
    title: "Fractional Controller Services",
    description: `
For businesses that don’t require a full-time controller, we offer fractional controller services, giving you access to top-tier financial expertise without the full-time commitment.`,
  },
  {
    title: "Vendor and Employee Communication Assistance",
    description: `
Our team facilitates clear and effective communication between vendors, employees, and other stakeholders, ensuring smooth operations and financial transparency.`,
  },
  {
    title: "Audit Assistance",
    description: `
We provide support during audits, helping you prepare documents, review financials, and ensure full compliance with auditing standards.`,
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 6 },
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
          Our Financial Controller Services in the USA
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
            color: "#fffdfb",
            maxWidth: "850px",
            mx: "auto",
          }}
        >
          From reporting and compliance to transaction oversight and audit support, Milta’s Financial Controller Services ensure your financial operations remain accurate, compliant, and efficient.
        </Typography>

        {/* 3-column responsive grid */}
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
                  minHeight: 240,
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
