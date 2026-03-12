import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import StylishDividerText from "../../homeComp/StylishDividerText";

const ContractorsAccountingLayout = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 5 },
        background: "linear-gradient(180deg, #f9f9f9 0%, #f0f8f5 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "95%", sm: "90%", md: "1000px" },
          color: "#1d4230",
          fontFamily: "'Poppins', sans-serif",
          textAlign: "left",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            color: "#1d4230",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Accounting and Bookkeeping for Contractors
        </Typography>

        {/* Introductory Paragraphs */}
        <Stack spacing={2.5} sx={{ mb: 6 }}>
          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Contractors are self-employed professionals or businesses engaged to complete
            specific tasks or projects based on a contractual agreement. They may work
            across various sectors, including IT, consulting, and construction, and are
            typically responsible for managing their taxes and benefits.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Accounting and bookkeeping for contractors means keeping track of all
            money-related activities, like recording income and expenses, handling payroll,
            and preparing for taxes. Accurate records help contractors keep track of project
            costs, control cash flow, and produce reliable financial reports. Good
            bookkeeping also makes it easier to stay compliant with laws, match bank
            records, and send correct invoices to clients.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Tools like QuickBooks can simplify the process by automating routine tasks like
            expense tracking, tax calculations, and financial reporting. Many contractors
            choose to outsource their bookkeeping to save time, reduce administrative stress,
            and ensure the accuracy of their financial data, so they can focus on delivering
            projects and growing their business.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            In addition, well-structured accounting helps contractors with budgeting, profit
            analysis, and managing payments to subcontractors. Keeping financial records
            organized makes tax season more manageable and minimizes the risk of costly
            mistakes. With cloud-based accounting solutions, contractors can access
            real-time financial insights from anywhere, enhancing overall decision-making
            and operational efficiency.
          </Typography>
        </Stack>

        {/* Subsection Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 4,
            color: "#1d4230",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Key Elements of Bookkeeping for Contractor Businesses
        </Typography>

        {/* Key Elements List */}
        <Stack spacing={3}>
          {[
            {
              title: "1. Project-Based Accounting",
              text: "In the construction industry, every job is different. That’s why bookkeeping for construction companies revolves around project-based accounting—tracking income, expenses, and profitability for each project. This method ensures better cost control and more accurate estimates for future jobs.",
            },
            {
              title: "2. Expense Management",
              text: "Managing day-to-day expenses—like materials, labor, and overhead—is crucial in bookkeeping for small construction businesses. Categorizing and approving each cost helps maintain budgets and avoid overspending.",
            },
            {
              title: "3. Payroll Processing",
              text: "Construction businesses often juggle both full-time employees and subcontractors. Automated payroll solutions ensure timely payments, accurate tax deductions, and compliance with labor regulations.",
            },
            {
              title: "4. Invoicing & Payment Tracking",
              text: "Bookkeeping for contractors includes setting up invoice templates, tracking outstanding balances, and integrating payment platforms for better cash flow and transparency.",
            },
            {
              title: "5. Tax Compliance & Planning",
              text: "Organized bookkeeping ensures deductible expenses are captured and tax filings are on time. Proper tax planning helps contractors minimize liabilities and stay audit-ready.",
            },
            {
              title: "6. Equipment & Asset Tracking",
              text: "Contractors rely heavily on machinery. Good bookkeeping tracks asset purchases, depreciation, and maintenance schedules for accurate reporting.",
            },
            {
              title: "7. Bank Reconciliation",
              text: "Regular bank reconciliations catch errors early, prevent fraud, and ensure financial reports remain accurate.",
            },
            {
              title: "8. Financial Reporting",
              text: "Cash flow reports, balance sheets, and profit/loss statements help guide project bids, budgeting, and overall business strategy.",
            },
            {
              title: "9. Subcontractor Payments & Compliance",
              text: "Managing subcontractors requires accurate tracking of contracts, payments, and 1099s to maintain legal compliance and transparency.",
            },
            {
              title: "10. Cloud-Based Bookkeeping Tools",
              text: "Modern bookkeeping solutions allow real-time data sharing, automate reporting, and provide 24/7 access for contractors in the field.",
            },
          ].map((item, index) => (
            <Box key={index}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "#1d4230",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default ContractorsAccountingLayout;
