// src/components/servicesComp/payroll/PayrollIntro.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const PayrollIntro = () => {
  const points = [
    {
      title: "Employee Satisfaction & Trust",
      desc: "Timely and error-free salary processing improves employee confidence, morale, and retention while eliminating payroll-related disputes.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Unique people/team icon
    },
    {
      title: "Time Efficiency for Internal Teams",
      desc: "Professional payroll management frees your HR and finance teams from repetitive payroll tasks, allowing them to focus on strategic business initiatives.",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910763.png", // Clock/time management
    },
    {
      title: "Secure Payroll Data Protection",
      desc: "Advanced payroll systems safeguard sensitive employee data, including salaries, tax information, and personal details, through secure platforms.",
      img: "https://cdn-icons-png.flaticon.com/512/565/565547.png", // Lock/security icon
    },
    {
      title: "Scalable & Cost-Effective Payroll",
      desc: "Easily manage payroll as your workforce grows while reducing costs associated with in-house payroll staff and expensive payroll software.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135712.png", // Growth/graph icon
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 5 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#113c34",
            mb: 0,
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Why Payroll Management Is Essential
          <br /> for US Businesses
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            textAlign: "center",
            lineHeight: 1.9,
            maxWidth: "850px",
            mx: "auto",
            mb: 8,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Effective payroll management directly impacts regulatory compliance,
          employee satisfaction, and overall business stability. Partnering with
          a professional payroll management firm ensures accurate processing,
          data security, and smooth payroll operations—without internal stress.
        </Typography>

        {/* Two-column Feature Grid */}
        <Grid container spacing={4} justifyContent="center">
          {points.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  px: 3,
                  py: 5,
                  height: "100%",
                  background: "linear-gradient(to top, #ffffff, #f9fdf9)",
                  border: "1px solid #e8efe8",
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
                    width: 120,
                    height: 120,
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
                      maxWidth: "400px",
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

export default PayrollIntro;
