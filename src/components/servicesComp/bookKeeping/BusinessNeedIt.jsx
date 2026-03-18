// src/components/servicesComp/bookKeeping/BookkeepingIntro.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";

const BookkeepingIntro = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const points = [
    {
      title: "Track Income & Expenses",
      desc: "Stay organized and informed by keeping accurate records of all your business transactions.",
      img: "https://img.freepik.com/free-vector/bookkeeping-concept-illustration_114360-9329.jpg",
    },
    {
      title: "Stress-Free Tax Preparation",
      desc: "Ensure timely and smooth tax filing with well-maintained financial records throughout the year.",
      img: "https://cdn-icons-png.flaticon.com/512/9903/9903664.png",
    },
    {
      title: "Financial Insights for Planning",
      desc: "Gain valuable insights into your company’s performance to make data-driven business decisions.",
      img: "https://img.freepik.com/free-vector/financial-report-concept-illustration_114360-2244.jpg",
    },
    {
      title: "Ensure Legal Compliance",
      desc: "Stay compliant with tax and financial laws while maintaining accurate and transparent records.",
      img: "https://img.freepik.com/free-vector/business-deal-concept-illustration_114360-1823.jpg",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 7, md: 10 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#113c34",
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          What is a Bookkeeping Service <br /> and Why Does Every Business Need It?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            textAlign: "center",
            lineHeight: 1.8,
            maxWidth: "850px",
            mx: "auto",
            mb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 0 },
            fontSize: { xs: "0.95rem", sm: "1rem" },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Bookkeeping involves recording, organizing, and managing a company’s financial
          transactions. It ensures accuracy, supports better decision-making,
          and helps businesses stay compliant with tax and financial regulations.
        </Typography>

        {/* Responsive Grid */}
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
        >
          {points.map((item, i) => (
            <Grid item xs={12} sm={6} md={6} key={i}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  textAlign: "center",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 4, sm: 5 },
                  height: "100%",
                  background: "linear-gradient(to top, #ffffff, #f9fdf9)",
                  border: "1px solid #e8efe8",
                  transition: "0.3s",
                  "&:hover": {
                    transform: { md: "translateY(-5px)" }, // hover only for md+
                    boxShadow: { md: "0 6px 20px rgba(0,0,0,0.08)" },
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  
                  sx={{
                    width: { xs: 90, sm: 110, md: 130 },
                    height: { xs: 90, sm: 110, md: 130 },
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
                      fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.25rem" },
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                      lineHeight: 1.7,
                      maxWidth: "420px",
                      mx: "auto",
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      fontFamily: "'Poppins', sans-serif",
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
