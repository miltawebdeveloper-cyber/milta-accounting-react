// src/components/aboutComp/JoinMilta.jsx
import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import JoinImage from "../../assets/join-milta.jpg"; // replace with your actual image path

const JoinMilta = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "#f8fff9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          alignItems="stretch"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Column - Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={JoinImage}
              alt="Join Milta Team"
              sx={{
                width: "100%",
                height: { xs: 250, sm: 350, md: 500 },
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Right Column - Content */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              px: { xs: 3, sm: 5, md: 6 },
              py: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "2.2rem" },
                background:
                  "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join Milta – Innovate, Grow, and Dream with Us!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333",
                lineHeight: 1.8,
                mb: 2,
                fontFamily: "'Poppins', sans-serif",
                textAlign: "justify",
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              For 15+ years, Milta has empowered global businesses including
              Fortune 100 companies across US countries, with a focus on
              US-based clients through Finance & Accounting, IT, and Revenue
              Cycle Management solutions. Based in Coimbatore, a vibrant,
              business-friendly city in South India, our team of 50+
              professionals blends expertise with creativity to deliver results
              that matter.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333",
                lineHeight: 1.8,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
                textAlign: "justify",
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              At Milta, you’ll tackle exciting challenges, voice bold ideas, and
              grow in a collaborative “family” culture. We’re passionate about
              innovation, sustainability, and building a tech-driven future that
              inspires pride. Whether you’re a problem-solver, strategist, or
              visionary, here’s your chance to partner with US clients, break
              boundaries, and create impact.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1a8f5a",
                textTransform: "none",
                fontWeight: 600,
                px: { xs: 3, sm: 4 },
                py: 1.2,
                borderRadius: 3,
                fontFamily: "'Poppins', sans-serif",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  backgroundColor: "#146c44",
                },
              }}
            >
              See All Open Positions
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default JoinMilta;
