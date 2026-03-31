import React, { useState } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { submitContactForm } from "../../api/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    serviceInterest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.serviceInterest
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    // ✅ Save to DB
    const response = await submitContactForm({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      serviceInterest: formData.serviceInterest,
      message: formData.message || "",
    });

    if (response.error) {
      console.error("API Error:", JSON.stringify(response.error, null, 2));
      alert("Failed to save message in database.");
      setLoading(false);
      return;
    }

    // ✅ SEND EMAIL (CLEAN + SAFE)
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_type: "Get In Touch",

          // 🎯 VISIBILITY CONTROL (template_2p21kkt)
          newsletter_section: "display:none;",
          subscription_section: "display:none;",
          contact_section: "display:block;",
          job_section: "display:none;",

          // ✅ CONTACT FORM DATA (template_2p21kkt)
          first_name: formData.firstName || "",
          last_name: formData.lastName || "",
          email: formData.email || "",
          phone_number: formData.phoneNumber || "",
          service_interest: formData.serviceInterest || "",
          message: formData.message || "",
          revenue: "",

          // 🔒 CLEAR NEWSLETTER DATA
          subscriber_email: "",

          // 🔒 CLEAR APPLY FORM DATA (Isolation)
          firstName: "",
          phone: "",
          jobType: "",
          position: "",
          reference: "",
          resumeURL: "",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // ✅ Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          serviceInterest: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setLoading(false);
      });
  };

  const textFieldSx = {
    "& .MuiInputBase-input": {
      color: "#585555ff",
      "::placeholder": {
        color: "rgba(2, 31, 11, 0.6)",
        opacity: 1,
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, background: "transparent", borderRadius: "14px" }}>
      <Box component="form" onSubmit={handleSubmit}>
        {/* First + Last Name */}
        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mb: 3 }}>
          <TextField
            name="firstName"
            placeholder="First Name *"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
          <TextField
            name="lastName"
            placeholder="Last Name *"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
        </Box>

        {/* Email + Phone */}
        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mb: 3 }}>
          <TextField
            name="email"
            placeholder="Email *"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
          <TextField
            name="phoneNumber"
            placeholder="Phone Number *"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
        </Box>

        {/* Service Interested */}
        <TextField
          select
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          variant="standard"
          fullWidth
          sx={{ mb: 3, ...textFieldSx }}
        >
          <MenuItem value="" disabled>
            Service Interested *
          </MenuItem>
          <MenuItem value="Tax Service">Tax Service</MenuItem>
          <MenuItem value="Bookkeeping Service">Bookkeeping Service</MenuItem>
          <MenuItem value="CPA Service">CPA Service</MenuItem>
          <MenuItem value="Virtual Assistance">Virtual Assistance</MenuItem>
          <MenuItem value="Data Entry Service">Data Entry Service</MenuItem>
          <MenuItem value="Financial Controller Service">
            Financial Controller Service
          </MenuItem>
        </TextField>

        {/* Message */}
        <TextField
          name="message"
          placeholder="Message"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={textFieldSx}
          variant="standard"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #1d4230, #2e6f4e)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(135deg, #2e6f4e, #1d4230)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
