import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SubscriptionBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2b6d2a",
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 4 },
        mt: 8,
        textAlign: "center",
        borderRadius: "22px",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 14px 35px rgba(0,0,0,0.15)",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "22px" },
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#97ba3a",
          textTransform: "uppercase",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Join Thousands
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          mt: 1.5,
          fontSize: { xs: "14px", md: "16px" },
          color: "#fff",
          maxWidth: 520,
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Get curated finance, accounting & growth insights straight to your inbox.
      </Typography>

      {/* Input + Button */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Email Input */}
        <TextField
          placeholder="Enter your email"
          size="small"
          sx={{
            width: { xs: "100%", sm: "340px" },
            bgcolor: "#fff",
            borderRadius: "10px",
            fontFamily: "'Poppins', sans-serif",
            "& fieldset": {
              border: "1px solid #97ba3a",
            },
          }}
        />

        {/* Subscribe Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#97ba3a",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
            px: 4,
            py: 1.2,
            fontSize: "14px",
            textTransform: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Subscribe →
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionBanner;
