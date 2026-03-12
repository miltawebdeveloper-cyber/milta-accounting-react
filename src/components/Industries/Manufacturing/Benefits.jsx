import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BenefitsSection = ({
title = "Benefits of Bookkeeping and Accounting in Manufacturing",
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



const manufacturingBenefits = [
{
title: "Better Financial Visibility",
description:
"Gain real-time insights into production costs, inventory levels, and sales performance. With accurate financial data, business owners can make faster and smarter operational decisions.",
},
{
title: "Improved Profit Margins",
description:
"Identify key cost drivers and areas of inefficiency to reduce waste, manage overheads, and enhance overall profitability across your manufacturing operations.",
},
{
title: "Accurate Tax Planning",
description:
"Stay compliant with federal and state tax laws while taking full advantage of eligible manufacturing deductions and credits—reducing tax liabilities and improving cash flow.",
},
{
title: "Strategic Resource Allocation",
description:
"Use detailed accounting data to allocate labor, materials, and capital efficiently—helping streamline production cycles and maximize output with minimal waste.",
},
{
title: "Enhanced Investor Confidence",
description:
"Maintain transparency with clear, accurate, and timely financial reporting that builds trust with investors, lenders, and other key stakeholders.",
},
];

const ManufacturingBenefits = () => {
return ( <BenefitsSection
   benefits={manufacturingBenefits}
   title="Benefits of Bookkeeping and Accounting in Manufacturing"
   bgColor="#f4f8ee"
 />
);
};

export default ManufacturingBenefits;
