// src/components/servicesComp/bookKeeping/TopNotch.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const FinancialControllerIllustration = (props) => (
  
  <Box
    component="svg"
    viewBox="0 0 800 500"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    sx={{
      width: "100%",
      height: "auto",
      maxWidth: 440,
      display: "block",
      ...props.sx,
    }}
  >
    <defs>
      <linearGradient id="bg" x1="0" x2="1">
        <stop offset="0%" stopColor="#e9f6f2" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
      <linearGradient id="accent" x1="0" x2="1">
        <stop offset="0%" stopColor="#0d3731" />
        <stop offset="100%" stopColor="#ff9401" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#111" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background panel */}
    <rect x="20" y="30" width="760" height="440" rx="28" fill="url(#bg)" filter="url(#shadow)" />

    {/* Main dashboard */}
    <g transform="translate(100,100)">
      <rect x="0" y="0" width="600" height="280" rx="16" fill="#fff" stroke="#e8e8e8" />
      <rect x="0" y="0" width="600" height="42" rx="16" fill="rgba(255,148,1,0.08)" />
      <circle cx="30" cy="21" r="5" fill="#ff9401" />
      <circle cx="50" cy="21" r="5" fill="#ffb74a" />
      <circle cx="70" cy="21" r="5" fill="#0d3731" />

      {/* Graph */}
      <g transform="translate(80,80)">
        <polyline
          points="0,120 60,90 120,100 180,60 240,80 300,40 360,60 420,30"
          fill="none"
          stroke="url(#accent)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="90" r="5" fill="#ff9401" />
        <circle cx="180" cy="60" r="5" fill="#ff9401" />
        <circle cx="300" cy="40" r="5" fill="#ff9401" />
        <circle cx="420" cy="30" r="5" fill="#ff9401" />
      </g>

      {/* Sidebar menu */}
      <g transform="translate(20,60)">
        <rect x="0" y="0" width="40" height="200" rx="8" fill="rgba(13,55,49,0.05)" />
        <rect x="8" y="20" width="24" height="6" rx="3" fill="#0d3731" />
        <rect x="8" y="50" width="24" height="6" rx="3" fill="#ff9401" />
        <rect x="8" y="80" width="24" height="6" rx="3" fill="#0d3731" />
      </g>

      {/* Report boxes */}
      <g transform="translate(100,220)">
        <rect x="0" y="0" width="120" height="40" rx="8" fill="#f6faf9" stroke="#e1efea" />
        <rect x="160" y="0" width="120" height="40" rx="8" fill="#fffbf4" stroke="#ffe4bf" />
        <rect x="320" y="0" width="120" height="40" rx="8" fill="#f6faf9" stroke="#e1efea" />
      </g>
    </g>

    {/* Floating document / analysis icon */}
    <g transform="translate(620,360)">
      <rect x="0" y="0" width="120" height="80" rx="12" fill="#fff" filter="url(#shadow)" />
      <rect x="16" y="16" width="88" height="10" rx="5" fill="#ff9401" />
      <rect x="16" y="36" width="64" height="10" rx="5" fill="#0d3731" />
      <rect x="16" y="56" width="72" height="10" rx="5" fill="#d9e8e2" />
    </g>
  </Box>
);

const TopNotch = () => {
      const handleCalendlyClick = () => {
window.open("/contact", "_blank", "noopener,noreferrer");}
  return (
    <Box sx={{ py: { xs: 8, md: 6 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: 6,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Content */}
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
                mb: 2,
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(180deg, #0d3731 0%, #0d3731 40%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Maximize Your Financial Reporting & Analysis with an Outsourced
              Financial Controller
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
              A Certified Financial Controller leads your accounting controller
              service, ensuring compliance, accurate and timely financial
              records, detailed reporting and analysis, and efficient processes
              that support the entire operation.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
               onClick={handleCalendlyClick}
                variant="contained"
                sx={{
                  backgroundColor: "#ff9401",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  py: 1.3,
                  textTransform: "none",
                  fontFamily: "'Poppins', sans-serif",
                  "&:hover": { backgroundColor: "#e68300" },
                }}
              >
                💼 Schedule Your Free Consultation
              </Button>

              <Typography
                sx={{
                  mt: { xs: 2, sm: 0 },
                  fontWeight: 500,
                  color: "#0d3731",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                ⏰ Hurry! The trial ends in 48 hours.
              </Typography>
            </Box>
          </Box>

          {/* Right Column - Vector */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FinancialControllerIllustration />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopNotch;
