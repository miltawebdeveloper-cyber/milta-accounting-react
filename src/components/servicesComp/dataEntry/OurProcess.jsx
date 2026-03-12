import React from "react";
import {
Box,
Container,
Grid,
Typography,
Card,
CardContent,
useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const steps = [
{
title: "Collect Data",
description:
"We securely collect all relevant financial documents such as invoices, receipts, bank statements, and payroll records through encrypted channels to ensure confidentiality.",
},
{
title: "Verify Data",
description:
"Each document undergoes thorough cross-checking for authenticity and completeness. For instance, invoices are validated against purchase orders to prevent discrepancies.",
},
{
title: "Chart of Accounts",
description:
"We create or refine a structured chart of accounts tailored to your business, ensuring accurate categorization of every transaction.",
},
{
title: "Double-Entry Check",
description:
"Using double-entry accounting principles, we maintain balanced records that minimize errors and discrepancies.",
},
{
title: "Data Reconciliation",
description:
"Our team reconciles bank statements and ledgers in detail, resolving inconsistencies to maintain absolute accuracy.",
},
{
title: "Reporting",
description:
"Finally, we generate clear, insightful reports like profit & loss statements and balance sheets that give you full visibility into performance.",
},
];

const AccountingDataEntryProcess = () => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

return (
<Box
sx={{
py: { xs: 8, md: 8 },
background:
"linear-gradient(135deg, #0b1d17 0%, #102822 40%, #154d3c 100%)",
color: "#fff",
}}
>
<Container
maxWidth={false}
sx={{
maxWidth: "1300px !important",
px: { xs: 2, sm: 3, md: 6 },
}}
>
<Typography
variant="h4"
sx={{
textAlign: "center",
fontWeight: 700,
mb: 2,
fontFamily: "'Poppins', sans-serif",
}}
>
Our Accounting Data Entry Process </Typography>
    <Typography
      sx={{
        textAlign: "center",
        maxWidth: "900px",
        mx: "auto",
        mb: 8,
        color: "rgba(255,255,255,0.85)",
        lineHeight: 1.7,
        fontSize: "1.05rem",
      }}
    >
      Our proven process ensures your financial data is handled efficiently
      and with the utmost precision. Here’s how we do it:
    </Typography>

    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
    >
      {steps.map((step, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: 380,
              minHeight: 260,
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 3,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow:
                "0 4px 25px rgba(0,0,0,0.3), inset 0 0 8px rgba(255,255,255,0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.45), inset 0 0 10px rgba(255,255,255,0.1)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #ffb84d, #ff9401)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1.5,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {index + 1}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.97rem",
                  lineHeight: 1.6,
                  pl: "52px",
                }}
              >
                {step.description}
              </Typography>
            </CardContent>
          </Card>

          {!isMobile && index < steps.length - 1 && (index + 1) % 3 !== 0 && (
            <ArrowRightAltIcon
              sx={{
                position: "absolute",
                right: "-20px",
                top: "45%",
                fontSize: 38,
                color: "#ff9401",
                display: { xs: "none", md: "block" },
              }}
            />
          )}
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


);
};

export default AccountingDataEntryProcess;
