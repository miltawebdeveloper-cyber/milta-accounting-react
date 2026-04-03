import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ServicesCtaSection() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          backgroundColor: "#1d4230",
          textAlign: "center",
          borderTop: "1px solid #e8e0d0",
          borderBottom: "1px solid #e8e0d0",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 1.5,
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" },
              lineHeight: 1.3,
              color: "#ffffffff",
            }}
          >
            Seeking Customized Solutions for Outsourced Bookkeeping &amp; Accounting Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3.5,
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
              lineHeight: 1.7,
              color: "#ffffffff",
              maxWidth: "620px",
              mx: "auto",
            }}
          >
            If you're looking for specialized accounting services for small businesses, we're here to help! Share your needs, and we'll craft a solution just for you.
          </Typography>

          <Button
            onClick={() => navigate("/contact#get-in-touch")}
            variant="outlined"
            sx={{
              borderColor: "#ff9401",
              color: "#ff9401",
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              px: { xs: 4, sm: 5 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: "30px",
              textTransform: "none",
              borderWidth: "2px",
              "&:hover": {
                backgroundColor: "#fff4e5",
                borderColor: "#e68300",
                color: "#e68300",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 18px rgba(255,148,1,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

    </>
  );
}

export default ServicesCtaSection;
