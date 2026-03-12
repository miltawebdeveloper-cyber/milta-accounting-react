import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFullSEO from "../utils/useFullSEO";

/* ===================== DATA ===================== */

const highlights = [
  "Strong reporting and job costing features",
  "Higher level of detail and customization",
  "Better performance for larger file sizes",
  "Advanced inventory management",
  "Enhanced security due to local desktop access",
  "Integration with industry-specific tools",
];

const howWeUse = [
  {
    title: "Bookkeeping & Transaction Management",
    items: [
      "Daily/weekly accounting entries",
      "Categorizing bank and credit card transactions",
      "Vendor and customer ledger maintenance",
      "Real-time financial activity tracking",
    ],
  },
  {
    title: "Advanced Reconciliation",
    items: [
      "Monthly bank reconciliation",
      "Credit card reconciliation",
      "Clearing account reconciliation",
      "Matching invoices, bills, and payments",
    ],
  },
  {
    title: "Accounts Receivable (A/R)",
    items: [
      "Creating invoices",
      "Tracking aging reports",
      "Following up on overdue payments",
      "Customer payment allocation",
    ],
  },
  {
    title: "Accounts Payable (A/P)",
    items: [
      "Entering vendor bills",
      "Payment scheduling",
      "Vendor reconciliation",
      "1099 reporting support",
    ],
  },
  {
    title: "Payroll Integration",
    items: [
      "Payroll entry",
      "Taxes & deductions",
      "Workforce classification",
      "Payroll liability reports",
    ],
  },
  {
    title: "Custom Reports for Better Decision-Making",
    items: [
      "Profit and Loss",
      "Balance Sheet",
      "Cash Flow Statements",
      "Budget vs Actual",
      "Inventory Reports",
      "Job Costing Reports",
    ],
  },
];

const processSteps = [
  {
    title: "Initial Setup & Cleanup",
    desc: "We set up your company file or clean your existing books:",
    items: [
      "Chart of accounts",
      "Opening balances",
      "Vendor & customer setup",
      "Bank integrations",
      "Previous year corrections",
    ],
  },
  {
    title: "Daily / Weekly Bookkeeping",
    desc: "Ongoing bookkeeping support includes:",
    items: [
      "Daily entries",
      "Expense management",
      "Receipt matching",
      "Cash flow tracking",
    ],
  },
  {
    title: "Monthly Closing",
    desc: "At month-end, we perform:",
    items: [
      "Reconciliation",
      "Trial balance checks",
      "Adjusting entries",
      "Reporting",
    ],
  },
  {
    title: "Quarterly Compliance",
    desc: "For U.S. clients, this may include:",
    items: [
      "Quarterly payroll reporting",
      "Federal/state tax estimates",
      "Financial review",
    ],
  },
  {
    title: "Year-End Support",
    desc: "We prepare:",
    items: [
      "Tax-ready reports",
      "1099 vendor reports",
      "Final reconciliations",
      "Audit support",
    ],
  },
];

/* ===================== COMPONENT ===================== */

const QuickBooksDesktopModernHybrid = () => {
  useFullSEO({
  // MAIN SEO
  title: "QuickBooks Desktop for Small Business - Milta",
  description:
    "Our team has over five years of experience managing U.S. clients specifically on QuickBooks Desktop.",
  keywords:
    "quickbooks desktop for small business, quickbooks desktop",
  author: "Milta Accounting",
  canonical:
    "https://www.miltafs.com/us/software/bookkeeping-with-quickbook-desktop/",
});

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #fdf6ee 0%, #eef6f2 50%, #ffffff 100%)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">

        {/* PAGE TITLE */}
        <Typography variant="h3" align="center" fontWeight={700} color="#0b3d2e" mb={3}>
          QuickBooks Desktop – Reliable, Powerful, and Designed for Complex Accounting
        </Typography>

        <Typography align="center" maxWidth={850} mx="auto" mb={6}>
          QuickBooks Desktop continues to be a preferred solution for many USA businesses
          that need deeper customization, offline access, advanced reporting, and powerful
          accounting workflows.
        </Typography>

        {/* ================= SECTION 1 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color="#0b3d2e" mb={4}>
          Why Businesses Still Prefer QuickBooks Desktop
        </Typography>

        <Grid container spacing={4} mb={7} justifyContent="center">
          {highlights.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Paper
                sx={{
                  width: 500,
                  height: 100,
                  p: 3,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #ffffff, #f7fbf9)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "#f57c00",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  →
                </Box>

                <Typography fontWeight={600} fontSize={16}>
                  {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* ================= SECTION 2 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color="#0b3d2e" mb={4}>
          How We Use QuickBooks Desktop for US Clients
        </Typography>

        {howWeUse.map((section, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 3 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{
                background: "linear-gradient(90deg, #0b3d2e, #145a32)",
                color: "#fff",
              }}
            >
              <Typography fontWeight={600}>{section.title}</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ backgroundColor: "#f8fbfa" }}>
              <List disablePadding>
                {section.items.map((item, i) => (
                  <ListItem key={i} sx={{ display: "flex", gap: 1.5 }}>
                    <Box
                      sx={{
                        minWidth: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: "#f57c00",
                        color: "#fff",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "4px",
                      }}
                    >
                      →
                    </Box>
                    <Typography>{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* ================= SECTION 3 ================= */}
        <Typography
  variant="h4"
  align="center"
  fontWeight={700}
  color="#0b3d2e"
  mt={9}
  mb={6}
>
  Our Process: How We Work With Your Accounting Software
</Typography>

<Grid container spacing={4} justifyContent="center">
  {processSteps.map((step, index) => {
    // Green to orange gradient
    const gradients = [
      "linear-gradient(135deg, #0b3d2e, #f57c00)", // dark green to orange
      "linear-gradient(135deg, #145a32, #ff9800)", // lighter green to orange
      "linear-gradient(135deg, #0b3d2e, #ffb74d)",
      "linear-gradient(135deg, #145a32, #ffa726)",
      "linear-gradient(135deg, #0b3d2e, #fb8c00)",
      "linear-gradient(135deg, #145a32, #ff9800)",
    ];

    return (
      <Grid item key={index}>
        <Paper
          sx={{
            width: 350,
            height: 440,
            p: 3,
            borderRadius: 3,
            background: gradients[index % gradients.length],
            color: "#333",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            cursor: "pointer",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
            },
          }}
        >
          {/* Step Label */}
          <Typography
            fontWeight={700}
            mb={2}
            sx={{ color: "#fff", letterSpacing: 1 }}
          >
            STEP {String(index + 1).padStart(2, "0")}
          </Typography>

          {/* Inner Card with fixed height */}
          <Paper
            sx={{
              width: "100%",
              
              height:"100%",
              maxHeight: 340, // fixed height for all cards
              borderRadius: 2,
              p: 2,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <Typography fontWeight={600} mb={1} sx={{ color: "#333" }}>
              {step.title}
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              {step.desc}
            </Typography>

            <List dense>
              {step.items.map((item, i) => (
                <ListItem key={i} sx={{ justifyContent: "center", py: 0 }}>
                  <Typography variant="body2">{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Paper>
      </Grid>
    );
  })}
</Grid>


        {/* FOOTER */}
        <Typography align="center" maxWidth={900} mx="auto" mt={9} fontWeight={500}>
          At Milta, we optimize your QuickBooks Desktop file so that your books remain
          clean, accurate, and compliant year-round.
        </Typography>

      </Container>
    </Box>
  );
};

export default QuickBooksDesktopModernHybrid;
