import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../common/CustomButton";

const MiltaAccountingOverview = () => {
          const handleCalendlyClick = () => {
window.open("/contact", "_blank", "noopener,noreferrer");}
  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffffff" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              mb: 3,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
              lineHeight: 1.3,
            }}
          >
            Milta Overview of Outsourced
            <br />
            Accounting Services
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              mb: 4,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              maxWidth: "1200px",
            }}
          >
            Running a small or mid-sized business comes with enough challenges;
            your back-office support shouldn’t be one of them. That’s where
            Milta steps in. We’re not a one-size-fits-all firm built for
            corporate giants. We focus on what matters to smaller businesses:
            practical solutions, fair pricing, and personalized service.
            <br />
            <br />
            Our team delivers hands-on accounting and bookkeeping support that’s
            designed to make your life easier. Whether you're managing day-to-day
            finances or looking for help with long-term planning, we provide the
            kind of service that actually fits your business — no fluff, no
            unnecessary costs. With Milta, you get reliable, thoughtful support
            that helps your business stay on track and ready for what’s next.
          </Typography>

          {/* Call to Action Button */}
          <CustomButton  onClick={handleCalendlyClick} >Get Started</CustomButton>
        </Box>
      </Container>
    </Box>
  );
};

export default MiltaAccountingOverview;
