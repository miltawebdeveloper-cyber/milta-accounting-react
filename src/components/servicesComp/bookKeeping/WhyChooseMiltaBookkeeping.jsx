import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    title: "Accurate Record Keeping",
    description:
      "We maintain precise and error-free financial records to help you focus on growing your business.",
  },
  {
    title: "Timely Reporting",
    description:
      "Get financial reports delivered on time, every time — helping you make informed business decisions.",
  },
  {
    title: "Expert Support",
    description:
      "Our team provides continuous support for all your bookkeeping and financial queries.",
  },
  {
    title: "Affordable Pricing",
    description:
      "High-quality bookkeeping services designed to fit every business budget.",
  },
];

function WhyChooseMiltafs() {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* ✅ Heading Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 1.5,
              pt: { xs: 1, md: 2 }, // reduced top space
              fontSize: { xs: "1.7rem", md: "2.25rem" },
              background:
                "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Miltafs’s Bookkeeping Services?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.7,
              maxWidth: "700px",
              mx: "auto",
              px: { xs: 2, md: 4 },
            }}
          >
            There are many bookkeeping services available, but why choose
            Miltafs? Here’s what sets us apart:
          </Typography>
        </Box>

        {/* ✅ Cards Section */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} display="flex" justifyContent="center">
              <Paper
                elevation={3}
                sx={{
                  width: "400px", // fixed card width
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <CheckCircleIcon
                  sx={{ fontSize: 40, color: "hsl(150, 60%, 35%)", mb: 1 }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyChooseMiltafs;
