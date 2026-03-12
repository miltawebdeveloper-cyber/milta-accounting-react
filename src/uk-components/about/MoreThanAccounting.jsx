// src/components/MoreThanAccounting.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

const MoreThanAccounting = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        backgroundColor: "#2b6d2a",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff", // default text color for contrast
      }}
    >
      <Container maxWidth="md" sx={{ maxWidth: "800px" }}>

        {/* ✅ Heading Animation (Top) */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, color: "#fff" }}
          >
            More Than Accounting
          </Typography>
        </motion.div>

        {/* ✅ Small subtitle + Description Animation (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Typography variant="subtitle1" sx={{ color: "rgba(255,255,255,0.92)", fontWeight: 600, mb: 1 }}>
            Accounting + Digital Support
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4,color: "#fff" }}>
            We help businesses manage finances and grow visibility — bookkeeping,
            accounting and targeted digital support combined for a single trusted
            partner.
          </Typography>

          {/* Feature chips */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 4, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, bgcolor: "rgba(255,255,255,0.06)", px: 2.5, py: 0.8, borderRadius: 18 }}>
              <SpeedRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: 14 }}>Fast Setup</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, bgcolor: "rgba(255,255,255,0.06)", px: 2.5, py: 0.8, borderRadius: 18 }}>
              <TrendingUpRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: 14 }}>Growth Focused</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, bgcolor: "rgba(255,255,255,0.06)", px: 2.5, py: 0.8, borderRadius: 18 }}>
              <SupportAgentRoundedIcon sx={{ color: "#fff", fontSize: 18 }} />
              <Typography sx={{ color: "rgba(255,255,255,0.95)", fontSize: 14 }}>Dedicated Support</Typography>
            </Box>
          </Box>
        </motion.div>

        {/* ✅ Highlight Card Animation (Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              backgroundColor: "#fff", // card stands out on primary background
              color: "#2b6d2a", // text uses primary color
              borderRadius: "20px",
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              maxWidth: 600,
              position: "relative",
              overflow: "hidden",
              mb: 4,
              "&::before": {
                content: '""',
                position: "absolute",
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%",
                background: "rgba(0,0,0,0.02)",
                transform: "rotate(45deg)",
                borderRadius: "50%",
              },
            }}
          >
            {/* ✅ Card Heading Animation (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Let’s Work Together
              </Typography>
            </motion.div>

            {/* ✅ Card Text Animation (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4 }}>
                At Milta Accounting Services, we believe accounting should give
                you clarity and peace of mind, not add pressure. If you’re
                looking for a reliable and supportive financial partner, we’d be
                happy to talk.
              </Typography>
            </motion.div>

            {/* ✅ Button Animation (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Button
                component="a"
                href="/uk/contact"
                aria-label="Contact Milta for accounting services"
                variant="contained"
                sx={{
                  backgroundColor: "#2b6d2a",
                  color: "#fff",
                  fontWeight: 600,
                  px: 5,
                  py: 1.5,
                  borderRadius: "30px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#97ba3a",
                  },
                }}
              >
                Let’s Talk
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default MoreThanAccounting;
