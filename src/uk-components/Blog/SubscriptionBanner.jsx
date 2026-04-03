import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { submitNewsletterForm } from "../../api/client";

const SubscriptionBanner = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const _handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_type: "Blog Subscription",
          newsletter_section: "display:block;",
          subscription_section: "display:block;",
          contact_section: "display:none;",
          job_section: "display:none;",
          email: newsletterEmail,
          subscriber_email: newsletterEmail,
          source: "Blog Subscription Banner",

          // 🔒 CLEAR CONTACT DATA
          first_name: "",
          last_name: "",
          phone_number: "",
          service_interest: "",
          message: "",
          revenue: "",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // ✅ Silent Success (Removed Alert as requested)
        setNewsletterEmail("");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send subscription. Try again later.");
        setLoading(false);
      });
  };

  const handleNewsletterSubmitBrevo = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);
    const response = await submitNewsletterForm({ email: newsletterEmail });

    if (response.error) {
      alert("Failed to send subscription. Try again later.");
      setLoading(false);
      return;
    }

    if (response.emailNotification && !response.emailNotification.success) {
      alert("Subscription was received, but the email notification could not be delivered.");
    }

    setNewsletterEmail("");
    setLoading(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2b6d2a",
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 4 },
        mt: 8,
        textAlign: "center",
        borderRadius: "22px",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 14px 35px rgba(0,0,0,0.15)",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "22px" },
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#97ba3a",
          textTransform: "uppercase",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Join Thousands
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          mt: 1.5,
          fontSize: { xs: "14px", md: "16px" },
          color: "#fff",
          maxWidth: 520,
          mx: "auto",
          lineHeight: 1.6,
        }}
      >
        Get curated finance, accounting & growth insights straight to your inbox.
      </Typography>

      {/* Input + Button */}
      <Box
        component="form"
        onSubmit={handleNewsletterSubmitBrevo}
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Email Input */}
        <TextField
          placeholder="Enter your email"
          size="small"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "340px" },
            bgcolor: "#fff",
            borderRadius: "10px",
            fontFamily: "'Poppins', sans-serif",
            "& fieldset": {
              border: "1px solid #97ba3a",
            },
          }}
        />

        {/* Subscribe Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            bgcolor: "#97ba3a",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
            px: 4,
            py: 1.2,
            fontSize: "14px",
            textTransform: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {loading ? "Sending..." : "Subscribe →"}
        </Button>
      </Box>
    </Box>
  );
};

export default SubscriptionBanner;
