import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // <-- IMPORT useNavigate

function ContactPageHero() {
  const navigate = useNavigate(); // now it works

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
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          Our Team with more than 30 years of Experience in the Accounting Sector
        </Typography>
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

export default ContactPageHero;
