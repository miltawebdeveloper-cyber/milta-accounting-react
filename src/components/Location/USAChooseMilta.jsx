import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const WhyChooseMilta = () => {
  const points = [
    "US-focused accounting expertise.",
    "State-compliant bookkeeping and tax support.",
    "Cost savings of 40–60% compared to in-house hiring.",
    "Experienced professionals trained in US accounting systems.",
    "Scalable support for growing businesses.",
    "Transparent communication and reporting.",
  ];

  return (
    <Box sx={{ bgcolor: "#fafafa", py: { xs: 6, md: 10 } }}>
      {/* CENTERED CONTAINER WITH MAX WIDTH */}
      <Box
        sx={{
          maxWidth: 1300,
          mx: "auto",
          px: 2,
          display: "grid",
          gap: { xs: 4, md: 6 },
          justifyContent: "center",
          alignItems: "stretch",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0,650px) minmax(0,650px)" },
          // On mobile reverse columns
          gridTemplateAreas: {
            xs: `"right" "left"`,
            md: `"left right"`,
          },
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            position: "relative",
            boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
            transition: "all 0.35s ease",
            gridArea: "left", // assign to grid area
          }}
        >
          {/* VERTICAL ACCENT LINE */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              bottom: 20,
              left: 0,
              width: "6px",
              bgcolor: "#0f766e",
              borderRadius: 4,
            }}
          />

          {/* HIGHLIGHTED TEXT */}
          <Typography
            sx={{
              mb: 2,
              fontWeight: 700,
              color: "#0f766e",
              fontSize: "1rem",
            }}
          >
            Businesses in multiple US states trust us because we offer:
          </Typography>

          {/* LIST ITEMS WITH ARROW ICON */}
          <List sx={{ pl: 0 }}>
            {points.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  pl: 0,
                  py: 0.8,
                  display: "flex",
                  alignItems: "center",
                  color: "#4b5563",
                  fontSize: "0.95rem",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{ fontSize: "0.8rem", mr: 1.5, color: "#0f766e" }}
                />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            position: "relative",
            gridArea: "right", // assign to grid area
          }}
        >
          {/* ACCENT LINE */}
          <Box
            sx={{
              width: 48,
              height: 4,
              bgcolor: "#0f766e",
              borderRadius: 2,
              mb: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1f2937",
              lineHeight: 1.2,
              fontSize: { xs: "1.9rem", md: "2.3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Why Businesses Across the <br />
            USA Choose Milta
          </Typography>

          <Typography
            sx={{
              color: "#4b5563",
              lineHeight: 1.9,
              maxWidth: 520,
              fontSize: "1.05rem",
            }}
          >
            Our goal is to simplify financial operations so you can focus on
            business growth.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseMilta;
