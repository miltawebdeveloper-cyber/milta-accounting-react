import React from "react";
import { Box } from "@mui/material";

function WaveDivider() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
        backgroundColor: "transparent", // ✅ transparent background
      }}
    >
      <svg
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          width: "100%",
          height: "80px",
          backgroundColor: "transparent", // ✅ no background fill
        }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#004d40" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>
        </defs>

        <path
          fill="url(#waveGradient)"
          d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,64C840,64,960,64,1080,58.7C1200,53,1320,43,1380,37.3L1440,32V100H0Z"
        />
      </svg>
    </Box>
  );
}

export default WaveDivider;
