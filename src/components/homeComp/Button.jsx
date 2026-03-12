import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to top, hsla(229, 76%, 66%, 1), rgba(118, 75, 162, 1))",
        color: "#fff",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Find Your Next Career Here
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              Explore our open positions to find roles that align with your
              interests and expertise.
            </Typography>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Find Works
            </Button>
            <Button variant="outlined" size="large" sx={{ color: "#fff", borderColor: "#fff" }}>
              Hire Talents Now
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/hero-image.png"
              alt="Hero"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
