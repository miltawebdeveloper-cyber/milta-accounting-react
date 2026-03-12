import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import StylishDividerText from "../../homeComp/StylishDividerText";

const ManufacturingAccountingLayout = () => {
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
          Accounting and Bookkeeping for the Manufacturing Industry
        </Typography>

        {/* Introductory Paragraphs */}
        <Stack spacing={2.5} sx={{ mb: 6 }}>
          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            The manufacturing industry is unlike any other. While retailers sell
            products and service providers offer expertise, only manufacturing
            companies create new products from raw materials. This unique nature
            makes bookkeeping and accounting for manufacturing companies
            especially important.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Manufacturing businesses must account for both raw materials and
            production costs, as well as calculate the value of their finished
            goods. This complexity makes accounting services for manufacturing
            significantly more detailed compared to businesses that don’t manage
            inventory.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            Manufacturing accounting focuses on key elements such as inventory
            valuation, cost of goods sold (COGS), and overall production
            efficiency. Proper bookkeeping for manufacturing companies ensures
            accurate financial records, helping to control costs and maximize
            profitability.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            To manage production patterns and material flow, manufacturers can
            track on-hand inventory, encourage vendor-managed inventory, use
            supplier drop shipping, or implement strategies that reduce
            inventory investment. These techniques play a vital role in both
            manufacturing tax planning and long-term financial management.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            As a manufacturing business owner, keeping your finances in order is
            critical to long-term success. One of the most effective ways to do
            this is through structured accounting for manufacturing. However,
            with several accounting methods to choose from, finding the best fit
            can be challenging.
          </Typography>

          <Typography variant="body1" color="text.secondary" lineHeight={1.9}>
            We’ll break down the essential options in accounting for
            manufacturing businesses—including cost accounting, standard
            costing, and job-order costing—and help you determine which strategy
            best meets your company’s unique needs. Whether you're preparing
            accurate tax returns for manufacturing or looking to improve
            profitability through strategic tax planning for manufacturing, a
            solid accounting foundation is key.
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
          The Role of Bookkeeping and Accounting in Manufacturing
        </Typography>

        {/* Key Elements List */}
        <Stack spacing={3}>
          {[
            {
              title: "1. Direct Cost Accounting",
              text: "This process includes allocating costs to inventory using methods such as standard costing, weighted-average, or cost layering. It ensures precise inventory valuation and aligns expenses with actual production levels.",
            },
            {
              title: "2. Overhead Cost Accounting",
              text: "Factory overhead expenses should be consolidated into cost pools and then allocated across the total units produced within a given reporting period. This allocation increases the recorded inventory cost. To streamline the process and reduce administrative burden, it's recommended that manufacturers limit the number of cost pools used.",
            },
            {
              title: "3. Cost of Goods Sold (COGS) Recognition",
              text: "COGS is calculated as: Beginning Inventory + Purchases - Ending Inventory. Accurate inventory valuation procedures are critical for correct COGS reporting, a key part of accounting for manufacturing companies.",
            },
            {
              title: "4. Cost Accounting",
              text: "For manufacturers, precise tracking of raw materials, labor, and overhead costs is essential to maintaining control over production expenses and ensuring profitability. Cost accounting offers the clarity needed to determine the actual cost of goods sold and establish competitive pricing strategies.",
            },
            {
              title: "5. Budgeting and Forecasting",
              text: "Accounting and bookkeeping for manufacturing companies offer critical financial insights that support budgeting and forecasting. Manufacturers use this data to plan production schedules, manage cash flow, and make informed decisions.",
            },
            {
              title: "6. Tax Planning & Preparation",
              text: "We provide accurate tax return preparation for retail businesses, including comprehensive year-end financial reporting. Our retail tax experts ensure compliance, maximize deductions, and support strategic planning for the next fiscal year.",
            },
            {
              title: "7. Financial Reporting",
              text: "Manufacturing companies are required to present their financial performance to key stakeholders such as investors and lenders. Well-prepared and accurate financial statements—made possible through effective accounting—are vital for establishing credibility and obtaining financial support.",
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

export default ManufacturingAccountingLayout;
