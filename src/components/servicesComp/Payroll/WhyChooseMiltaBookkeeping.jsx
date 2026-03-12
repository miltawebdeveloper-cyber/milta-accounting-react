// src/components/servicesComp/payroll/WhyChooseOutsourcedPayroll.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const WhyChooseOutsourcedPayroll = () => {
  const highlights = [
    {
      title: "More Time for Business Growth",
      desc: "Outsourcing payroll management services frees your leadership and internal teams from time-consuming payroll tasks, allowing you to focus on strategic planning, operations, and business expansion.",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // Growth / business expansion
    },
    {
      title: "Regulatory Confidence & Compliance",
      desc: "Payroll specialists stay updated with constantly changing federal, state, and local payroll regulations in the USA, ensuring full compliance and reducing legal or financial risks.",
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png", // Compliance / regulation
    },
    {
      title: "Higher Payroll Accuracy",
      desc: "Professionally managed payroll minimizes calculation errors, late filings, adjustments, and employee disputes—ensuring employees are paid accurately and on time.",
      icon: "https://cdn-icons-png.flaticon.com/512/9425/9425419.png", // Accuracy / checklist
    },
    {
      title: "Enhanced Data Security",
      desc: "Secure payroll platforms and encrypted systems protect sensitive employee data such as salaries, tax details, and personal information from breaches or misuse.",
      icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png", // Data security / lock
    },
    {
      title: "Reduced Administrative Burden",
      desc: "Managing payroll internally can quickly become complex and resource-heavy. Outsourcing eliminates operational strain and streamlines payroll from start to finish.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", // Process / workflow
    },
    {
      title: "Reliable & Stress-Free Payroll Operations",
      desc: "Outsourced payroll delivers consistency, precision, and peace of mind—ensuring smooth payroll processing month after month without internal disruption.",
      icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png", // Trust / reliability
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Outsourced Payroll Management Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              maxWidth: "780px",
              mx: "auto",
            }}
          >
            As organizations scale, payroll operations become increasingly
            complex and regulation-heavy—especially in the United States.
            Outsourcing payroll management services helps businesses reduce
            compliance exposure, eliminate operational strain, and ensure
            payroll is handled accurately and securely.
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#f8faf8",
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: 70,
                    height: 70,
                    objectFit: "contain",
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 3 },
                  }}
                />

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      mb: 1,
                      color: "#093028",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseOutsourcedPayroll;
