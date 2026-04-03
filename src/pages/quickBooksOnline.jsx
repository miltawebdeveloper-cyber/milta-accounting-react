import React, { useState } from "react";
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
  "Access anytime, anywhere",
  "Real-time collaboration with accountants",
  "Automatic bank feeds",
  "Receipts capture & mobile app",
  "Seamless third-party integrations",
  "Better automation for recurring tasks",
];

const howWeUse = [
  {
    title: "Automated Bank Feeds & Categorization",
    items: [
      "Connecting bank accounts, credit cards, and payment gateways",
      "Auto-categorizing transactions",
      "Machine-learning rule setup for faster completion",
      "Ensuring books stay updated daily/weekly",
    ],
  },
  {
    title: "Expense Tracking & Receipt Management",
    items: [
      "Uploading receipts via mobile or email",
      "Matching receipts with transactions",
      "Ensuring tax-compliant documentation",
    ],
  },
  {
    title: "Custom Invoicing & AR Management",
    items: [
      "Personalized invoices",
      "Recurring invoices",
      "Online payment integration",
      "Customer reminders & follow-ups",
    ],
  },
  {
    title: "Bill Management & AP Support",
    items: [
      "Entering bills",
      "Classifying expenses",
      "Approvals & scheduling",
      "Vendor payments & reporting",
    ],
  },
  {
    title: "Payroll Processing Assistance",
    items: [
      "Employee onboarding",
      "Pay runs",
      "Payroll taxes",
      "Monthly & quarterly payroll reporting",
    ],
  },
  {
    title: "Sales Tax Management",
    items: [
      "Automated tax calculation",
      "Tracking state-by-state taxes",
      "Filing support (if required)",
    ],
  },
  {
    title: "Monthly Financial Reports",
    items: [
      "Profit & Loss",
      "Balance Sheet",
      "Cash Flow",
      "AP / AR Aging",
      "Sales & expense summaries",
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

const QuickBooksOnlineModernHybrid = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useFullSEO({

    // MAIN SEO
    title: "QuickBooks Online for Small Businesses - Milta",
    description:
      "We provide full bookkeeping support for all QBO versions, including Simple Start, Essentials, Plus, and Advanced.",
    keywords:
      "quickbooks online for small business, quickbooks online",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/software/bookkeeping-with-quickbook-online/",
    ogTitle: "QuickBooks Online for Small Businesses - Milta",
    ogDescription: "We provide full bookkeeping support for all QBO versions, including Simple Start, Essentials, Plus, and Advanced.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/software/bookkeeping-with-quickbook-online/",
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
          QuickBooks Online – The Most Popular Cloud Accounting for U.S. Businesses
        </Typography>

        <Typography align="center" maxWidth={900} mx="auto" mb={6}>
          QuickBooks Online (QBO) is today’s most widely used accounting software for American
          small businesses. Flexible, time-saving, and cloud-based, it offers the modern
          features needed for smart financial management.
          <br /><br />
          We provide full bookkeeping support for all QBO versions — Simple Start,
          Essentials, Plus, and Advanced.
        </Typography>

        {/* ================= SECTION 1 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color="#0b3d2e" mb={4}>
          Why US Businesses Prefer QuickBooks Online
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

        {/* TARGET BUSINESSES */}
        <Typography align="center" maxWidth={900} mx="auto" mb={8}>
          QuickBooks Online is ideal for consultants, freelancers, online retailers,
          service providers, real estate agents, property managers, and hospitality businesses.
        </Typography>

        {/* ================= SECTION 2 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color="#0b3d2e" mb={4}>
          How We Manage Your Books in QuickBooks Online
        </Typography>

        {howWeUse.map((section, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            sx={{ mb: 2, borderRadius: 3 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{
                background: "linear-gradient(90deg, #0b3d2e, #145a32)",
                color: "#fff",
              }}
            >
              <Typography fontWeight={600} sx={{ color: "#fff" }}>
                {section.title}
              </Typography>
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
            const gradients = [
              "linear-gradient(135deg, #0b3d2e, #f57c00)",
              "linear-gradient(135deg, #145a32, #ff9800)",
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

                  {/* Inner White Card */}
                  <Paper
                    sx={{
                      width: "100%",
                      height: "100%",
                      maxHeight: 340,
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
          We provide insights and recommendations so you can make informed financial
          decisions while your QuickBooks Online books stay accurate, secure, and up to date.
        </Typography>

      </Container>
    </Box>
  );
};

export default QuickBooksOnlineModernHybrid;
