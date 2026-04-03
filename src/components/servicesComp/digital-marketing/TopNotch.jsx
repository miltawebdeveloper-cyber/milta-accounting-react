import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactPopup from "../../common/ContactPopup";

const TopNotch = () => {
  const navigate = useNavigate();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Box sx={{ py: { xs: 6, md: 5 }, backgroundColor: "#fff" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 8 },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Column - Text + CTA */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* ---------- UPDATED HEADING ---------- */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.4,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background: "linear-gradient(to right, #1d4230, #245b44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", md: "2.3rem" },
            }}
          >
            Milta: Your Trusted Partner for Digital Marketing Excellence in the USA
          </Typography>

          {/* ---------- UPDATED PARAGRAPH 1 ---------- */}
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 3,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Miltafs is a dynamic, versatile, and full-service digital marketing
            agency that doesn't rely on gimmicks to attract clients. Instead, we
            leverage our expertise in search engine optimization (SEO) and marketing
            to drive new customers to your business.
          </Typography>

          {/* ---------- UPDATED PARAGRAPH 2 ---------- */}
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            We are not a static company; we don't confine ourselves to specific
            industries. Miltafs has the experience and talent to build custom
            websites and utilize a variety of digital marketing services to assist
            businesses of all sizes across any sector. Explore the diverse range of
            digital marketing services that Miltafs offers. Please reach out to us
            today to discover how we can assist in the expansion of your business.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setContactModalOpen(true)}
              sx={{
                borderColor: "#ff9401",
                color: "#ff9401",
                fontWeight: 600,
                px: 4,
                py: 1.3,
                textTransform: "none",
                fontFamily: "'Poppins', sans-serif",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#ff94011a",
                  borderColor: "#ff9401",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              More Details
            </Button>
          </Box>
        </Box>

        {/* Right Column - Image */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 40%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/accounting-concept-illustration_114360-5903.jpg"
            alt="digital marketing services for businesses in the USA"
            sx={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
      <ContactPopup 
        open={contactModalOpen}
        handleClose={() => setContactModalOpen(false)}
      />
    </Box>
  );
};

export default TopNotch;
