// src/components/servicesComp/bookKeeping/TopNotch.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TopNotch = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
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
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.4,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to right, #1d4230, #245b44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", md: "2.3rem" },
            }}
          >
            Top-Notch Bookkeeping Services for Small Businesses in the USA
          </Typography>

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
            Running a small business in the USA means juggling many tasks, from
            managing day-to-day operations to meeting deadlines. At{" "}
            <Box component="span" sx={{ fontWeight: 600, color: "#1d4230" }}>
              Miltafs
            </Box>
            , we understand that keeping your financial records can be
            challenging. That’s why we offer{" "}
            <Box
              component="span"
              sx={{
                color: "#ff9401",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
              onClick={() =>
                navigate("/us/services/bookkeeping-company-in-the-usa/")
              }
            >
              bookkeeping services for small businesses
            </Box>{" "}
            across the United States — helping you streamline your finances and
            maintain accurate financial records.
          </Typography>

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
            Whether you require bank reconciliation, payroll processing, or
            detailed financial reporting, Miltafs provides reliable and
            affordable solutions tailored for growth-minded business owners.
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
              onClick={() =>
                window.open(
                  "https://calendly.com/rob-miltafs/30min",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
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
               Get Started | Book a Call
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
            alt="Bookkeeping services for small businesses in the USA"
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
    </Box>
  );
};

export default TopNotch;
