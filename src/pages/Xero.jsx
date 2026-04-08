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
  "Beautiful and intuitive interface",
  "Unlimited users",
  "Strong bank reconciliation tools",
  "Real-time dashboards",
  "Powerful automation",
  "Extensive integrations with CRM, POS, and e-commerce platforms",
  "Ideal for multi-currency accounting",
];

const howWeUse = [
  {
    title: "Bank Reconciliation & Automation",
    items: [
      "Automated bank feeds",
      "AI-based rule creation",
      "Fast reconciliation of large volumes",
    ],
  },
  {
    title: "Invoicing & Payment Management",
    items: [
      "Custom invoice templates",
      "Online payment links",
      "Recurring invoices",
      "Automatic reminders",
    ],
  },
  {
    title: "Expense & Vendor Tracking",
    items: [
      "Capturing receipts",
      "Matching vendor bills",
      "Classifying expenses",
      "Approval workflows",
    ],
  },
  {
    title: "Project & Time Tracking",
    items: [
      "Useful for agencies, consultants, and service providers",
    ],
  },
  {
    title: "Multi-Currency Support",
    items: [
      "Ideal for clients involved in international transactions",
    ],
  },
  {
    title: "Payroll, Reporting & Compliance",
    items: [
      "Weekly, biweekly, or monthly payroll cycles",
      "Tax deductions & filings",
      "Custom reporting",
      "Analytics dashboard",
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
    desc: "Daily bookkeeping support includes:",
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
    desc: "For US clients, this may include:",
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
  text: "#21312a",
  textMuted: "#5a6e5e",
  border: "#e8f0ed",
};

/* ===================== COMPONENT ===================== */

const XeroAccountingModern = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useFullSEO({
    // MAIN SEO
    title: "Xero Accounting for the United States - Milta",
    description:
      "Xero is one of the fastest-growing cloud accounting tools in the USA, especially popular among startups and real estate businesses.",
    keywords:
      "xero for small business, xero accounting for small business, xero accounting for united states",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/software/xero-for-small-business/",
    ogTitle: "Xero Accounting for the United States - Milta",
    ogDescription: "Xero is one of the fastest-growing cloud accounting tools in the USA, especially popular among startups and real estate businesses.",
    ogImage: "https://www.miltafs.com/images/miltafs-og.jpg",
    ogUrl: "https://www.miltafs.com/us/software/xero-for-small-business/",
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
          "linear-gradient(180deg, #fdf6ee 0%, #eef6f2 50%, #ffffff 100%)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* PAGE TITLE */}
        <Typography variant="h3" align="center" fontWeight={700} color="#0b3d2e" mb={3}>
          Xero Accounting – Smart, Simple, and Perfect for Streamlined Cloud Bookkeeping
        </Typography>

        <Typography align="center" maxWidth={900} mx="auto" mb={6}>
          Xero is one of the fastest-growing cloud accounting tools in the USA,
          popular among startups, real estate businesses, SaaS companies,
          digital agencies, and eCommerce brands.
          <br /><br />
          Our bookkeeping team provides full-service Xero support, keeping your
          books updated and IRS-compliant.
        </Typography>

        {/* ================= SECTION 1 ================= */}
        <Typography variant="h4" align="center" fontWeight={700} color="#0b3d2e" mb={4}>
          Why Xero Is a Top Choice for Businesses
        </Typography>

        <Grid container spacing={4} mb={7} justifyContent="center">
          {highlights.map((item, index) => (
            <Grid item key={index} xs={12} md={6} display="flex" justifyContent="center">
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
          How We Use Xero for US Clients
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
              <Typography fontWeight={600} sx={{color: "#ffffff" }}>
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

        {/* ================= SECTION 3 (UPDATED STYLE) ================= */}
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
          We provide insights and recommendations so you can make informed
          financial decisions while your Xero books stay accurate, secure, and
          up to date.
        </Typography>
      </Container>
    </Box>
  );
};

export default XeroAccountingModern;
