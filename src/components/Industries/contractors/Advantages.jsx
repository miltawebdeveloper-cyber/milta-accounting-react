import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ContractorsAdvantages = ({
  title = "Advantages of choosing Milta for Accounting and Bookkeeping for Contractors",
  bgColor = "#f9f9f9",
  maxWidth = "1000px",
}) => {
  return (
    <Box
      sx={{
        pt: { xs: 0, md:0 },
         pb: { xs: 4, md:6 },
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidth,
          textAlign: "left",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#1d4230",
            fontFamily: "'Poppins', sans-serif",
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* Combined Content */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: 1.9,
            fontSize: { xs: "15px", md: "16px" },
          }}
        >
          When it comes to reliable and accurate bookkeeping for contractors, Milta
          stands out as a trusted partner for businesses across various industries,
          especially small construction companies. Our expert team understands the
          complexities of accounting for construction companies, including
          project-based accounting, job costing, subcontractor management, and
          labor-intensive payroll systems. We help streamline your financial
          processes with cloud-based tools like QuickBooks, ensuring real-time
          tracking of expenses, invoices, and bank reconciliations. Our proactive
          approach to construction tax planning and compliance means you’ll never
          miss a deduction or deadline. Whether you're running a large crew or
          operating a small construction business, our customized solutions for
          bookkeeping and tax planning for contractors are designed to help you
          maintain profitability, minimize tax liability, and focus on growing your
          business, without the stress of managing the books.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContractorsAdvantages;
