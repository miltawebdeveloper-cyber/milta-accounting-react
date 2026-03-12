import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BenefitsSection = ({
  title = "Benefits of Outsourcing Law Firm Bookkeeping",
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

const lawFirmBenefits = [
  {
    title: "Specialized Expertise in Legal Accounting",
    description:
      "Our team understands the complexities of law firm accounting, including trust fund management, retainers, client escrow accounts, and partner distributions. We ensure every dollar is tracked accurately and ethically.",
  },
  {
    title: "Compliance with Legal and Tax Regulations",
    description:
      "Milta ensures your books comply with IOLTA trust accounting rules, IRS standards, and local bar association requirements. Stay compliant and ready for audits with zero stress.",
  },
  {
    title: "Strategic Tax Planning & Preparation",
    description:
      "We help law firms reduce tax liabilities through strategic planning, accurate quarterly estimates, and year-end filings. Our proactive approach maximizes deductions while maintaining compliance.",
  },
  {
    title: "Integration with Legal Practice Management Software",
    description:
      "Milta seamlessly integrates with industry tools like Clio, LEAP, and MyCase—syncing your accounting and case management systems for real-time financial insights.",
  },
  {
    title: "Cost-Effective Outsourcing Solution",
    description:
      "Save on in-house accounting expenses by outsourcing to Milta. We provide professional bookkeeping at a fraction of the cost—without sacrificing accuracy or control.",
  },
  {
    title: "Accurate Financial Insights for Decision-Making",
    description:
      "Gain access to detailed profitability reports, trust fund balances, and partner performance metrics that empower informed business decisions and long-term growth.",
  },
];

const LawFirmBenefits = () => {
  return (
    <BenefitsSection
      benefits={lawFirmBenefits}
      title="Benefits of Outsourcing Law Firm Bookkeeping"
      bgColor="#f4f8ee"
    />
  );
};

export default LawFirmBenefits;

