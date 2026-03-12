import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StylishDividerText from "../homeComp/StylishDividerText";

const strengths = [
  {
    title: "Experienced Team",
    description:
      "Skilled accounting and finance professionals with years of industry expertise.",
  },
  {
    title: "Client-Centered Approach",
    description:
      "We focus on understanding your business to deliver truly personalized solutions.",
  },
  {
    title: "Proven Reliability",
    description:
      "Trusted by 100+ clients across 12 countries for consistent, high-quality service.",
  },
  {
    title: "Advanced Technology",
    description:
      "We use modern tools and secure systems to ensure accuracy and efficiency.",
  },
  {
    title: "Global Reach",
    description:
      "Supporting businesses of all sizes — from small startups to Fortune 500 companies.",
  },
];

const cardHeight = 320;
const cardWidth = 380;

const OurStrengthsSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 4 }, backgroundColor: "#f4f8ee" }}>
      <Box sx={{ maxWidth: "1300px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <StylishDividerText text="Our Strength" color="#0d3731" />
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: "#0d3731",
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            mb: { xs: 6, sm: 8 },
          }}
        >
          Why Businesses Choose Milta
        </Typography>

        {/* First Row: 3 Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: { xs: "wrap", md: "nowrap" }, // wrap on mobile only
            mb: 6,
          }}
        >
          {strengths.slice(0, 3).map((strength, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                width: { xs: "100%", md: cardWidth },
                height: cardHeight,
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "#fff",
                borderLeft: "5px solid #ff9401",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#ff9401",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  mb: 2,
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 28 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#0d3731",
                  mb: 1.5,
                  fontSize: "1.25rem",
                }}
              >
                {strength.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#555" }}>
                {strength.description}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Second Row: 2 Cards Centered */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            pb:5,
            flexWrap: { xs: "wrap", sm: "nowrap" }, // wrap on mobile only
          }}
        >
          {strengths.slice(3).map((strength, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                width: { xs: "100%", sm: cardWidth },
                height: cardHeight,
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "#fff",
                borderLeft: "5px solid #ff9401",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#ff9401",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  mb: 2,
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 28 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#0d3731",
                  mb: 1.5,
                  fontSize: "1.25rem",
                }}
              >
                {strength.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: "#555" }}>
                {strength.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurStrengthsSection;
