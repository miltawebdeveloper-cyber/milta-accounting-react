// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsRoutes from "./routes/us-routes";
import UkRoutes from "./routes/uk-routes";
import { ThemeProvider } from "@mui/material/styles";
import ukTheme from "./theme-uk";

function App() {
  return (
    <Router>
      <Routes>
        {/* US routes */}
        <Route path="/*" element={<UsRoutes />} />
        {/* UK routes with ThemeProvider */}
        <Route
          path="/uk/*"
          element={
            <ThemeProvider theme={ukTheme}>
              <UkRoutes />
            </ThemeProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
