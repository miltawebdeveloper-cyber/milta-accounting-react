import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.js"; // import your theme
import { HeadProvider } from "react-head";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <HeadProvider>

      <CssBaseline /> {/* Ensures consistent global styling */}
      <App />
       </HeadProvider>
    </ThemeProvider>
  </React.StrictMode>
);
