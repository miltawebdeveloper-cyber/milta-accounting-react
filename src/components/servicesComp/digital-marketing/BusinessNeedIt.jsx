// src/components/servicesComp/bookKeeping/BookkeepingIntro.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const BookkeepingIntro = () => {
  const points = [
    {
      title: "Accurate Financial Tracking",
      desc: "Professional bookkeeping ensures every income and expense is recorded correctly, giving you accurate financial statements for smarter decisions.",
      img: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    },
    {
      title: "Organized Record Management",
      desc: "Keep invoices, receipts, payroll, tax documents, and expense records organized and audit-ready without the stress of manual paperwork.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Better Cash Flow Insights",
      desc: "Track your business cash flow effortlessly, identify gaps early, and maintain a stable financial position with clear visibility.",
      img: "https://cdn-icons-png.flaticon.com/512/5992/5992494.png",
    },
    {
      title: "Compliance & Error-Free Reports",
      desc: "Stay compliant with GST, taxation rules, and financial regulations through accurate bookkeeping and zero-error reporting.",
      img: "https://cdn-icons-png.flaticon.com/512/3208/3208753.png",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 5 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.5,
            color: "#113c34",
            mb: 0,
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Why Are Bookkeeping Services Important?
          <br /> And How Do They Help Your Business Grow?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            textAlign: "center",
            lineHeight: 1.9,
            maxWidth: "850px",
            mx: "auto",
            mb: 8,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Bookkeeping is the foundation of every successful business. Proper
          financial tracking helps you stay compliant, understand your business
          performance, and make accurate financial decisions—without unnecessary
          stress or errors.
        </Typography>

        {/* Two-column Feature Grid */}
        <Grid container spacing={4} justifyContent="center">
          {points.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  px: 3,
                  py: 5,
                  height: "100%",
                  background: "linear-gradient(to top, #ffffff, #f9fdf9)",
                  border: "1px solid #e8efe8",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    objectFit: "contain",
                  }}
                />

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#113c34",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.7,
                      maxWidth: "400px",
                      mx: "auto",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BookkeepingIntro;
