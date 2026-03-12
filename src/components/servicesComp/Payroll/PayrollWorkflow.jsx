// src/components/servicesComp/payroll/PayrollWorkflow.jsx
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const PayrollWorkflow = () => {
  const steps = [
    {
      title: "Time & Wage Calculation",
      desc: `Track working hours and hourly wages, paid leave, vacation, holidays, overtime, and non-exempt employee calculations. Estimate gross pay accurately after deductions.`,
    },
    {
      title: "Payroll Processing & Payments",
      desc: `Manage direct deposits or paper checks, automate payroll runs, and ensure on-time salary disbursement.`,
    },
    {
      title: "Payroll Reporting & Insights",
      desc: `Analyze labor costs, track employee headcount, monitor vacation and leave balances, and identify highest and lowest earning employees.`,
    },
    {
      title: "Payroll Tax Processing & Deductions",
      desc: `Calculate federal, state, and local taxes accurately, automate tax payments to authorities, and manage voluntary deductions and wage garnishments.`,
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f4f8ee" }}>
      <Container maxWidth="300px">
        {/* Header */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#113c34",
            mb: 3,
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          How Our Payroll Management System Works
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            textAlign: "center",
            lineHeight: 1.9,
            maxWidth: "800px",
            mx: "auto",
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our advanced payroll management system ensures precision, transparency, and compliance at every stage.
        </Typography>

        {/* Steps Grid */}
        <Grid container spacing={4} justifyContent="center">
          {steps.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  px: 3,
                  py: 5,
                  height: "100%",
                  background: "linear-gradient(to top, #ffffff, #f9fdf9)",
                  border: "1px solid #e0e0e0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                    background: "linear-gradient(to top, #e6f4f1, #d3efe7)",
                    border: "1px solid #0b3d2e",
                  },
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#113c34",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.7,
                      maxWidth: "300px",
                      mx: "auto",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PayrollWorkflow;
