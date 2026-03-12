import React from "react";
import { Box, Typography, Container } from "@mui/material";
import CustomButton from "../common/CustomButton";
// If homeComp is under src/components/homeComp
import StylishDividerText from "../homeComp/StylishDividerText";


const MiltaAccountingOverview = () => {
  const handleCalendlyClick = () => {
    window.open("/contact", "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        pt: { xs: 6, md: 4 },pb: { xs: 6, md: 8 },
        backgroundColor: "#ffffffff",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            
          }}
        >
          {/* Section Label */}
        <StylishDividerText text="Areas We Serve" />

          

          {/* Main Heading */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.6rem" },
              lineHeight: 1.3,
              maxWidth: "850px",
            }}
          >
            Our Accounting, Bookkeeping & Virtual Support Services Across the USA
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.9,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              maxWidth: "820px",
              mt: 2,
            }}
          >
            At Milta, we provide small and medium-sized businesses across the
            United States with reliable bookkeeping, accounting, tax planning and
            preparation, CPA services, virtual assistance, and digital marketing
            support.
            <br />
            <br />
            Our remote service model enables us to support businesses operating
            in multiple states while fully complying with U.S. accounting
            standards, IRS regulations, and strict data security requirements.
            <br />
            <br />
            Whether your business operates in a single state or across several
            locations, our experienced professionals keep your financial
            operations accurate, well-organized, and audit-ready year-round—so
            you can focus on growing with confidence.
          </Typography>

          {/* CTA */}
          <Box sx={{ mt: 3 }}>
            <CustomButton onClick={handleCalendlyClick}>
              Get Started
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MiltaAccountingOverview;
