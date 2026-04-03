// src/components/servicesComp/financialController/WhyChooseMiltaController.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const WhyChooseMiltaController = () => {
  const highlights = [
    {
      title: "Affordable and Scalable",
      desc: "We offer cost-effective solutions customized to the needs of small and medium-sized businesses. Our services scale seamlessly with your growth, ensuring continuous support at every stage. ",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      title: "Experienced Team",
      desc: "Our financial controllers bring extensive experience and a strong understanding of the unique challenges faced by SMBs. They provide strategic insights and practical solutions to help you manage finances with confidence and clarity.",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    },
    {
      title: "Customized Solutions",
      desc: "We customize our services to align with your business’s unique needs and goals.This ensures you receive the right level of financial oversight, accuracy, and support at every stage.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Focus on Compliance and Accuracy",
      desc: "We prioritize regulatory compliance and accuracy in every process to ensure reliable outcomes. Our commitment to financial integrity builds trust and supports your business with confidence.",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Centered Heading and Description */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to top, hsl(152, 80%, 12%), hsl(160, 35%, 25%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Miltafs for Financial Controller Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Your Trusted Partner for Effortless Financial Management and Growth.
          </Typography>
        </Box>

        {/* Two-column layout */}
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#f8fff9",
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
                      color: "#0a382a",
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

export default WhyChooseMiltaController;
