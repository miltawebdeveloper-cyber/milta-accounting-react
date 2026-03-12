// src/uk-components/Industries/Ecommerce/Strategies.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";



// Software tools data
const softwareTools = [
  { name: "Xero", icon: <CloudIcon sx={{ fontSize: 28 }} /> },
  { name: "QuickBooks", icon: <AssessmentIcon sx={{ fontSize: 28 }} /> },
  { name: "Sage", icon: <StorageIcon sx={{ fontSize: 28 }} /> },
  { name: "FreeAgent", icon: <ComputerIcon sx={{ fontSize: 28 }} /> },
  { name: "Dext", icon: <ReceiptIcon sx={{ fontSize: 28 }} /> },
  { name: "Hubdoc", icon: <CodeIcon sx={{ fontSize: 28 }} /> },
  { name: "BrightPay", icon: <PaymentsIcon sx={{ fontSize: 28 }} /> },
];

const Strategies = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 6 },
        px: { xs: 1.5, sm: 2.5 },
        backgroundColor: "#2b6d2a",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            textAlign: "center",
            color: "#fff",
          }}
        >

       

          {/* Second Section: Software & Tools */}
          <Box sx={{ mt: { xs: 4, md: 6 } }}>
            {/* Section Label with dot */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#97ba3a",
                }}
              />
              <Typography 
                fontWeight={600} 
                sx={{ 
                  color: "#fff",
                  fontSize: { xs: 14, sm: 16 },
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Technology Partners
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 28, md: 40 },
                fontWeight: 700,
                lineHeight: 1.25,
                mb: { xs: 2, sm: 3 },
                fontFamily: "'Poppins', sans-serif",
                color: "#fff",
              }}
            >
              Software & Tools We Work With
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                lineHeight: 1.7,
                mb: { xs: 4, md: 5 },
                color: "#f0f0f0",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              To provide efficient and secure accounting services for hospitality, 
              we utilise trusted cloud accounting platforms such as:
            </Typography>

            {/* Software Tools Grid */}
            <Grid container spacing={2} justifyContent="center">
              {softwareTools.map((tool, index) => (
                <Grid item key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: { xs: "100px", sm: "120px", md: "140px" },
                      height: { xs: "100px", sm: "120px", md: "140px" },
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      cursor: "default",
                      p: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.2)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: "#97ba3a",
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tool.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 14, md: 15 },
                        fontWeight: 600,
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {tool.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Additional description */}
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15 },
                lineHeight: 1.6,
                mt: { xs: 3, md: 4 },
                color: "#f0f0f0",
                maxWidth: 800,
                mx: "auto",
                fontStyle: "italic",
              }}
            >
              These systems allow seamless integration, real-time reporting, 
              and enhanced financial control.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Strategies;