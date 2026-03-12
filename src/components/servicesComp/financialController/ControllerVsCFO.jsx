// src/components/financialComp/ControllerVsCFO.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import StylishDividerText from "../../homeComp/StylishDividerText";

const data = [
  { capability: "Accounting Function Oversight", controller: true, cfo: true },
  { capability: "Regulatory Compliance (GAAP, etc.)", controller: true, cfo: true },
  { capability: "ERP Implementation", controller: true, cfo: true },
  { capability: "Management Accounting", controller: true, cfo: true },
  { capability: "Accounting Internal Controls", controller: true, cfo: true },
  { capability: "Closing Entries (Financial Close)", controller: true, cfo: true },
  { capability: "Budgeting & Forecasting Support", controller: true, cfo: true },
  { capability: "Cash Flow Management", controller: true, cfo: true },
  { capability: "Financial Reporting & Analysis", controller: true, cfo: true },
  { capability: "Financial Statement Preparation/Review", controller: true, cfo: true },
  { capability: "Team Management, Hiring & Training", controller: true, cfo: true },
  { capability: "Long-Term Business & Financial Strategy", controller: false, cfo: true },
  { capability: "Fundraising & Investor Relations", controller: false, cfo: true },
  { capability: "Investment Advisory", controller: false, cfo: true },
];

const ControllerVsCFO = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#f9fdf9", py: { xs: 6, md: 8 } }}>
        
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, mb: 1, color: "#123B28" }}
        >
          Controller vs. CFO: Different Roles, Unique Value
        </Typography>
               


        <Typography
          align="center"
          sx={{
            color: "#444",
            maxWidth: "800px",
            mx: "auto",
            mb: 4,
            lineHeight: 1.7,
          }}
        >
          At Miltafs, we recognize that small and medium businesses need strong
          financial leadership to succeed. Whether you’re in the early stages of
          growth or scaling up, choosing the right financial leader is crucial.
          
          
          A Fractional Controller from Miltafs can often provide ample financial
          leadership, filling the gap between a full-time Controller and a CFO.
          While both roles share some similarities, they offer distinct
          capabilities that are key to a growing business.
        
        
          Here’s how the roles of a Controller and a CFO differ, and how Miltafs
          Financial Controller Services for SMEs can bridge the gap for you:
        </Typography>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            maxWidth: "1300px",
            mx: "auto",
            border: "1px solid #dce8e2",
            borderRadius: 2,
            overflowX: "auto",
          }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "#e4f2eb" }}>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 600, color: "#123B28", width: "60%" }}
                >
                  Capabilities
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: "#123B28" }}>
                  Controller
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 600, color: "#123B28" }}>
                  CFO
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": { bgcolor: "#f8fcfa" },
                    "&:hover": { bgcolor: "#edf7f1" },
                  }}
                >
                  <TableCell sx={{ color: "#333", fontSize: "0.95rem" }}>
                    {row.capability}
                  </TableCell>
                  <TableCell align="center">
                    {row.controller && (
                      <CheckIcon sx={{ color: "#2e7d32", fontSize: 22 }} />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.cfo && (
                      <CheckIcon sx={{ color: "#2e7d32", fontSize: 22 }} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ControllerVsCFO;
