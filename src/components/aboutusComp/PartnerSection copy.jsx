import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

// ----------------------------
// GLOBAL JOSEFIN SANS FONT
// ----------------------------
const globalFont = {
  fontFamily: "'Josefin Sans', sans-serif",
};

// TEAM MEMBERS
const people = [
  {
    name: "Mohammed Rizwan",
    role: "Managing Director",
    content:
      "Mohammed Rizwan holds a Bachelor's degree in Commerce and brings over a decade of hands-on experience in the financial services industry. His expertise spans accounting, strategic planning, and client relationship management.",
    img: "/images/david.png",
  },
  {
    name: "Raja Vignesh",
    role: "Managing Director",
    content:
      "Raja Vignesh is a graduate with a Bachelor's degree in Business Administration and has more than 10 years of experience in the financial sector. He specializes in growing the business, improving operations, and leading teams.",
    img: "/images/manuel.png",
  },
];

const PartnerSection = () => {
  return (
    <Box
      sx={{
        background: "#031B0E",
        py: { xs: 8, sm: 10, md: 8 },
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        ...globalFont,
      }}
    >
      {/* CURVED ARC */}
      <Box
        sx={{
          width: { xs: "600px", md: "900px" },
          height: { xs: "600px", md: "900px" },
          borderRadius: "50%",
          border: "1px solid rgba(255, 140, 60, 0.12)",
          position: "absolute",
          top: { xs: "-300px", md: "-450px" },
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

 <Typography
  sx={{
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: 600,
    fontSize: { xs: 26, sm: 34, md: 44 },
    lineHeight: 1.3,
    pb: 5,
    color: "#ffffff", // ✅ ADD THIS
  }}
>
  The Visionary Behind the{" "}
  <Box component="span" sx={{ color: "#ff9401" }}>
    Growth
  </Box>
</Typography>



      {/* CARDS */}
      <Box sx={{ maxWidth: "900px", mx: "auto", px: { xs: 2, sm: 4 } }}>
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
          {people.map((p, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: { md: 330 },
                  height: { xs: 350, sm: 400, md: 460 },
                  borderRadius: "26px",
                  p: { xs: 1.5, sm: 2 },
                  transition: "all 0.35s ease",
                  background:
                    "linear-gradient(180deg, rgba(10,40,20,0.45), rgba(5,18,10,0.35))",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,150,80,0.1)",
                  cursor: "pointer",

                  // ------------------
                  // ONLY HOVER EFFECT
                  // ------------------
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 0 80px rgba(255,120,40,0.28)",
                  },

                  ...globalFont,
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    src={p.img}
                    sx={{
                      width: { xs: 110, sm: 120, md: 130 },
                      height: { xs: 110, sm: 120, md: 130 },
                      mx: "auto",
                      mb: 2,
                      borderRadius: "20px",
                    }}
                  />

                  {/* NAME */}
                  <Typography
                    sx={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: 18, md: 22 },
                      color: "#ff9401",
                    }}
                  >
                    {p.name}
                  </Typography>

                  {/* ROLE */}
                  <Typography
                    sx={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      mt: 1,
                      color: "white",
                      opacity: 0.9,
                      fontSize: { xs: 13, md: 18 },
                    }}
                  >
                    {p.role}
                  </Typography>

                  {/* CONTENT */}
                  <Typography
                    sx={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      mt: 1,
                      color: "white",
                      opacity: 0.9,
                      fontSize: { xs: 13, md: 14 },
                    }}
                  >
                    {p.content}
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

export default PartnerSection;
