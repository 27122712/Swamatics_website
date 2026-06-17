/**
 * Email sending utility function
 *
 * This function sends email data to the Swamatics email API endpoint.
 * All emails are sent to sales@swamatics.com with the form submission details.
 *
 * API Endpoint: https://swamatics.softedgeappstore.in/send-mail.php
 * The API expects JSON data with: name, email, mobile, message
 */

import axios from "axios";

const sendEmail = async (formData) => {
  try {
    // Map form data to the expected API format
    // Combine firstName and lastName into name
    const fullName = [
      formData.firstName || formData.name || "",
      formData.lastName || "",
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    // Combine countryCode and phone into mobile
    const mobile = [formData.countryCode || "", formData.phone || ""]
      .filter(Boolean)
      .join(" ")
      .trim();

    // Get company and product information
    const company = formData.company || formData.companyName || "";
    const productInterested =
      formData.productInterested || formData.service || "";

    // Build the message with all relevant information
    // Include company and product details in the message since API only accepts name, email, mobile, message
    let messageContent = formData.message || formData.additionalInfo || "";

    // Append company and product information if they exist
    const additionalInfo = [];
    if (formData.subject) {
      additionalInfo.push(`Subject: ${formData.subject}`);
    }
    if (company) {
      additionalInfo.push(`Company: ${company}`);
    }
    if (productInterested) {
      additionalInfo.push(`Product Interested In: ${productInterested}`);
    }

    // Combine message with additional info
    if (additionalInfo.length > 0) {
      if (messageContent) {
        messageContent = `${messageContent}\n\n${additionalInfo.join("\n")}`;
      } else {
        messageContent = additionalInfo.join("\n");
      }
    }

    // Prepare the request payload according to the API specification
    const payload = {
      name: fullName || "Not provided",
      email: formData.email || "",
      mobile: mobile || "",
      message: messageContent || "",
    };

    // API endpoint
    const API_ENDPOINT = "https://swamatics.softedgeappstore.in/send-mail.php";

    // Log the endpoint being used (for debugging)
    console.log("Sending email to:", API_ENDPOINT);
    console.log("Payload:", payload);

    // Send POST request to the API
    const response = await axios.post(API_ENDPOINT, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30000, // 30 seconds timeout
    });

    // Check if the request was successful
    if (response.status >= 200 && response.status < 300) {
      return { success: true, data: response.data };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);

    // Handle axios errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const status = error.response.status;
      const data = error.response.data;

      // Check if response is HTML (error page)
      if (
        typeof data === "string" &&
        (data.trim().startsWith("<!") || data.trim().startsWith("<html"))
      ) {
        console.error("HTML response received:", data.substring(0, 300));
        throw new Error(
          `Server returned an HTML page (HTTP ${status}). The API endpoint may be incorrect or the server is misconfigured.`
        );
      }

      throw new Error(
        data?.error || data?.message || `HTTP error! status: ${status}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from server");
      console.error("Request URL:", API_ENDPOINT);

      // Provide more specific error message
      let errorMessage = "Unable to connect to the email server. ";
      if (error.code === "ECONNREFUSED") {
        errorMessage +=
          "The server refused the connection. Please check if the API endpoint is correct.";
      } else if (error.code === "ETIMEDOUT" || error.code === "ECONNABORTED") {
        errorMessage += "The request timed out. Please try again later.";
      } else if (error.code === "ERR_NETWORK") {
        errorMessage +=
          "Network error occurred. Please check your internet connection.";
      } else {
        errorMessage +=
          "Please check your internet connection or contact support if the problem persists.";
      }

      throw new Error(errorMessage);
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(`Error setting up request: ${error.message}`);
    }
  }
};

/**
 * Alternative: Direct email sending using EmailJS (if you prefer a service)
 * This requires setting up EmailJS account and service
 */
export const sendEmailViaService = async (formData) => {
  try {
    // This is a placeholder - you would use EmailJS or similar service
    // For now, we'll use the backend API approach
    return await sendEmail(formData);
  } catch (error) {
    console.error("Error sending email via service:", error);
    throw error;
  }
};

/**
 * Main export function
 * Call this function with form data to send email
 *
 * @param {Object} formData - Form data object containing:
 *   - firstName/lastName or name
 *   - email
 *   - phone (and optionally countryCode)
 *   - company/companyName
 *   - service/productInterested
 *   - message/additionalInfo
 *   - subject (optional)
 *
 * @returns {Promise<Object>} - { success: boolean, data: any }
 */
export default sendEmail;
