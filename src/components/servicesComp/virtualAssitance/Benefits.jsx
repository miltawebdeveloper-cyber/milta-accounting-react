// src/components/servicesComp/virtualAssistant/Benefits.jsx
import React from "react";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  {
    title: "Cost Savings",
    desc: "Partnering with Miltafs helps you significantly cut operational expenses while maintaining high-quality standards.",
    points: [
      "Save on recruitment, training, and employee benefits.",
      "Pay only for the services or hours you require.",
      "Reduce operational costs without compromising on quality.",
    ],
  },
  {
    title: "Increased Productivity",
    desc: "Boost your company’s performance by delegating time-consuming tasks to our skilled virtual assistants.",
    points: [
      "Focus on your business’s core operations while delegating repetitive tasks.",
      "Access experienced professionals skilled in various domains.",
      "Improve turnaround times with efficient task handling.",
    ],
  },
  {
    title: "Expert Support",
    desc: "Gain access to qualified professionals with expertise in multiple business support areas.",
    points: [
      "Professionals skilled in accounting, bookkeeping, and customer support.",
      "Trained in the latest tools and technologies.",
      "Dedicated to delivering top-notch performance and accuracy.",
    ],
  },
];

const Benefits = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fffefb" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1300px !important",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            Benefits of{" "}
            <Box component="span" sx={{ color: "#ff9401" }}>
              Virtual Assistant Services in the USA
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "900px",
              mx: "auto",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Partnering with Miltafs offers a multitude of advantages that help
            small businesses scale efficiently, cut costs, and enhance
            productivity — all while ensuring quality and reliability.
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 370,
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ff9401",
                    fontWeight: 600,
                    mb: 1.5,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#333",
                    mb: 2,
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {benefit.desc}
                </Typography>

                <Stack spacing={1}>
                  {benefit.points.map((point, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: "#ff9401",
                          mr: 1.2,
                          mt: "3px",
                          fontSize: 20,
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#444",
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
