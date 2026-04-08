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

const COLORS = {
  primary: "#0b3d2e",
  primaryLight: "#145a32",
  primarySoft: "#eef6f2",
  accent: "#f57c00",
  accentLight: "#ffb74d",
  surface: "#ffffff",
  surfaceAlt: "#f8fbfa",
  text: "#21312a",
  textMuted: "#5a6e5e",
  border: "#e8f0ed",
};

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

  const cardGradients = [
    {
      bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
      accent: COLORS.accent,
    },
    {
      bg: `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.primary} 100%)`,
      accent: COLORS.accentLight,
    },
    {
      bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
      accent: COLORS.accent,
    },
    {
      bg: `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.primary} 100%)`,
      accent: COLORS.accentLight,
    },
    {
      bg: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
      accent: COLORS.accent,
    },
  ];

  return (
    <Box
      sx={{
        background:
          `linear-gradient(180deg, #fdf6ee 0%, ${COLORS.primarySoft} 50%, ${COLORS.surface} 100%)`,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">

        {/* PAGE TITLE */}
        <Typography variant="h3" align="center" fontWeight={700} color={COLORS.primary} mb={3}>
          QuickBooks Online - The Most Popular Cloud Accounting for U.S. Businesses
        </Typography>

        <Typography align="center" maxWidth={900} mx="auto" mb={6}>
          QuickBooks Online (QBO) is today's most widely used accounting software for American
          small businesses. Flexible, time-saving, and cloud-based, it offers the modern
          features needed for smart financial management.
          <br /><br />
          We provide full bookkeeping support for all QBO versions - Simple Start,
          Essentials, Plus, and Advanced.
        </Typography>

        {/* ================= SECTION 1 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color={COLORS.primary} mb={4}>
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
                  background: `linear-gradient(135deg, ${COLORS.surface}, ${COLORS.surfaceAlt})`,
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
                    backgroundColor: COLORS.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  +
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
        <Typography variant="h4" align="center" fontWeight={700} color={COLORS.primary} mb={4}>
          How We Manage Your Books in QuickBooks Online
        </Typography>

        {howWeUse.map((section, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            sx={{ mb: 2, borderRadius: 3, overflow: "hidden" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              sx={{
                background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                color: "#fff",
              }}
            >
              <Typography fontWeight={600} sx={{ color: "#fff" }}>
                {section.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ backgroundColor: COLORS.surfaceAlt }}>
              <List disablePadding>
                {section.items.map((item, i) => (
                  <ListItem key={i} sx={{ display: "flex", gap: 1.5 }}>
                    <Box
                      sx={{
                        minWidth: 22,
                        height: 22,
                        borderRadius: "50%",
                        backgroundColor: COLORS.accent,
                        color: "#fff",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "4px",
                      }}
                    >
                      +
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
          color={COLORS.primary}
          mt={9}
          mb={6}
        >
          Our Process: How We Work With Your Accounting Software
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {processSteps.map((step, index) => {
            const gradient = cardGradients[index % cardGradients.length];

            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  width: { xs: "100%", sm: "calc(50% - 32px)", md: "calc(33.333% - 32px)", lg: "calc(20% - 32px)" },
                  minWidth: { xs: "auto", sm: "280px", md: "360px", lg: "340px" },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    height: 450,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 5,
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      "& .step-icon-wrapper": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: gradient.bg,
                      p: 2.5,
                      textAlign: "center",
                      position: "relative",
                      height: 140,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className="step-icon-wrapper"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${gradient.accent} 0%, ${gradient.accent}CC 100%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 12px auto",
                        transition: "transform 0.3s ease",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 22,
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: 0.3,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Box
                      sx={{
                        width: 40,
                        height: 3,
                        background: gradient.accent,
                        margin: "10px auto 0 auto",
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      background: COLORS.surface,
                      p: 2.5,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "auto",
                      "&::-webkit-scrollbar": {
                        width: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: COLORS.primarySoft,
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: gradient.accent,
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: COLORS.textMuted,
                        fontWeight: 500,
                        mb: 2,
                        textAlign: "center",
                        fontStyle: "italic",
                        fontSize: "0.8rem",
                      }}
                    >
                      {step.desc}
                    </Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
                      {step.items.map((item, i) => (
                        <Box
                          key={i}
                          component="li"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            py: 1,
                            borderBottom: i !== step.items.length - 1 ? `1px solid ${COLORS.border}` : "none",
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: gradient.accent,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: COLORS.text,
                              fontWeight: 500,
                              fontSize: "0.8rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${gradient.accent}, ${gradient.accent}80)`,
                    }}
                  />
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
