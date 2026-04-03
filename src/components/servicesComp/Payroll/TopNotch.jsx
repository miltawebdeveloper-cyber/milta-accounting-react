import React, { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import ContactPopup from "../../common/ContactPopup";

const TopNotch = () => {
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
        {/* Left Column - Content */}
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
              background: "linear-gradient(to right, #1d4230, #245b44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", md: "2.3rem" },
            }}
          >
            Payroll Management Services in the USA
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
            Managing payroll accurately is critical for every business, but it is
            also one of the most complex and compliance-driven functions. At Milta
            Accounting, we deliver reliable Payroll Management Services in the USA,
            helping businesses streamline payroll processing, reduce errors, and
            stay fully compliant with federal, state, and local regulations.
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
            As a trusted payroll management company, we take complete
            responsibility for your payroll liabilities, ensuring employee wages,
            deductions, and taxes are calculated and paid accurately, every time,
            on schedule.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
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

        {/* Right Column - Payroll Image */}
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
            src="https://img.freepik.com/free-vector/hr-management-concept-illustration_114360-2104.jpg"
            alt="Payroll management services"
            sx={{
              width: "100%",
              maxWidth: 420,
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              objectFit: "contain",
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
