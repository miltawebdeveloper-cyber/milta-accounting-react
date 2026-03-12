import React from "react";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { keyframes } from "@mui/system";

/* ===== Slide Right to Left Animation (Only Once) ===== */
const slideRightLeft = keyframes`
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const StickyButtons = () => {
  const buttons = [
    {
      icon: <EmailIcon sx={{ fontSize: 22 }} />,
      bg: "linear-gradient(135deg, #ff8c00, #ff6600)",
      hoverBg: "linear-gradient(135deg, #ffa733, #ff751a)",
      link: "mailto:info@miltafs.com",
      external: false,
    },
    {
      icon: <FacebookIcon sx={{ fontSize: 22 }} />,
      bg: "linear-gradient(135deg, #25D366, #128C7E)",
      hoverBg: "linear-gradient(135deg, #2fe075, #22a06f)",
      link: "https://www.facebook.com/people/Milta-Accounting/100078468321860/",
      external: true,
    },
    {
      icon: <InstagramIcon sx={{ fontSize: 22 }} />,
      bg: "linear-gradient(135deg, #ff8c00, #ff6600)",
      hoverBg: "linear-gradient(135deg, #ffa733, #ff751a)",
      link: "https://www.instagram.com/milta_accountings/",
      external: true,
    },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: "45%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 1.5,
        pr: "5px",

        /* ✅ Slide Right → Left Animation Only Once */
        animation: `${slideRightLeft} 0.8s ease-out`,
      }}
    >
      {buttons.map((btn, index) => (
        <Box
          key={index}
          component={btn.external ? "a" : "div"}
          href={btn.external ? btn.link : undefined}
          onClick={
            !btn.external ? () => (window.location.href = btn.link) : undefined
          }
          target={btn.external ? "_blank" : undefined}
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: btn.bg,
            color: "#fff",
            width: "48px",
            height: "48px",
            borderRadius: "25px 0 0 25px",
            cursor: "pointer",
            transition: "all 0.3s ease",

            "&:hover": {
              background: btn.hoverBg,
              transform: "scale(1.2)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
            },

            "@media (max-width:600px)": {
              width: "42px",
              height: "42px",
            },
          }}
        >
          {btn.icon}
        </Box>
      ))}
    </Box>
  );
};

export default StickyButtons;
