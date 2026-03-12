import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BenefitsSection = ({
  title = "Benefits of Property Management Bookkeeping Services",
  benefits = [],
  bgColor = "#F9F9F9",
  maxWidth = "1300px",
}) => {
  return (
    <Box sx={{ pt: { xs: 6, md: 7 }, pb: { xs: 0, md: 0 }, backgroundColor: bgColor }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#1d4230",
            fontFamily: "'Poppins', sans-serif",
            mb: 6,
          }}
        >
          {title}
        </Typography>

        {/* Benefit Grid */}
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: "#1d4230", mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        color: "#1d4230",
                      }}
                    >
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit.description}
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

// -------------------------- //
//      BENEFIT DATA          //
// -------------------------- //
const propertyManagementBenefits = [
  {
    title: "Accurate Financial Records",
    description:
      "Every rent payment, vendor invoice, or repair cost is recorded properly. This level of precision helps you stay audit-ready and organized.",
  },
  {
    title: "Transparent Financial Reporting",
    description:
      "Get clear monthly or quarterly reports that help you understand the performance of each property. These reports are essential for smart forecasting and planning.",
  },
  {
    title: "Tax Planning Made Easy",
    description:
      "With professional support in real estate tax planning, you can claim every eligible deduction. We also offer tax planning for real estate agents and tax planning for property developers to reduce liabilities and improve tax efficiency.",
  },
  {
    title: "Cost and Time Efficiency",
    description:
      "Skip the cost and complexity of hiring internally—partner with experienced professionals for your real estate bookkeeping needs. It reduces overhead and lets you focus on what you do best, growing your business.",
  },
];

// -------------------------- //
//     EXPORT COMPONENT       //
// -------------------------- //
const PropertyManagementBenefits = () => {
  return (
    <BenefitsSection
      benefits={propertyManagementBenefits}
      title="Benefits of Property Management Bookkeeping Services"
      bgColor="#f4f8ee"
    />
  );
};

export default PropertyManagementBenefits;
