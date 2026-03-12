import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
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

    emailjs
      .send(
        "service_pu95ky5",
        "template_6p07m5m",
        {
          form_type: "Get In Touch",

          job_section: "display:none;",
          contact_section: "display:block;",

          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          service_interest: formData.serviceInterest,
          revenue: "",
          message: formData.message,

          firstName: "",
          phone: "",
          jobType: "",
          position: "",
          reference: "",
          resumeURL: "",
        },
        "BYgwI5Ebr7rcWTjuw"
      )
      .then(() => {
        alert("Message sent successfully!");
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
      .catch(() => {
        alert("Email sending failed.");
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
    "& .MuiFormLabel-root": {
      color: "rgba(255,255,255,0.5)",
    },
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        p: { xs: 2, sm: 3, md: 6 },
        background: "transparent",
        borderRadius: "14px",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 6 }}>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 1,
            color: "#97ba3a",
          }}
        >
          Send Us Message
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        {/* First + Last Name */}
        <Box
          component="CTA"
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", sm: "row" },
            mb: 4,
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", sm: "row" },
            mb: 4,
          }}
        >
          <TextField
            name="email"
            placeholder="Email Address *"
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
          sx={{ mb: 4, ...textFieldSx }}
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
          placeholder="Write Message"
          fullWidth
          multiline
          rows={5}
          value={formData.message}
          onChange={handleChange}
          sx={{ mb: 4, ...textFieldSx }}
          variant="standard"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            px: 6,
            py: 1.6,
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "30px",
            background: "#2b6d2a",
            color: "#faf5f5ff",
            transition: "0.3s",
            display: "block",
            mx: "auto",
            "&:hover": {
              background: "#97ba3a",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            },
          }}
        >
          {loading ? "Sending..." : "Send Us Message →"}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
