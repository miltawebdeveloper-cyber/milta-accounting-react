// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // Default body font
    fontFamily: "'Poppins', sans-serif",

    // Headings use Josefin Sans
    h1: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Josefin Sans !important'",
      fontWeight: 600,
      fontSize: "2.4rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Ranade' !important",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h4: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "2rem",
    },
    h5: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: "'Josefin Sans' !important",
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    

    // Paragraphs, body text, etc.
    body1: {
      fontFamily: "'Poppins', sans-serif !important",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "'Poppins' , sans-serif !important",
      fontWeight: 400,
      fontSize: "0.95rem",
      lineHeight: 1.6,
    },

    button: {
      fontFamily: "'Poppins', sans-serif !important",
      textTransform: "capitalize",
      fontWeight: 500,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
        html *::selection {
  background: #0f5719 !important;
  color: white !important;
}

html *::-webkit-selection {
  background: #0f5719 !important;
  color: white !important;
}

          font-family: 'Poppins', sans-serif;
          color: #222;
          background-color: #fffaf3;
        }
      `,
    },
  },
});

export default theme;
