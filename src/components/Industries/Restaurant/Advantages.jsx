import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

const RestaurantChallenges = ({
title = "Common Challenges We Solve for Small Restaurants",
bgColor = "#f9f9f9",
maxWidth = "1000px",
}) => {
const challenges = [
{
title: "High Staff Turnover",
text: "We handle wage calculations, tip reporting, and tax withholdings accurately.",
},
{
title: "Seasonal Revenue",
text: "Milta offers planning tools to help small restaurant businesses stay profitable year-round.",
},
{
title: "Manual Bookkeeping Headaches",
text: "Say goodbye to paper logs and spreadsheets — our digital solutions automate your bookkeeping for a restaurant business.",
},
{
title: "Multiple Systems",
text: "We integrate with your POS, payroll tools, and online ordering systems for seamless financial tracking.",
},
];

return (
<Box
sx={{
  pt: { xs: 0, md:0 },
   pb: { xs: 4, md:6 },
backgroundColor: bgColor,
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<Container
maxWidth={false}
sx={{
maxWidth: maxWidth,
textAlign: "left",
px: { xs: 2, sm: 4, md: 6 },
}}
>
{/* Title */}
<Typography
variant="h4"
sx={{
fontWeight: 700,
color: "#1d4230",
fontFamily: "'Poppins', sans-serif",
mb: 4,
}}
>
{title} </Typography>

    {/* Challenges List */}
    <Stack spacing={3}>
      {challenges.map((item, index) => (
        <Box key={index}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#1d4230",
              fontFamily: "'Poppins', sans-serif",
              mb: 0.5,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.9,
              fontSize: { xs: "15px", md: "16px" },
            }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Container>
</Box>


);
};

export default RestaurantChallenges;
