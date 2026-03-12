import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../../common/CustomButton";

function ServicesPageHero() {
  const handleCalendlyClick = () => {
    window.open("/contact", "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1d4230, #0f2b1d)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <Typography
          variant="h1"
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
            mb: 2,
            lineHeight: 1.2,
            color: "#ff9401",
          }}
        >
          Payroll Management Services
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
            maxWidth: "700px",
            mx: "auto",
            mb: 4,
            lineHeight: 1.7,
            color: "#e6e6e6",
          }}
        >
          Streamline payroll operations with accurate processing, timely tax
          filings, and full compliance with U.S. payroll regulations. Our payroll
          management services help businesses reduce errors, save time, and
          ensure employees are paid correctly—every time.
        </Typography>

        {/* CTA Button */}
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
          Book a free 30-minute Zoom consultation
        </CustomButton>
      </Container>

      {/* Decorative shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: 200,
          height: 200,
          backgroundColor: "rgba(255,148,1,0.2)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: 300,
          height: 300,
          backgroundColor: "rgba(255,148,1,0.15)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default ServicesPageHero;
