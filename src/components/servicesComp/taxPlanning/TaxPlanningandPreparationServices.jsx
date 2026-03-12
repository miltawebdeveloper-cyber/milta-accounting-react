import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const TopNotch = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 6 },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.4,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Milta Comprehensive: Tax Planning and Preparation Services
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 0,
            }}
          >
            Milta provides top-notch tax planning and preparation services for individuals,
            businesses, estates, trusts, and non-profits. Our team of experts ensures accurate
            tax planning and preparation services in the USA, thorough review, and seamless filing
            of tax returns at the federal, state, and city levels. Here's a thorough overview of
            our offers.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2,
            }}
          >

          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopNotch;
