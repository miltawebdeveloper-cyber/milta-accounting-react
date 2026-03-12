import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FormPopup = ({ open, onClose, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      // remove fullWidth and maxWidth
      sx={{
        "& .MuiDialog-container": {
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center", // center vertically
          justifyContent: "center", // center horizontally
        },
        "& .MuiDialog-paper": {
          margin: 0,
          padding: 0,
          borderRadius: "14px",
          overflow: "hidden",
          width: isMobile ? "100%" : "60%", // smaller width on desktop for nice centered view
          maxHeight: "90vh",
        },
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 10,
          right: 12,
          zIndex: 10,
          color:"white",
        }}
      >
        <CloseIcon sx={{ fontSize: 28 }} />
      </IconButton>

      {/* Content */}
      <DialogContent sx={{ padding: 0, margin: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;
