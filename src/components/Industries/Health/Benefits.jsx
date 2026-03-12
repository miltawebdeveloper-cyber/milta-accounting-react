import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BenefitsSection = ({
  title = "Reliable Healthcare Accounting Services by Milta",
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
                    <CheckCircleOutlineIcon sx={{ color: "#ff7b00", mr: 1 }} />
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

// ✅ Updated Benefits Content
const healthcareBenefits = [
  {
    title: "Time and Cost Savings",
    description:
      "Outsourcing your accounting for healthcare professionals allows you to focus on what truly matters—providing exceptional patient care. Our accounting solutions save valuable time and reduce operational costs by eliminating the need for in-house staff, extensive training, and expensive accounting software.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "With detailed financial reports, KPIs, and cost analyses tailored to the healthcare sector, you gain actionable insights that support smart business decisions. Our reports empower you to identify profitable services, control expenses, allocate budgets effectively, and plan future growth with confidence.",
  },
  {
    title: "Access to Specialized Expertise and Technology",
    description:
      "Unlike general accountants, healthcare accounting firms understand the complexities of medical finance. Our team combines specialized knowledge with advanced technology—such as cloud-based systems and automated bookkeeping—to deliver accuracy, efficiency, and scalability without significant upfront investment.",
  },
];

const HealthcareBenefits = () => {
  return (
    <BenefitsSection
      benefits={healthcareBenefits}
      title="Benefits of Accounting Services for Healthcare Professionals"
      bgColor="#f4f8ee"
    />
  );
};

export default HealthcareBenefits;
