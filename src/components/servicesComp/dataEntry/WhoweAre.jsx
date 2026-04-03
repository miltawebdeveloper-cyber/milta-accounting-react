// src/components/servicesComp/bookKeeping/TopNotch.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

const AccountingIllustration = (props) => (
  <Box
    component="svg"
    viewBox="0 0 800 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    sx={{
      width: "100%",
      height: "auto",
      maxWidth: 420,
      display: "block",
      ...props.sx,
    }}
  >
    {/* Soft background shape */}
    <defs>
      <linearGradient id="g1" x1="0" x2="1">
        <stop offset="0%" stopColor="#eaf7f0" />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
      <linearGradient id="g2" x1="0" x2="1">
        <stop offset="0%" stopColor="#ffefdc" />
        <stop offset="100%" stopColor="#fff4e6" />
      </linearGradient>
      <linearGradient id="accent" x1="0" x2="1">
        <stop offset="0%" stopColor="#0d3731" />
        <stop offset="100%" stopColor="#ff9401" />
      </linearGradient>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="18" floodColor="#111" floodOpacity="0.06" />
      </filter>
    </defs>

    {/* large rounded panel */}
    <rect x="20" y="40" width="760" height="520" rx="30" fill="url(#g1)" />

    {/* left desk / laptop group */}
    <g transform="translate(120,130)">
      <rect x="0" y="0" width="320" height="220" rx="12" fill="#fff" filter="url(#soft)" />
      {/* laptop screen */}
      <rect x="20" y="18" width="280" height="120" rx="8" fill="#f7faf7" />
      <g transform="translate(36,36)">
        <rect x="0" y="0" width="120" height="10" rx="4" fill="#e6f0ea" />
        <rect x="0" y="24" width="180" height="10" rx="4" fill="#dcebe0" />
        <rect x="0" y="48" width="140" height="10" rx="4" fill="#e6f0ea" />
      </g>
      {/* keyboard / base */}
      <rect x="24" y="150" width="272" height="20" rx="6" fill="#f1f5f3" />
      {/* small chart on the laptop */}
      <g transform="translate(180,40)">
        <rect x="0" y="24" width="10" height="36" rx="2" fill="#cfeadf" />
        <rect x="18" y="12" width="10" height="48" rx="2" fill="#9edfc9" />
        <rect x="36" y="0" width="10" height="60" rx="2" fill="#66c3a8" />
      </g>
    </g>

    {/* right documents / list */}
    <g transform="translate(480,120)">
      <rect x="0" y="0" width="220" height="160" rx="12" fill="url(#g2)" filter="url(#soft)" />
      <rect x="18" y="20" width="184" height="18" rx="8" fill="#fff" />
      <rect x="18" y="46" width="140" height="12" rx="6" fill="#fff" />
      <rect x="18" y="68" width="160" height="12" rx="6" fill="#fff" />
      <rect x="18" y="90" width="120" height="12" rx="6" fill="#fff" />
      {/* dollar / badge */}
      <circle cx="190" cy="130" r="14" fill="#fff" />
      <path d="M190 122 a8 8 0 1 0 0 16 a8 8 0 1 0 0 -16" fill="url(#accent)" />
    </g>

    {/* foreground decorative bar/chart */}
    <g transform="translate(160,360)">
      <rect x="0" y="0" width="480" height="120" rx="14" fill="#fff" />
      <g transform="translate(28,18)">
        <rect x="0" y="10" width="18" height="72" rx="6" fill="#e6f0ea" />
        <rect x="36" y="0" width="18" height="82" rx="6" fill="#cfeadf" />
        <rect x="72" y="34" width="18" height="48" rx="6" fill="#9edfc9" />
        <rect x="108" y="8" width="18" height="74" rx="6" fill="#66c3a8" />
        <rect x="144" y="22" width="18" height="60" rx="6" fill="#40ad87" />
        <rect x="180" y="0" width="18" height="82" rx="6" fill="url(#accent)" />
        <text x="230" y="96" fontSize="12" fill="#8aa79f" fontFamily="Poppins, sans-serif">Monthly entries</text>
      </g>
    </g>

    {/* subtle corner accent */}
    <circle cx="40" cy="520" r="10" fill="rgba(13,55,49,0.08)" />
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
            flexDirection: { xs: "column-reverse", md: "row" }, // image below on mobile
            gap: 6,
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
                mb: 1,
                background:
                  "linear-gradient(180deg, #0d3731 0%, #0d3731 40%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Who We Are and What We Do
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
                mb: 3,
                px: { xs: 0, md: 0 },
              }}
            >
              Welcome to Milta, your trusted partner for accurate and reliable accounting data
              entry services modified specifically for small—and medium-scale businesses across the
              USA. We know how precious your time is as a small company owner. We focus on delivering
              efficient, affordable, and high-quality accounting data entry services in the USA to
              simplify your operations. With years of experience managing financial data, our team
              ensures that your records are precise, compliant, and up-to-date, empowering you to
              make informed decisions confidently.
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
              Our comprehensive service range includes everything from data collection to
              reconciliation and reporting. We cater exclusively to the unique needs of small
              businesses, ensuring that your financial data is managed with professionalism and care.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
              }}
            >

             
            </Box>
          </Box>

          {/* Right Column - Inline Vector Illustration */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccountingIllustration sx={{}} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopNotch;
