// src/components/servicesComp/bookKeeping/WhyChooseMiltaBookkeeping.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const WhyChooseMiltaBookkeeping = () => {
  const highlights = [
    {
      title: "Complete Digital Marketing Solutions",
      desc: "Miltafs provides end-to-end digital marketing services including SEO, PPC ads, Social Media Marketing, Email Marketing, Branding, and Content Marketing—everything your business needs under one roof.",
      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", // Digital marketing megaphone
    },
    {
      title: "Expert & Certified Digital Marketers",
      desc: "Our experienced team stays updated with the latest marketing trends, tools, and algorithm changes. We execute proven strategies to boost conversions, engagement, and brand visibility.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Team/Expert icon
    },
    {
      title: "High-ROI Marketing Strategies",
      desc: "Every brand is unique. Our data-backed, personalized marketing plans focus on measurable results such as higher lead generation, increased sales, and better campaign performance.",
      icon: "https://cdn-icons-png.flaticon.com/512/9425/9425419.png", // ROI growth arrow
    },
    {
      title: "Analytics-Driven Marketing & Transparent Reporting",
      desc: "With real-time analytics, campaign tracking, and monthly reports, we ensure full transparency. You can clearly see what's working and where improvements are made.",
      icon: "https://cdn-icons-png.flaticon.com/512/3917/3917754.png", // Analytics dashboard
    },
    {
      title: "Proven Results & Strong Portfolio",
      desc: "Miltafs has successfully enhanced the digital presence of businesses across multiple industries. Our case studies and client feedback reflect our commitment to performance.",
      icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png", // Trophy/Success
    },
    {
      title: "Dedicated Support for Business Growth",
      desc: "We work as your extended marketing team. With continuous support, improvement strategies, and growth-focused insights, we help your business scale faster.",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png", // Growth/teamwork
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Centered Heading and Description */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              background:
                "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Miltafs for Digital Marketing Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.8,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Accelerate your brand visibility, attract the right audience, and
            scale your business with Miltafs — a trusted digital marketing
            partner committed to delivering measurable and impactful results.
          </Typography>
        </Box>

        {/* 2-Point Rows */}
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#f8faf8",
                  borderRadius: 3,
                  p: { xs: 3, sm: 4 },
                  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: 70,
                    height: 70,
                    objectFit: "contain",
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 3 },
                  }}
                />

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "'Poppins', sans-serif",
                      mb: 1,
                      color: "#093028",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseMiltaBookkeeping;
