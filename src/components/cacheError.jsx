// src/components/cacheError.jsx
// ------------------------------
// A simple reusable error-logging utility for React apps
// ------------------------------

import axios from "axios";

/**
 * Logs and optionally reports errors from anywhere in your app.
 *
 * @param {Error|Object} error - The caught error object.
 */
export default function cacheError(error) {
  console.group("❌ Cached Error");
  console.error("Message:", error?.message || error);
  if (error?.stack) console.error("Stack:", error.stack);
  console.groupEnd();

  // ✅ OPTIONAL: Send the error to your backend for monitoring/logging
  try {
    axios.post("http://localhost:5000/api/log-error", {
      message: error?.message || "Unknown error",
      stack: error?.stack || null,
      time: new Date().toISOString(),
      source: window.location.pathname,
    });
  } catch (loggingError) {
    console.warn("⚠️ Failed to send error log to backend:", loggingError.message);
  }

  // ✅ OPTIONAL: Cache locally for debugging
  try {
    const cachedErrors = JSON.parse(localStorage.getItem("cachedErrors") || "[]");
    cachedErrors.push({
      message: error?.message || "Unknown error",
      time: new Date().toISOString(),
      path: window.location.pathname,
    });
    localStorage.setItem("cachedErrors", JSON.stringify(cachedErrors));
  } catch (storageError) {
    console.warn("⚠️ Failed to store error locally:", storageError.message);
  }
}
