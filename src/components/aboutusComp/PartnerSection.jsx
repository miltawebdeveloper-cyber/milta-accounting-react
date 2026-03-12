import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import MD1 from "../../assets/images/MD1.jpg";
import MD2 from "../../assets/images/MD2.jpg";

/* GLOBAL FONT */
const globalFont = {
  fontFamily: "'Josefin Sans', sans-serif",
};

/* TEAM MEMBERS */
const people = [
  {
    name: "Mohammed Rizwan",
    role: "Managing Director",
    content:
      "Mohammed Rizwan holds a Bachelor's degree in Commerce and brings over a decade of hands-on experience in the financial services industry. His expertise spans accounting, strategic planning, and client relationship management.",
    img: MD2,
  },
  {
    name: "Raja Vignesh",
    role: "Managing Director",
    content:
      "Raja Vignesh is a graduate with a Bachelor's degree in Business Administration and has more than 10 years of experience in the financial sector. He specializes in growing the business, improving operations, and leading teams.",
    img: MD1,
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

      {/* HEADING */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: 26, sm: 34, md: 44 },
          lineHeight: 1.3,
          pb: 5,
          color: "#ffffff",
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
                  width: { xs: 360, sm: 400, md: 330 },
                  height: { xs: 360, sm: 400, md: 460 },
                  borderRadius: "26px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  backgroundImage: `url(${p.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "none",
                  outline: "none",

                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 0 60px rgba(255,120,40,0.22)",
                  },

                  "&:hover .overlay": {
                    opacity: 1,
                  },

                  ...globalFont,
                }}
              >
                {/* Overlay appears only on hover so image stays clear by default */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(7, 43, 23, 0.45)", // reduced from 0.65
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 3,
                    textAlign: "center",

                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: 18, md: 22 },
                      color: "#ff9401",
                      mb: 1,
                    }}
                  >
                    {p.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 16 },
                      opacity: 0.9,
                      mb: 1,
                      color: "#ff9401",
                    }}
                  >
                    {p.role}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: 13, md: 14 },
                      opacity: 0.9,
                      color: "#ffffff",
                    }}
                  >
                    {p.content}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PartnerSection;
