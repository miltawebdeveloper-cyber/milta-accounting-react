require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase env vars in server");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Multer for memory storage (file handling for application resumes)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/* =========================================
   1. BLOG ENDPOINTS
   ========================================= */

// Get Blogs (with filtering, ordering, limit options)
app.get("/api/blogs", async (req, res) => {
  try {
    const { featured, editors_pick, limit, order, ascending, table } = req.query;
    const tableName = table || "blogs";

    let query = supabase.from(tableName).select("*");

    if (featured === "true") {
      query = query.eq("featured", true);
    }
    if (editors_pick === "true") {
      query = query.eq("editors_pick", true);
    }

    if (order) {
      const isAsc = ascending === "true";
      query = query.order(order, { ascending: isAsc });
    }

    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get Single Blog by slug
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const { table } = req.query;
    const tableName = table || "blogs";

    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw error;
    if (!data) return res.status(404).json({ error: "Blog not found" });

    // Also get latest posts for the sidebar, similar to BlogDetails.jsx
    const { data: latest, error: latestErr } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (latestErr) throw latestErr;

    res.json({ blog: data, latestPosts: latest || [] });
  } catch (error) {
    console.error(`GET /api/blogs/${req.params.slug} error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Update Blog Content (Admin)
app.post("/api/blogs/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { content, table } = req.body;
    const tableName = table || "blogs";

    const { data, error } = await supabase
      .from(tableName)
      .update({ content })
      .eq("id", id);

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error(`POST /api/blogs/${req.params.id}/update error:`, error);
    res.status(500).json({ error: error.message });
  }
});

/* =========================================
   2. CONTACT FORM ENDPOINT
   ========================================= */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      serviceInterest,
      message,
    } = req.body;

    const { data, error } = await supabase.from("contact_messages").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        service_interest: serviceInterest,
        message: message || "",
      },
    ]);

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    res.status(500).json({ error: error.message });
  }
});

/* =========================================
   3. JOB APPLICATION ENDPOINT
   ========================================= */

app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, phone, jobType, position, email, reference } = req.body;
    const file = req.file;

    let resumeURL = "Resume not uploaded";

    if (file) {
      // Create a unique file name
      const originalName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, ""); // sanitize
      const fileName = `resume_${Date.now()}_${originalName}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
        });

      if (uploadError) {
        console.error("Storage upload error:", uploadError);
        throw uploadError;
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(fileName);

      resumeURL = publicUrlData.publicUrl;
    }

    // Insert application record
    const { data, error } = await supabase.from("applications").insert([
      {
        firstName,
        phone,
        jobType,
        position,
        email,
        reference: reference || "",
        resumeURL,
      },
    ]);

    if (error) throw error;

    res.json({ success: true, data, resumeURL });
  } catch (error) {
    console.error("POST /api/apply error:", error);
    res.status(500).json({ error: error.message });
  }
});

/* =========================================
   SERVER START
   ========================================= */

app.listen(port, () => {
  console.log(`Backend Express Server running on port ${port}`);
});
