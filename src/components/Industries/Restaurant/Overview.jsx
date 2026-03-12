import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import StylishDividerText from "../../homeComp/StylishDividerText";

const RestaurantBookkeepingLayout = () => {
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
Bookkeeping & Accounting Services for Small Restaurants </Typography>

    {/* Introductory Paragraphs */}
    <Stack spacing={2.5} sx={{ mb: 6 }}>
      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        Running a small restaurant is no easy task; you’re balancing food quality,
        customer satisfaction, and daily operations. Disorganized financials can cause
        stress, lead to mistakes, and prevent your business from seizing new
        opportunities. At Milta, we provide expert accounting and bookkeeping for small
        restaurant businesses to help you stay organized, compliant, and profitable.
      </Typography>

      <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
        Whether you’re managing a single-location café, a cozy diner, or a
        family-owned restaurant, our best restaurant bookkeeping services ensure that
        your books are accurate, your taxes are filed on time, and your business stays
        financially healthy.
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
      Why Bookkeeping Matters for Small Restaurant Businesses
    </Typography>

    {/* Key Elements List */}
    <Stack spacing={3}>
      {[
        {
          title: "1. Daily Sales Tracking",
          text: "Your daily income is tracked and categorized by Milta according to meal type, time slot, or service channel. Our specialized bookkeeping for restaurant businesses helps you understand peak hours, customer preferences, and profitable menu items.",
        },
        {
          title: "2. Inventory & Cost Control",
          text: "In a small restaurant, every ounce and dollar counts. Inventory tracking and cost-of-goods-sold (COGS) calculations are part of our restaurant bookkeeping solution, which helps you eliminate waste and control food costs.",
        },
        {
          title: "3. Expense Monitoring",
          text: "From payroll and food purchases to rent and utility bills, we record and classify every transaction. Our accounting for small restaurant business clients gains full visibility into their spending to improve cash management and budgeting.",
        },
        {
          title: "4. Cash Flow Management",
          text: "Cash flow is critical in the restaurant industry. Milta helps small restaurant owners track cash inflows and outflows, ensuring they can cover payroll, vendor payments, and day-to-day costs without falling behind.",
        },
        {
          title: "5. Tax Compliance",
          text: "Avoid costly IRS penalties and sales tax complications. Milta handles complete tax return preparation and filing for restaurant businesses—including income tax, sales tax, and payroll tax—ensuring full compliance and peace of mind.",
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

export default RestaurantBookkeepingLayout;
