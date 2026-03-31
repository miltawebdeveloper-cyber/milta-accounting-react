// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsRoutes from "./routes/us-routes";
import UkRoutes from "./routes/uk-routes";
import { ThemeProvider } from "@mui/material/styles";
import ukTheme from "./theme-uk";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;

