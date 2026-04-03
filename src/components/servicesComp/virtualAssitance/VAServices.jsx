import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const TopNotch = () => {
      const handleCalendlyClick = () => {
window.open("/contact", "_blank", "noopener,noreferrer");}
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
            Virtual Assistant Services for Small Businesses
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            At Milta, we understand the daily challenges that small business owners encounter.
            From juggling administrative responsibilities to managing finances, these tasks can
            detract from your core focus on growing your business. That’s where our professional
            virtual assistant services come in — providing dedicated support to streamline
            operations, increase efficiency, and reduce your workload.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Whether you’re a budding entrepreneur or an established small business, our virtual
            assistant services are here to help. From virtual bookkeeping services to specialized
            administrative assistance, we’re your trusted partner in achieving success.
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
