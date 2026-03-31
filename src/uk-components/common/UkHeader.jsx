// src/uk-components/Header/UkHeader.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOn";

import ReactCountryFlag from "react-country-flag";

import logo from "../../assets/logo.svg";

export default function UkHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState({});
  const [countryAnchor, setCountryAnchor] = useState(null);

  const [country, setCountry] = useState("GB");

  const navigate = useNavigate();

  /* ================= NAV ITEMS ================= */
  const navItems = [
    { label: "Home", path: "/uk" },
    { label: "About", path: "/uk/about" },
    { label: "Why Choose Milta", path: "/uk/why-choose-milta" },
    {
      label: "Services",
      path: "/uk/services",
      submenu: [
        { label: "Bookkeeping Services", to: "/uk/bookkeeping-services-for-small-business" },
        { label: "Accounting Payable", to: "/uk/accounts-payable-services-in-uk" },
        { label: "Accounts Receivable", to: "/uk/accounts-receivable-services-in-uk" },
        { label: "Digital Marketing", to: "/uk/best-digital-marketing-service-in-uk" },
        { label: "Payroll Services", to: "/uk/payroll-services-for-small-business" },
        { label: "Virtual Assistance", to: "/uk/virtual-assistant-services-in-the-uk" },
        { label: "Data Entry Services", to: "/uk/accounting-data-entry-services-uk" },



      ],
    },
    {
      label: "Industries",
      submenu: [
        { label: "E-Commerce", to: "/uk/ecommerce-accounting-service/" },
        { label: "Healthcare", to: "/uk/accounting-services-for-healthcare" },
        { label: "Law Firms", to: "/uk/law-firm-accounting-services" },
        { label: "Real Estate", to: "/uk/accounting-services-for-real-estate" },
        { label: "Hospitality", to: "/uk/hospitality-accounting-services" },

      ],
    },
    { label: "Blog", path: "/uk/blogs" },
    { label: "Contact", path: "/uk/contact" },
  ];

  /* ================= COUNTRIES ================= */
  const countries = [
    { code: "US", label: "United States" },
    { code: "GB", label: "United Kingdom" },
  ];

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= SERVICES MENU ================= */
  const handleServicesClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(item.label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  /* ================= MOBILE SUBMENU ================= */
  const toggleMobileMenu = (label) => {
    setMobileOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  /* ================= COUNTRY SELECT ================= */
  const handleCountrySelect = (code) => {
    setCountry(code);
    setCountryAnchor(null);
    setOpen(false);

    if (code === "US") navigate("/");
    if (code === "GB") navigate("/uk");
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          color: "#2b6d2a",
          fontFamily: "'Poppins', sans-serif",
          borderBottom: "1px solid rgba(0, 0, 0, 0.15)"

        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // ✅ Hide on Mobile
              justifyContent: "space-between",
              alignItems: "center",
              px: { md: 3 },
              py: 1,
            }}
          >
            {/* ================= LEFT SIDE (Address Only) ================= */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{
                  color: "#2b6d2a",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: "#2b6d2a",
                  maxWidth: "720px",
                  lineHeight: 1.4,
                }}
              >
                Coimbatore, Tamil Nadu, India.
              </Typography>
            </Box>

            {/* ================= RIGHT SIDE (Email + Social Icons) ================= */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {/* Email */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <EmailIcon
                  fontSize="small"
                  sx={{
                    color: "#2b6d2a",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: "#2b6d2a",
                  }}
                >
                  info@miltafs.com
                </Typography>
              </Box>

              {/* Social Icons */}
              <Box sx={{ display: "flex", gap: 1.2 }}>
                {/* LinkedIn */}
                <Box
                  component="a"
                  href="https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* Facebook */}
                <Box
                  component="a"
                  href="https://www.facebook.com/miltaaccountingservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <FacebookIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* Instagram */}
                <Box
                  component="a"
                  href="https://www.instagram.com/milta_accountings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>

                {/* YouTube */}
                <Box
                  component="a"
                  href="https://www.youtube.com/@milta-accounting-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "20px",
                    backgroundColor: "#2b6d2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                    },
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

      </Box>

      {/* ================= MAIN HEADER ================= */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.08)"
            : "none",
          boxShadow: scrolled ? "0 6px 18px rgba(0, 0, 0, 0.08)" : "none",
          transition: "0.3s",
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: { 
                xs: scrolled ? 58 : 72, // 📱 Slimmer on mobile
                md: scrolled ? 70 : 85  // 💻 Standard on desktop
              },
            }}
          >
            {/* Logo */}
            <Link to="/uk">
              <img
                src={logo}
                alt="Milta UK Logo"
                style={{
                  height: scrolled ? "55px" : "70px", // Use a variable in SX instead for true responsiveness if needed
                  transition: "0.3s",
                }}
                className="responsive-logo" // I'll add the sx height instead
              />
            </Link>


            {/* ================= DESKTOP NAV ================= */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {navItems.map((item) =>
                item.submenu ? (
                  <Box key={item.label} sx={{ display: "flex", alignItems: "center" }}>
                    {item.path ? (
                      <Button
                        component={NavLink}
                        to={item.path}
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#1a1a1a",
                          textTransform: "none",
                          fontWeight: 600,
                          "&.active": {
                            color: "#2b6d2a",
                            fontWeight: 700,
                          },
                          "&:hover": { color: "#2b6d2a" },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Typography
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#1a1a1a",
                          fontWeight: 600,
                          px: 1.2,
                        }}
                      >
                        {item.label}
                      </Typography>
                    )}
                    <IconButton
                      size="small"
                      onClick={(e) => handleServicesClick(e, item)}
                      aria-label={`${item.label} submenu`}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      color: "#1a1a1a",
                      textTransform: "none",
                      fontWeight: 600,
                      "&.active": {
                        color: "#2b6d2a",
                        fontWeight: 700,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}

              {/* Country Selector */}
              <Button
                onClick={(e) => setCountryAnchor(e.currentTarget)}
                sx={{
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: "12px",
                  px: 2,
                  fontWeight: 600,
                  textTransform: "none",
                  color: "#1a1a1a",
                }}
                endIcon={<ExpandMoreIcon />}
              >
                <ReactCountryFlag
                  countryCode={country}
                  svg
                  style={{ width: 20, height: 15, marginRight: 6 }}
                />
                {countries.find((c) => c.code === country)?.label || country}
              </Button>
            </Box>

            {/* CTA + Mobile */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                component={NavLink}
                to="/uk/contact"
                sx={{
                  backgroundColor: "#2b6d2a",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  display: { xs: "none", md: "flex" },
                  "&:hover": {
                    backgroundColor: "#97ba3a",
                    color: "#ffffff",
                  },
                }}
              >
                Get A Quote →
              </Button>


              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ================= SERVICES DROPDOWN ================= */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 240,
            },
          },
        }}
      >
        {navItems
          .find((i) => i.label === activeMenu)
          ?.submenu?.map((sub) => (
            <MenuItem
              key={sub.label}
              component={Link}
              to={sub.to}
              onClick={handleCloseMenu}
            >
              {sub.label}
            </MenuItem>
          ))}
      </Menu>

      {/* ================= COUNTRY MENU ================= */}
      <Menu
        anchorEl={countryAnchor}
        open={Boolean(countryAnchor)}
        onClose={() => setCountryAnchor(null)}
      >
        {countries.map((c) => (
          <MenuItem key={c.code} onClick={() => handleCountrySelect(c.code)}>
            <ReactCountryFlag
              countryCode={c.code}
              svg
              style={{ width: 20, height: 15, marginRight: 6 }}
            />
            {c.label}
          </MenuItem>
        ))}
      </Menu>

      {/* ================= MOBILE DRAWER ================= */}
      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              py: 2,
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <img src={logo} alt="Milta Logo" style={{ height: 40 }} />
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Items */}
          <List sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemButton
                    component={item.submenu ? "button" : Link}
                    to={!item.submenu ? item.path : undefined}
                    onClick={() => {
                      if (item.submenu) {
                        toggleMobileMenu(item.label);
                        return;
                      }
                      setOpen(false);
                    }}
                    sx={{ flex: 1 }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                  {item.submenu && (
                    <IconButton
                      onClick={() => toggleMobileMenu(item.label)}
                      sx={{ mr: 1 }}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ExpandMoreIcon
                        sx={{
                          transform: mobileOpen[item.label] ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "0.2s",
                        }}
                      />
                    </IconButton>
                  )}
                </Box>

                {item.submenu && (
                  <Collapse in={mobileOpen[item.label]}>
                    {item.submenu.map((sub) => (
                      <ListItemButton
                        key={sub.label}
                        component={Link}
                        to={sub.to}
                        sx={{ pl: 4 }}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </Collapse>
                )}
              </Box>
            ))}
          </List>

          {/* ================= COUNTRY SELECTOR (Mobile) ================= */}
          <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
              Choose Country
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {countries.map((c) => (
                <Button
                  key={c.code}
                  onClick={() => handleCountrySelect(c.code)}
                  sx={{
                    border: "1px solid rgba(0,0,0,0.15)",
                    borderRadius: "12px",
                    px: 2,
                    py: 0.5,
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: country === c.code ? "#2b6d2a" : "transparent",
                    color: country === c.code ? "#fff" : "#1a1a1a",
                    "&:hover": {
                      backgroundColor: "#97ba3a",
                      color: "#ffffff",
                    },
                  }}
                >
                  <ReactCountryFlag
                    countryCode={c.code}
                    svg
                    style={{ width: 20, height: 15 }}
                  />
                  {c.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>

    </>
  );
}
