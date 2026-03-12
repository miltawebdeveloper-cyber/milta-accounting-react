// src/components/servicesComp/taxServices/Benefits.jsx
import React from "react";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefits = [
  {
    title: "Expert Knowledge and Experience",
    desc: "At Milta, our team of tax professionals has extensive experience handling complex tax scenarios. We stay updated on the latest tax laws and regulations to ensure compliance and optimal results for our clients.",
    points: [
      "Minimized risk of errors or audits.",
      "Accurate application of deductions and credits.",
      "Strategic tax planning and preparation services for future savings.",
    ],
  },
  {
    title: "Time and Cost Efficiency",
    desc: "Filing taxes can be time-consuming and stressful. Milta streamlines the process, saving you valuable time and reducing costs associated with errors or penalties.",
    points: [
      "Hassle-free tax filing service.",
      "Timely reminders and follow-ups to avoid missed deadlines.",
      "Competitive pricing without compromising quality.",
    ],
  },
  {
    title: "Maximum Refunds and Minimized Liabilities",
    desc: "Our experts work tirelessly to identify every eligible deduction and credit, ensuring you pay only what you owe and get the maximum refund possible.",
    points: [
      "In-depth analysis of your financial data.",
      "Strategic planning to reduce taxable income.",
      "Application of industry-specific tax benefits.",
    ],
  },
  {
    title: "Secure and Confidential",
    desc: "We prioritize safeguarding the security and confidentiality of your financial information. With advanced encryption, we ensure your data is protected throughout the preparation and filing process.",
    points: [
      "End-to-end data encryption.",
      "Compliance with data protection laws.",
      "Trusted by clients across industries.",
    ],
  },
  {
    title: "Personalized Attention",
    desc: "Every client is unique. We provide dedicated, one-on-one support with customized strategies tailored to your financial goals.",
    points: [
      "Dedicated account managers.",
      "Goal-based personalized plans.",
      "Clear and transparent communication.",
    ],
  },
  {
    title: "Year-Round Support",
    desc: "Tax planning doesn’t end after filing season. Milta offers year-round support to help you stay on top of your financial obligations and plan for the future.",
    points: [
      "Quarterly estimated tax payments.",
      "Tax planning and consultation.",
      "Ongoing IRS/state correspondence assistance.",
    ],
  },
];

const Benefits = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fdbe0005" }}>
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
            Benefits of Choosing{" "}
            <Box component="span" sx={{ color: "#ff9401" }}>
              Tax Services in the USA
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
            When you choose Milta for your tax preparation service and filing
            needs, you gain access to a wealth of benefits designed to make tax
            season stress-free and financially rewarding.
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
