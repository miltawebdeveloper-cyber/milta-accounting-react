// src/components/servicesComp/common/FooterLayout.jsx
import React, { useState } from "react"; // ✅ Added useState
import emailjs from "@emailjs/browser"; // ✅ Added EmailJS import
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";

import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // ⬅ ADDED
import { Link } from "react-router-dom";

import Globe from "../../assets/globe-image.png";
import Logo from "../../assets/logo.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Trustpilot from "../../assets/Trustpilot.webp";
import bfirms from "../../assets/bfirms-certified.webp";
import Clutch from "../../assets/clutch.webp";
import Us from "../../assets/us.png";
import India from "../../assets/india.png";
import LogoWhite from "../../assets/milta_white.webp";

// ---------------------------------------------
// EXTRACTED LINKS
// ---------------------------------------------
const servicesLinks = [
  { label: "Tax Planning and Preparation Services", to: "/us/services/tax-planning-and-preparation-services-usa/" },
  { label: "Bookkeeping Services", to: "/us/services/bookkeeping-company-in-the-usa/" },
  { label: "CPA Services", to: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/" },
  { label: "Virtual Assistant Services", to: "/us/services/virtual-assistant-service-in-the-usa/" },
  { label: "Data Entry Services", to: "/us/services/outsourcing-accounting-data-entry-services-in-the-usa/" },
  { label: "Financial Controller Services", to: "/us/services/financial-controller-services-in-the-usa/" },
  { label: "Digital Marketing Services", to: "/us/services/best-digital-marketing-agency-in-usa/" },
  { label: "Payroll Management Services", to: "/us/services/payroll-management-services-in-the-usa/" },
];

const industryLinks = [
  { label: "Contractors", to: "/us/industry/bookkeeping-for-contractors-companies/" },
  { label: "Real Estate", to: "/us/industry/bookkeeping-for-real-estate-companies/" },
  { label: "Manufacturing", to: "/us/industry/accounting-services-for-manufacturing/" },
  { label: "Healthcare", to: "/us/industry/accounting-services-for-healthcare/" },
  { label: "Non-Profit", to: "/us/industry/accounting-services-for-nonprofit-organizations/" },
  { label: "Restaurant", to: "/us/industry/accounting-services-for-restaurant-businesses/" },
  { label: "Retail Business", to: "/us/industry/accounting-services-for-retail-businesses/" },
  { label: "Law Firms", to: "/us/industry/accounting-services-for-lawfirms/" },

];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Career Opportunities", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
  { label: "Blogs & Resources", to: "/blogs" },
  { label: "Areas We Serve", to: "/areas-we-serve" },
  { label: "FAQ", to: "/faqs" },

];

const supportLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
];

// ---------------------------------------------

export default function FooterLayout() {

  const [newsletterEmail, setNewsletterEmail] = useState(""); // ✅ useState for newsletter
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,      // replace with EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // replace with EmailJS template ID
        {
          form_type: "Newsletter Subscription",
          newsletter_section: "display:block;",
          subscription_section: "display:block;",
          contact_section: "display:none;",
          job_section: "display:none;",
          email: newsletterEmail,
          subscriber_email: newsletterEmail,
          source: "Footer Newsletter",

          // 🔒 CLEAR CONTACT DATA
          first_name: "",
          last_name: "",
          phone_number: "",
          service_interest: "",
          message: "",
          revenue: "",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY       // replace with EmailJS public key
      )
      .then(() => {
        alert("Thank you for subscribing!");
        setNewsletterEmail("");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send subscription. Try again later.");
        setLoading(false);
      });
  };

  const handleCalendlyClick = () => {
    window.open("/contact#get-in-touch", "_blank", "noopener,noreferrer");
  };


  return (
    <Box sx={{ bgcolor: "#f8f8f8", pt: 10 }}>

      {/* ======================= NEWSLETTER ======================= */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 12, pb: 8 }}>
        <Typography variant="h4" fontWeight={700} mb={1} pb={2}>
          Subscribe to our newsletter
        </Typography>

        <Box
          component="form"
          onSubmit={handleNewsletterSubmit}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            px: 2,
          }}
        >
          <TextField
            placeholder="Enter your email"
            sx={{ width: { xs: "100%", sm: "380px" } }}
            size="small"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ borderRadius: 2, bgcolor: "#ff6600" }}
          >
            {loading ? "Sending..." : "Get started"}
          </Button>
        </Box>

        <Typography variant="caption" sx={{ mt: 2, display: "block" }}>
          Our experts are ready to help!
        </Typography>
      </Container>


      {/* ======================= FLOATING HERO CARD ======================= */}
      <Container maxWidth="lg">
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #0c301f 0%, #0e3c1f 35%, #0a5728 70%, #0f7a3b 100%)",
            color: "#fff",
            borderRadius: 4,
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 4, md: 0 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0px 25px 60px rgba(4, 71, 8, 1)",
            mt: { xs: -8, sm: -10, md: -14 },
            mb: -10,
            position: "relative",
            zIndex: 5,
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 420 } }}>
            <Typography
              variant="h4"
              fontWeight={700}

              mb={2}
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              Ready to simplify your tasks?
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }} color={"#fff"}>
              Let Milta handle the numbers while you grow your business.
            </Typography>

            <Button
              onClick={handleCalendlyClick}
              variant="contained"
              sx={{
                bgcolor: "#ff6600",
                color: "#ffffff",
                textTransform: "none",
                px: 4,
                py: 1.05,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Start With Our Free 5-Hour Trial →
            </Button>
          </Box>

          <Box
            component="img"
            src={Globe}
            alt="globe"
            sx={{
              width: { xs: "70%", sm: "55%", md: "28%" },
              height: "auto",
              mt: { xs: 3, md: 0 },
              display: "block",
            }}
          />
        </Box>
      </Container>

      {/* ======================= FOOTER ======================= */}
      <Box
        sx={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(30, 80, 50, 0.45), transparent 35%),
            radial-gradient(circle at 80% 80%, rgba(15, 60, 35, 0.35), transparent 45%),
            linear-gradient(145deg, #062417 0%, #08341f 25%, #0b4526 55%, #0e5c30 80%, #117a3c 100%)
          `,
          color: "#fff",
          pt: { xs: 14, sm: 16, md: 16 },
          pb: { xs: 6, sm: 6, md: 0 },
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>

            {/* ================= LEFT SIDE ================= */}
            <Grid item xs={12} md={4}>
              <Box component="img" src={LogoWhite} alt="logo" sx={{ width: "160px" }} />

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2, mt: 2 }}>
                <EmailIcon sx={{ fontSize: 20, mr: 1, color: "#ec9513" }} />
                <Typography variant="body2" sx={{ color: "#fff" }}>info@miltafs.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2, color: "#fff" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationOnIcon sx={{ fontSize: 20, mr: 1, color: "#ec9513" }} />
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      No. 175, Sri Sai Tower, 3rd floor,
                      <br />
                      Bharathi Colony Rd, Peelamedu,
                      <br />
                      Coimbatore, Tamil Nadu 641004, India.
                    </Typography>
                  </Box>
                  {/* US Numbers */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ff9800", fontWeight: 600, fontSize: 16 }}
                    >
                      USA :
                    </Typography>
                    <a href="tel:+18133030213" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>
                      +1 (813) 303-0213
                    </a>{" "}
                    /{" "}
                    <a href="tel:+18135600065" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>
                      +1 (813) 560-0065
                    </a>
                  </Box>

                  {/* India Number */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ff9800", fontWeight: 600, fontSize: 16 }}
                    >
                      IN :
                    </Typography>
                    <a href="tel:+919600103723" style={{ color: "#fff", textDecoration: "none", fontSize: 15 }}>
                      +91-96001 03723
                    </a>{" "}
                  </Box>


                </Box>
              </Box>

            </Grid>

            {/* ================= RIGHT SIDE ================= */}
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                pl: { md: 20 },
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: { xs: 6, sm: 8, md: 4 },
                flexWrap: "wrap",
              }}
            >

              {/* SERVICES */}
              <Box sx={{ minWidth: { xs: "48%", md: "auto" } }}>
                <Typography variant="subtitle1" fontWeight={700} mb={2} sx={{ color: "#ec9513" }}>
                  Services
                </Typography>

                {servicesLinks.map((item) => (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.to}
                    sx={{
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                      color: "#fff",
                      textDecoration: "none",
                      "&:hover": { color: "#ec9513" },
                      fontSize: "0.92rem",
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "11px" }} />
                    {item.label}
                  </Box>
                ))}
              </Box>

              {/* INDUSTRY */}
              <Box sx={{ minWidth: { xs: "48%", md: "auto" } }}>
                <Typography variant="subtitle1" fontWeight={700} mb={2} sx={{ color: "#ec9513" }}>
                  Industry
                </Typography>

                {industryLinks.map((item) => (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.to}
                    sx={{
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                      color: "#fff",
                      textDecoration: "none",
                      "&:hover": { color: "#ec9513" },
                      fontSize: "0.92rem",
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "11px" }} />
                    {item.label}
                  </Box>
                ))}
              </Box>

              {/* COMPANY */}
              <Box sx={{ minWidth: { xs: "48%", md: "auto" } }}>
                <Typography variant="subtitle1" fontWeight={700} mb={2} sx={{ color: "#ec9513" }}>
                  Company
                </Typography>

                {companyLinks.map((item) => (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.to}
                    sx={{
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                      color: "#fff",
                      textDecoration: "none",
                      "&:hover": { color: "#ec9513" },
                      fontSize: "0.92rem",
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: "11px" }} />
                    {item.label}
                  </Box>
                ))}
              </Box>

            </Grid>
          </Grid>

          {/* ===================== BOTTOM ROW ===================== */}
          <Box
            sx={{
              mt: 4,
              py: { xs: 2, sm: 3, md: 4 },
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">

              {/* LEFT TEXT */}


              {/* LEFT TEXT (Copyright) */}
              <Grid item xs={12} md={3} sx={{ textAlign: "center" }}> {/* ⬅ MODIFIED: Set textAlign to "center" for all sizes */}
                <Typography variant="body2" sx={{ opacity: 0.75, color: "#fff" }}>
                  © {new Date().getFullYear()} Milta. All rights reserved.
                </Typography>
              </Grid>

              {/* CERTIFICATIONS */}
              <Grid item xs={12} md={3} sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "center", gap: 3 }}>

                <Box component="img" src={bfirms} sx={{ width: 40 }} />
                <Box component="img" src={Clutch} sx={{ width: 48 }} />
                <Box component="img" src={Trustpilot} sx={{ width: 80, height: 30, pt: 1 }} />
              </Grid>

              {/* PRIVACY & TERMS */}
              <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                {supportLinks.map((item, i) => (
                  <React.Fragment key={item.label}>
                    <Box
                      component={Link}
                      to={item.to}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.6,
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "#fff",
                        "&:hover": { color: "#ec9513" },
                      }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: "11px" }} />
                      {item.label}
                    </Box>

                    {i === 0 && (
                      <Typography variant="body2" sx={{ opacity: 0.5 }}>
                        |
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Grid>

              {/* SOCIAL ICONS */}
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 1.2,
                }}
              >
                <IconButton
                  href="https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/"
                  target="_blank"
                  sx={{
                    backgroundColor: "#0A66C2",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#004182", transform: "scale(1.06)" },
                  }}
                >
                  <LinkedIn />
                </IconButton>

                <IconButton
                  href="https://www.facebook.com/miltaaccountingservices/"
                  target="_blank"
                  sx={{
                    backgroundColor: "#1877F2",
                    color: "#ffffffff",
                    "&:hover": { backgroundColor: "#145DBF", transform: "scale(1.06)" },
                  }}
                >
                  <Facebook />
                </IconButton>

                <IconButton
                  href="https://www.instagram.com/milta_accountings/"
                  target="_blank"
                  sx={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    color: "#ffffffff",
                    "&:hover": { transform: "scale(1.06)" },
                  }}
                >
                  <Instagram />
                </IconButton>

                <IconButton
                  href="https://www.youtube.com/@milta-accounting-service"
                  target="_blank"
                  sx={{
                    backgroundColor: "#FF0000",
                    color: "#ffffffff",
                    "&:hover": { backgroundColor: "#CC0000", transform: "scale(1.06)" },
                  }}
                >
                  <YouTube />
                </IconButton>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
