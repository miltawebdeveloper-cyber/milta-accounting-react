// src/components/servicesComp/financialController/WhoCanBenefit.jsx
import React from "react";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  "Startups: Establish a strong financial foundation with expert guidance.",
  "Small Businesses: Streamline financial processes and stay focused on growth.",
  "Medium-Sized Enterprises: Optimize financial management with professional insights without the expense of full-time staff.",
];

const WhoCanBenefit = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fffefb" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1300px !important",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Vertical Accent (hidden on mobile) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "6px",
                height: { md: "300px" },
                borderRadius: "10px",
                background:
                  "linear-gradient(180deg, #ffb84d 0%, #ff9401 50%, #e67600 100%)",
                boxShadow: "0 4px 20px rgba(255, 148, 1, 0.4)",
              }}
            />
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#1a1a1a",
                fontFamily: "'Poppins', sans-serif",
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.3,
              }}
            >
              Who Can Benefit from Our{" "}
              <Box component="span" sx={{ color: "#ff9401" }}>
                Services?
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#555",
                mb: 3,
                lineHeight: 1.7,
                textAlign: { xs: "center", md: "left" },
                maxWidth: { xs: "100%", md: "90%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Strengthening Businesses of All Sizes with Expert Financial Guidance.
            </Typography>

            <Stack
              spacing={2}
              sx={{
                mx: { xs: "auto", md: 0 },
                width: { xs: "100%", sm: "90%", md: "85%" },
              }}
            >
              {benefits.map((point, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: "#ff9401",
                      mr: 1.5,
                      mt: "3px",
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#444",
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      textAlign: { xs: "center", md: "left" },
                      maxWidth: "100%",
                    }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoCanBenefit;
