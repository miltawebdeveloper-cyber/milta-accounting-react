import { Box, Typography, TextField, Button } from "@mui/material";

const SubscriptionBanner = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #03461fe1, #145a43)",
        py: { xs: 4, md: 6 },
        px: 2,
        mt: 6,
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "0 16px 40px rgba(11,61,46,0.45)",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", md: "24px" },
          fontWeight: 800,
          letterSpacing: "0.12em",
          color: "#e8fff7",
        }}
      >
        JOIN THOUSANDS
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: { xs: "14px", md: "16px" },
          color: "#c7f0df",
        }}
      >
        Get curated finance, accounting & growth insights straight to your inbox
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          placeholder="Enter your email"
          size="small"
          sx={{
            width: { xs: "100%", sm: "320px" },
            bgcolor: "rgba(255,255,255,0.95)",
            borderRadius: "10px",
            "& fieldset": { border: "none" },
          }}
        />

        <Button
          variant="contained"
          sx={{
            px: 4,
            py: 1.2,
            fontWeight: 700,
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, #ff7a18, #ffb347)",
            boxShadow:
              "0 8px 20px rgba(255,122,24,0.45)",
            "&:hover": {
              background:
                "linear-gradient(135deg, #ff6a00, #ffa733)",
              boxShadow:
                "0 12px 28px rgba(255,122,24,0.6)",
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionBanner;
