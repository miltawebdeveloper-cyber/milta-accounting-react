import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

const steps = [
  { title: "Sign up", description: "It's Free!" },
  { title: "Post jobs in minutes", description: "Create and post anywhere..." },
  { title: "Review your staff", description: "View bios, reviews, and rosters..." },
];

function HowItWorks() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;
