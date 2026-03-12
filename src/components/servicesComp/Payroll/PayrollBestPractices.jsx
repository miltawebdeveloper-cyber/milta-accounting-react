// src/components/servicesComp/payroll/PayrollBestPractices.jsx
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const PayrollBestPractices = () => {
  const practices = [
    {
      title: "Clear Wage Structures",
      desc: "Ensure consistent and transparent wage structures across roles to avoid confusion and disputes.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Defined Payroll Schedules",
      desc: "Establish well-defined payroll schedules and cut-off dates to ensure timely payments.",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png",
    },
    {
      title: "Proper Employee Classification",
      desc: "Correctly classify exempt and non-exempt employees for accurate wage and tax calculations.",
      img: "https://cdn-icons-png.flaticon.com/512/565/565547.png",
    },
    {
      title: "Overtime & Leave Accuracy",
      desc: "Calculate overtime and leave precisely to avoid payroll errors and disputes.",
      img: "https://cdn-icons-png.flaticon.com/512/9425/9425419.png",
    },
    {
      title: "Integrated Systems",
      desc: "Integrate payroll with accounting systems to streamline financial tracking and reporting.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135720.png",
    },
    {
      title: "Multiple Payment Methods",
      desc: "Offer employees convenient payment methods including direct deposit, checks, or digital wallets.",
      img: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    },
    {
      title: "Reliable Time Tracking",
      desc: "Use accurate time and attendance tools to track work hours, leaves, and overtime automatically.",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },
    {
      title: "Test Before Rollout",
      desc: "Test new payroll systems before full implementation to ensure error-free processing.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135721.png",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f9fdf9" }}>
      <Container maxWidth="lg">
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
          Best Practices for Accurate Payroll Management
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
          Effective payroll management requires more than basic processing. To achieve error-free payroll, modern, technology-enabled payroll systems and ERP integrations are essential.
        </Typography>

        {/* Practices Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {practices.map((item, i) => (
            <Grid item key={i}>
              <Card
                elevation={0}
                sx={{
                  width: 250,
                  height: 350,
                  borderRadius: 4,
                  textAlign: "center",
                  px: 3,
                  py: 5,
                  background: "linear-gradient(to top, #ffffff, #f4f8ee)",
                  border: "1px solid #e0e0e0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    mb: 2,
                    objectFit: "contain",
                  }}
                />
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

export default PayrollBestPractices;
