import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const softwareCards = [
  {
    title: "QuickBooks Desktop",
    description:
      "Best for complex accounting, job costing, and businesses needing powerful reporting.",
    image:
      "https://img.freepik.com/free-vector/accounting-software-concept-illustration_114360-8711.jpg",
    url: "/us/software/bookkeeping-with-quickbook-desktop/",
  },
  {
    title: "QuickBooks Online",
    description:
      "Cloud-based solution ideal for growing businesses that need flexibility and real-time access.",
    image:
      "https://img.freepik.com/free-vector/cloud-accounting-concept-illustration_114360-7784.jpg",
    url: "/us/software/bookkeeping-with-quickbook-online/",
  },
  {
    title: "Xero",
    description:
      "Perfect for startups and modern businesses looking for clean UI and automation.",
    image:
      "https://img.freepik.com/free-vector/financial-data-analysis-concept-illustration_114360-8123.jpg",
    url: "/us/software/xero-for-small-business/",
  },
  {
    title: "Wave Accounting",
    description:
      "Free and simple accounting software designed for small businesses and freelancers.",
    image:
      "https://img.freepik.com/free-vector/accounting-finance-concept-illustration_114360-7872.jpg",
    url: "/us/software/wave-accounting-for-small-business/",
  },
];

const AccountingSoftwareSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #0f3d2e 0%, #0b2f23 100%)",
        color: "#f5f5f5",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#f4a000",
              mb: 3,
              fontSize: { xs: "1.9rem", md: "2.8rem" },
            }}
          >
          Why the Right Accounting Software Is Important for Your Business
          </Typography>

          <Typography
            sx={{
              maxWidth: 1320,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.9,
              color: "#e0e0e0",
            }}
          >
            Every successful firm is built on accurate bookkeeping. Whether you are a small business owner, property manager, medical practitioner, eCommerce seller, law firm, or startup, your financial decisions depend on how reliable your books are. At Milta Accounting Services, we work with proven, industry-recognized accounting software to deliver accurate, timely, and audit-ready financial data for our USA clients.
Over the years, we have helped hundreds of U.S.-based businesses streamline their financial processes using software like QuickBooks Desktop, QuickBooks Online, Xero, and Wave Accounting. Each platform offers unique advantages, and we carefully choose the right tool based on your business model, goals, and workflow.
This page explains how we use each accounting tool, why they matter, and how our expertise helps you maintain perfectly managed books with zero stress.

          </Typography>
        </Box>

        {/* Software Cards */}
        <Grid
          container
          spacing={4}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" }, // ✅ mobile wraps, desktop stays single row
          }}
        >
          {softwareCards.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.title}
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  minHeight: 320,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "22px",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  border: "2px solid transparent",
                  transition: "all 0.35s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 22px 50px rgba(244,160,0,0.45)",
                    borderColor: "#f4a000",
                    background:
                      "linear-gradient(180deg, #fff7e6 0%, #ffffff 100%)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    height: 160,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    background: "#fff",
                    borderTopLeftRadius: "22px",
                    borderTopRightRadius: "22px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    textAlign: "center",
                    px: 3,
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: "#0b2f23",
                      transition: "color 0.3s ease",
                      ".MuiCard-root:hover &": {
                        color: "#f4a000",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", pb: 3 }}>
                  <Button
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1,
                      borderRadius: "30px",
                      fontWeight: 600,
                      textTransform: "none",
                      background:
                        "linear-gradient(90deg, #f4a000, #ffbf47)",
                      color: "#0b2f23",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #ffbf47, #f4a000)",
                      },
                    }}
                    onClick={() => navigate(item.url)}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AccountingSoftwareSection;
