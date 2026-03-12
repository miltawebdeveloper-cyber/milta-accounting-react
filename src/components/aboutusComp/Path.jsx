import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const pathSteps = [
  {
    title: "Understanding Your Goals",
    description:
      "We begin by learning your business needs, challenges, and financial objectives.",
  },
  {
    title: "Building the Right Plan",
    description:
      "Our team designs customized accounting and bookkeeping solutions that align with your goals.",
  },
  {
    title: "Consistent Execution",
    description:
      "We handle daily operations with precision, ensuring smooth and accurate financial management.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We track progress, share insights, and adapt our strategies as your business grows.",
  },
];

const OurPathTimelineVertical = () => {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#f4f8ee"
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#2e7d32", // darker green for title
            fontFamily: "'Poppins', sans-serif",
            mb: 3,
            textAlign: "center",
          }}
        >
          Our Path to Success
        </Typography>

        <Typography
          sx={{
            color: "#4b7350", // muted green for description
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.8,
            mb: 6,
            textAlign: "center",
          }}
        >
          We work closely with you to understand your business, build a customized plan, 
          execute consistently, and continuously improve strategies for sustainable growth.
        </Typography>

        {/* Timeline Steps in 2-card rows */}
        <Grid container spacing={4} justifyContent="center">
          {pathSteps.map((step, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 500,
                  p: 3,
                  borderLeft: "4px solid #f09d22ff", // green accent border
                  pl: 2,
                  
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#2e7d32", // darker green for card title
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b7350", // muted green for text
                    lineHeight: 1.7,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurPathTimelineVertical;
