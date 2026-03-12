import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";
import LockIcon from "@mui/icons-material/Lock";

const OutsourcingAdvantages = () => {
const advantages = [
{
icon: <MonetizationOnIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Cost Efficiency",
text: (
<>
Outsourcing eliminates the need for in-house staff and infrastructure, <br />
saving you money on salaries, training, and technology.
</>
),
},
{
icon: <SchoolIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Expertise on Demand",
text: (
<>
Access experienced professionals who specialize in accounting data entry <br />
management services — without recruitment hassles.
</>
),
},
{
icon: <TrendingUpIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Scalability",
text: (
<>
Whether you’re managing a seasonal surge <br /> or expanding operations,
our services scale seamlessly with your needs.
</>
),
},
{
icon: <AccessTimeIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Time Savings",
text: (
<>
Outsourcing frees up your team’s valuable time, <br />
allowing you to focus on core business operations.
</>
),
},
{
icon: <VerifiedIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Accuracy & Compliance",
text: (
<>
Ensure your records are error-free <br /> and compliant with US
accounting standards.
</>
),
},
{
icon: <LockIcon sx={{ fontSize: 44, color: "#063433" }} />,
title: "Secure Data Handling",
text: (
<>
We prioritize your data safety through advanced <br />
encryption and secure file transfer protocols.
</>
),
},
];

return (
<Box
sx={{
py: { xs: 6, md: 7 },
backgroundColor: "#f8eedf",
display: "flex",
justifyContent: "center",
}}
>
<Box
sx={{
width: "100%",
maxWidth: "1300px",
px: { xs: 2, sm: 3, md: 4 },
}}
>
{/* Section Title */}
<Typography
variant="h4"
sx={{
fontWeight: 700,
color: "#063433",
textAlign: "center",
mb: 1,
fontFamily: "'Poppins', sans-serif",
}}
>
Advantages of Outsourcing Accounting Data Entry Services in{" "}
<Box component="span" sx={{ color: "#ff9401" }}>
USA </Box> </Typography>
<Typography
variant="body1"
sx={{
textAlign: "center",
color: "#063433",
mb: 6,
fontFamily: "'Poppins', sans-serif",
lineHeight: 1.8,
maxWidth: "750px",
mx: "auto",
}}
>
Discover how outsourcing your accounting data entry processes enhances
efficiency, reduces costs, and ensures compliance while maintaining data security. </Typography>
    {/* 3-column grid layout */}
    <Grid container spacing={4} justifyContent="center">
      {advantages.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
          <Card
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              p: 3,
              borderRadius: 3,
              minHeight: 180,
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box sx={{ mr: 2, mt: 0.5 }}>{item.icon}</Box>
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                  fontFamily: "'Poppins', sans-serif",
                  color: "#063433",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#444",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.6,
                  fontSize: "0.97rem",
                }}
              >
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>


);
};

export default OutsourcingAdvantages;
