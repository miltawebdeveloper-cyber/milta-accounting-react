import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import WaveDivider from "../../components/homeComp/WaveDivider";
import useFullSEO from "../../utils/useFullSEO";

/* ================= COLORS ================= */
const primaryGreen = "#0b3d2e";
const sectionBg = "#f6f8f3";
const hoverOrange = "#ff9800";
const softOrange = "#fff3e0";
const white = "#fff";

/* ================= BANNER ================= */
const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at top, #0f3f2f 0%, #071f18 70%)",
        color: white,
        py: { xs: 7, sm: 9, md: 11 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={2}
          fontSize={{ xs: "1.7rem", sm: "2.1rem", md: "2.6rem" }}
        >
          Supercharge Your Business with{" "}
          <Box component="span" sx={{ color: hoverOrange }}>
            Premier Virtual Assistant Services
          </Box>
        </Typography>

        <Typography
          fontSize={{ xs: "1rem", sm: "1.15rem", md: "1.25rem" }}
          mb={4}
          opacity={0.95}
        >
          We provide skilled professionals to handle administrative work,
          bookkeeping, and more—so you can focus on scaling your business.
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 1.4,
            bgcolor: hoverOrange,
            color: "#000",
            fontWeight: 700,
            borderRadius: 30,
            fontSize: "1rem",
            boxShadow: "0 10px 25px rgba(255,152,0,0.35)",
            "&:hover": {
              bgcolor: "#ffa726",
              transform: "translateY(-2px)",
            },
          }}
          onClick={() => navigate("/contact")}
        >
          Ready To Take Your Business To The Next Level
        </Button>
      </Container>
    </Box>
  );
};

/* ================= SECTION ================= */
const Section = ({ title, children, bg }) => (
  <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: bg || "transparent" }}>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        fontWeight={800}
        mb={4}
        color={primaryGreen}
        fontSize={{ xs: "1.5rem", md: "2.1rem" }}
      >
        {title}
      </Typography>

      <Box maxWidth={900} mx="auto">
        {children}
      </Box>
    </Container>
  </Box>
);

/* ================= HIGHLIGHT BOXES ================= */
const HighlightBoxes = ({ boxes }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
      gap: 3,
      mt: 2,
    }}
  >
    {boxes.map((text, i) => (
      <Box
        key={i}
        sx={{
          p: 3.5,
          bgcolor: softOrange,
          borderRadius: 3,
          border: `1px solid ${hoverOrange}`,
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
          },
        }}
      >
        <Typography fontWeight={700} color={primaryGreen}>
          {text}
        </Typography>
      </Box>
    ))}
  </Box>
);

/* ================= SERVICES ================= */
const VirtualAssistantServices = () => {
  const services = [
    {
      title: "Real Estate Virtual Assistant SC",
      desc: "Manage property listings, client databases, virtual tours, scheduling, market research, and reporting so you can focus on closing deals.",
    },
    {
      title: "Data Entry",
      desc: "Accurate data entry services ensuring organized, consistent, and easily accessible business records.",
    },
    {
      title: "Event Planning",
      desc: "Handle RSVPs, vendor coordination, scheduling, and logistics for seamless virtual or in-person events.",
    },
    {
      title: "Internet Research",
      desc: "Conduct market research, competitor analysis, and trend tracking to support informed decision-making.",
    },
    {
      title: "Business Card Scanning",
      desc: "Digitize, categorize, and organize contacts to keep your database current and accessible.",
    },
    {
      title: "Appointment Scheduling",
      desc: "Calendar management, reminders, and rescheduling across time zones so you never miss a meeting.",
    },
    {
      title: "Accounting & Virtual Bookkeeping Service",
      desc: "Maintain accurate financial records, reconcile accounts, and generate compliant financial statements.",
    },
    {
      title: "Call Answering",
      desc: "Professional call answering services to manage inquiries, appointments, and client interactions.",
    },
    {
      title: "Correspondence Management",
      desc: "Inbox organization, email drafting, and timely communication handled with professionalism.",
    },
    {
      title: "Desktop Publishing Services",
      desc: "Design brochures, flyers, newsletters, and reports customized to your business branding.",
    },
    {
      title: "Presentations & Spreadsheets Creation",
      desc: "Create visually engaging presentations and detailed spreadsheets for impactful communication.",
    },
    {
      title: "Travel, Airline & Hotel Reservations",
      desc: "Flight bookings, hotel arrangements, and itinerary planning for stress-free business travel.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #09271b 0%, #063d1e 100%)",
        py: { xs: 7, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={800}
          mb={6}
          textAlign="center"
          color={hoverOrange}
        >
          Our Virtual Assistant Services in California
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {services.map((item, i) => (
            <Box
              key={i}
              sx={{
                bgcolor: white,
                p: 4,
                borderRadius: 4,
                borderTop: `5px solid ${hoverOrange}`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: "all 0.35s ease",
                "&:hover": { transform: "translateY(-8px)" },
              }}
            >
              <Typography fontWeight={700} mb={2} color={primaryGreen}>
                {item.title}
              </Typography>
              <Typography fontSize="0.95rem">{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ================= FAQ ================= */
const FAQSection = ({ faqData }) => (
  <Box sx={{ py: 9, bgcolor: sectionBg }}>
    <Container maxWidth="md">
      <Typography
        variant="h4"
        fontWeight={800}
        mb={5}
        textAlign="center"
        color={primaryGreen}
      >
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, i) => (
        <Accordion
          key={i}
          sx={{ mb: 2, borderRadius: 2, "&:before": { display: "none" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: hoverOrange }} />}
          >
            <Typography fontWeight={700}>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

/* ================= PAGE ================= */
export default function VirtualAssistantCalifornia() {
  useFullSEO({
    title: "Professional Virtual Assistant Services in California",
    description:
      "Simplify your daily operations with Milta’s virtual assistant services in California, delivering reliable support for admin, data, and business tasks.",
    keywords:
      "virtual assistants service in california, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant sc",
    author: "Milta Accounting",
    canonical:
      "https://www.milta.com/us/services/virtual-assistant-service-in-california/",
  });

  const highlights = [
    "Smart, Cost-Effective Solutions",
    "Maximized Productivity & Efficiency",
    "Expertise at Your Fingertips",
    "Scalability for Business Growth",
  ];

  const faqData = [
    {
      q: "What distinguishes a typical employee from a virtual assistant?",
      a: "Virtual assistants work remotely and provide flexible, scalable support without the overhead of full-time employees.",
    },
    {
      q: "Can virtual assistants handle confidential data?",
      a: "Yes. Our virtual assistants follow strict security protocols to protect your business data.",
    },
    {
      q: "Are virtual assistant services affordable for small businesses?",
      a: "Absolutely. Our services are cost-effective and eliminate expenses associated with full-time staff.",
    },
    {
      q: "How can I contact my virtual assistant?",
      a: "We offer email, video calls, and project management tools for seamless communication.",
    },
    {
      q: "Can I customize the tasks assigned to my virtual assistant?",
      a: "Yes. All services are fully customizable to meet your business needs.",
    },
  ];

  return (
    <>
      <BannerSection />

      <Section title="Unlock Limitless Potential with Virtual Assistant Services in California">
        <Typography mb={3}>
          We understand the daily grind of small business owners—from managing
          administrative overload to juggling financial tasks. Our virtual
          assistant services in California provide expert support designed to
          streamline operations and increase efficiency.
        </Typography>

        <Typography>
          Whether you're a solopreneur or leading a fast-growing company, Milta
          delivers tailored solutions—from virtual bookkeeping services to
          executive-level administrative support—so you can scale with
          confidence.
        </Typography>
      </Section>

      <WaveDivider />

      <Section title="Unlock the Advantages of Virtual Assistant Services in California">
        <HighlightBoxes boxes={highlights} />
      </Section>

      <VirtualAssistantServices />

      <FAQSection faqData={faqData} />
    </>
  );
}
