import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";

function ServicesCtaSection() {
  const themeColor = "#ff9401";
    const handleCalendlyClick = () => {
window.open("/contact", "_blank", "noopener,noreferrer");}
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 }, // reduced vertical space
        backgroundColor: themeColor,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        borderRadius: 4, // subtle rounded edges
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)", // soft shadow
      }}
    >
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          width: 150,
          height: 150,
          backgroundColor: "#ffffff22",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: 200,
          height: 200,
          backgroundColor: "#ffffff11",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" },
            lineHeight: 1.3,
            color: "#fff",
          }}
        >
          Seeking Customized Solutions for Outsourced Bookkeeping & Accounting Services?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.15rem" },
            lineHeight: 1.6,
            color: "#ffffffdd",
          }}
        >
          If you’re looking for specialized accounting services for small businesses, we’re here to help! Share your needs, and we’ll craft a solution just for you.
        </Typography>

        <CustomButton
        onClick={handleCalendlyClick}
          sx={{
            backgroundColor: "#1d2b36",
            color: "#fff",
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
            px: { xs: 4, sm: 5 },
            py: { xs: 1.5, sm: 2 },
            "&:hover": {
              backgroundColor: "#162129",
              transform: "scale(1.05)",
            },
            transition: "all 0.3s ease",
            fontWeight: 600,
            borderRadius: 2,
          }}
        >
          Contact Us
        </CustomButton>
      </Container>
    </Box>
  );
}

export default ServicesCtaSection;
