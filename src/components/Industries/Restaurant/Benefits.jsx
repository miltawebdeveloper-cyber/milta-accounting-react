import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BenefitsSection = ({
title = "What’s Included in Milta’s Restaurant Bookkeeping Service",
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
{title} </Typography>


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




const restaurantBenefits = [
{
title: "Daily Sales & Expense Recording",
description:
"We track every sale and expense daily, from food and beverage sales to dine-in versus delivery revenue. Transactions are categorized for real-time financial visibility, helping you identify trends and unusual spending early.",
},
{
title: "Vendor Invoice Management",
description:
"Milta manages invoices from all your restaurant vendors—ingredients, beverages, and supplies—ensuring payments are tracked, matched, and reconciled to avoid missed or duplicate payments.",
},
{
title: "Tip Tracking & Payroll Reports",
description:
"We handle payroll for tipped employees, including tip pooling, tax withholdings, and compliance with wage laws. Detailed payroll reports keep your restaurant audit-ready and accurate.",
},
{
title: "Inventory & COGS Calculation",
description:
"Our team monitors inventory purchases and usage while calculating your Cost of Goods Sold (COGS), helping you understand food cost percentages and minimize waste or theft.",
},
{
title: "Cash Flow Monitoring",
description:
"Milta tracks your inflows (sales) and outflows (payroll, rent, vendor bills) to maintain strong cash flow management—crucial for restaurants operating on thin margins.",
},
{
title: "Tax Returns for Restaurant Filing",
description:
"We prepare and file all relevant taxes—sales, payroll, and income—on time. Our team reduces the risk of errors, missed deadlines, and penalties while maximizing compliance.",
},
{
title: "Custom Financial Statements",
description:
"We deliver clear and insightful financial reports, including Profit & Loss Statements, Balance Sheets, and Cash Flow Statements, helping with strategic decisions and lender or investor needs.",
},
];



const RestaurantBenefits = () => {
return ( <BenefitsSection
   benefits={restaurantBenefits}
   title="What’s Included in Milta’s Restaurant Bookkeeping Service"
   bgColor="#f4f8ee"
 />
);
};

export default RestaurantBenefits;
