import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import StylishDividerText from "../../homeComp/StylishDividerText";

const RealEstateAccountingLayout = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 5 },
        background: "linear-gradient(180deg, #f9f9f9 0%, #f0f8f5 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "95%", sm: "90%", md: "1000px" },
          color: "#1d4230",
          fontFamily: "'Poppins', sans-serif",
          textAlign: "left",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "#1d4230",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Best Bookkeeping and Accounting Services for Real Estate Agents
        </Typography>

        {/* Introductory Paragraphs */}
        <Stack spacing={2.5} sx={{ mb: 6 }}>
          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Real estate businesses, including agents, investors, and property managers, face unique financial challenges. From development and leasing to property management and investment, every transaction impacts your bottom line. That’s why bookkeeping for real estate professionals is essential to stay organized, compliant, and profitable.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Whether you're focused on residential rentals, commercial developments, or investment properties, our expert team at Milta provides property management bookkeeping services, real estate accounting services, and tax planning for real estate developers customized to your business goals.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            With specialized bookkeeping support, you can simplify complex financial operations, manage your property portfolio efficiently, and ensure every transaction—from tenant rent to vendor payments—is recorded accurately. Our tailored solutions help real estate professionals maintain transparency, streamline cash flow, and make data-driven investment decisions.
          </Typography>
        </Stack>

        {/* Subsection Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: "#1d4230",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Why Real Estate Businesses Need Specialized Bookkeeping
        </Typography>

        {/* Key Elements List */}
        <Stack spacing={3}>
          {[
            {
              title: "1. Market Fluctuations and Financial Stability",
              text: "The real estate market shifts with local and national economic conditions, but the need for property and development remains constant. Consistent, accurate bookkeeping helps you manage revenue streams during both growth and downturn periods.",
            },
            {
              title: "2. Property Management Efficiency",
              text: "Property management bookkeeping ensures that every rent payment, maintenance expense, and vendor invoice is recorded properly. It provides a clear financial snapshot of each property, helping you stay audit-ready and organized.",
            },
            {
              title: "3. Tax Compliance and Planning",
              text: "Bookkeeping for real estate investors and agents helps capture all deductible expenses and ensures timely filing. Strategic tax planning for real estate developers can significantly reduce liabilities and enhance profitability.",
            },
            {
              title: "4. Transparent Financial Reporting",
              text: "Monthly or quarterly reports give you a clear picture of property performance and profitability. These reports are vital for forecasting and making smart investment decisions.",
            },
            {
              title: "5. Cash Flow and Profitability Tracking",
              text: "Accurate financial tracking ensures better cash flow management, so you can meet your obligations, plan future investments, and avoid financial surprises.",
            },
            {
              title: "6. Regulatory Compliance and Risk Management",
              text: "With detailed bookkeeping and documentation, your business remains compliant with tax laws, licensing regulations, and audit requirements, minimizing risks and penalties.",
            },
            {
              title: "7. Streamlined Operations through Technology",
              text: "Cloud-based accounting software like QuickBooks, Xero, and Sage make it easier to automate data entry, generate reports, and access real-time insights from anywhere, improving overall efficiency.",
            },
          ].map((item, index) => (
            <Box key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "#1d4230",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default RealEstateAccountingLayout;
