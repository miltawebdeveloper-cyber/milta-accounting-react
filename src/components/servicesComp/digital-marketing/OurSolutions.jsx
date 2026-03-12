// src/components/servicesComp/bookKeeping/OurSolutions.jsx
import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    list: [
      "Long-term growth using ethical SEO methods.",
      "On and off-page optimization.",
      "Research keywords to achieve desired rankings.",
      "Performance monitoring with Google Search Console.",
    ],
  },
  {
    title: "Technical SEO",
    list: [
      "Optimization of website performance and speed.",
      "HTTPS, crawl error solutions, and redirects.",
      "Organized data to improve indexability.",
      "Removal of duplicate content.",
    ],
  },
  {
    title: "Link Building",
    list: [
      "Outreach for backlinks with high authority.",
      "PR collaborations and guest blogging.",
      "Content-based link building.",
      "Increasing authority will enhance rankings more quickly.",
    ],
  },
  {
    title: "Web Design & Development",
    list: [
      "Mobile-friendly, SEO-ready design.",
      "High-performance pages with clear CTAs.",
      "User-focused layouts that drive conversions.",
      "Fast, secure, and visually compelling websites.",
    ],
  },
  {
    title: "Social Media Marketing",
    list: [
      "Audience insight analysis.",
      "Organic + paid campaigns.",
      "Brand visibility & engagement growth.",
      "Platform-specific content strategies.",
    ],
  },
  {
    title: "PPC Management",
    list: [
      "Data-driven Google Ads campaigns.",
      "ROI-focused bidding strategies.",
      "Conversion-optimized ad copy.",
      "Performance tracking & refinement.",
    ],
  },
  {
    title: "Content Writing",
    list: [
      "SEO-optimized blogs & website copy.",
      "Strong headlines & keyword strategy.",
      "Engaging, clear & conversion-focused content.",
      "Compliant with search engine best practices.",
    ],
  },
  {
    title: "Email Marketing",
    list: [
      "Personalized campaign messaging.",
      "Deliverability-optimized execution.",
      "A/B testing to maximize engagement.",
      "Customer-driven copy that converts.",
    ],
  },
];

const OurSolutions = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 7 },
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #0a1a13, #132d22)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
            color: "#ff9401",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Milta Digital Marketing Services
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
            color: "#fffdfb",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Become Known as the Industry Leader and Increase Profitability
        </Typography>

        {/* Grid */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",            // ensures equal height
                  maxWidth: 400,
                  mx: "auto",
                  p: 4,
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",

                  // Glass effect
                  background: "rgba(255, 255, 255, 0.07)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",

                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    border: "1px solid #ff9401",
                    background: "rgba(255, 255, 255, 0.12)",
                  },
                }}
              >
                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#ff9401",
                    mb: 2,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                {/* List */}
                <Stack spacing={1.2} sx={{ flexGrow: 1 }}>
                  {service.list.map((item, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="flex-start">
                      <CheckCircleIcon sx={{ color: "#ff9401", fontSize: 20, mt: "2px" }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#f8f8f8",
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurSolutions;
