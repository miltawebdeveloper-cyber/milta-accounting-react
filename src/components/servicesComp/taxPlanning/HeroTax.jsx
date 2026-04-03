import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../../common/CustomButton";
import ContactPopup from "../../common/ContactPopup";

function HeroTax() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleCalendlyClick = () => {
    setContactModalOpen(true);
  }

  return (
    <>
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
            Tax Planning and Preparation Services
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              mb: 2,
              lineHeight: 1.4,
            }}
          >
            Streamline Your Tax Filing Process with Expert Federal, State, and City Tax Planning and Preparation Services!
            We handle complicated tax forms and files, so you don't have to.
            Get Started Today with a Free Consultation!
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
            Book a free 30-minute consultation.
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
      <ContactPopup open={contactModalOpen} handleClose={() => setContactModalOpen(false)} />
    </>
  );
}

export default HeroTax;