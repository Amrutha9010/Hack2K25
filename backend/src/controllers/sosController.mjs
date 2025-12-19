import { sendEmail } from "../utils/sendEmail.mjs";
import { sendSMS } from "../utils/sendSMS.mjs";

export const createSOS = async (req, res) => {
  try {
    const {
      latitude,
      longitude,
      userEmail,
      emergencyEmail,
      adminEmail,
      emergencyPhone,
    } = req.body;

    console.log("📨 Incoming SOS:", req.body);

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Location missing" });
    }

    const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const details = { email: "pending", sms: "pending" };

    // Send Emails
    try {
      await sendEmail({
        lat: latitude,
        lng: longitude,
        userEmail,
        emergencyEmail,
        adminEmail,
      });
      details.email = "ok";
    } catch (err) {
      console.error("❌ Email send failed", err);
      details.email = err?.message || "email_failed";
    }

    // Send SMS
    try {
      if (emergencyPhone) {
        await sendSMS({
          message: `SOS! Emergency at https://www.google.com/maps?q=${latitude},${longitude}`,
          phone: emergencyPhone
        });
        details.sms = "ok";
      } else {
        details.sms = "skipped_no_phone";
      }
    } catch (err) {
      console.error("❌ SMS send failed", err);
      details.sms = err?.message || "sms_failed";
    }

    const success = details.email === "ok";

    if (!success) {
      return res.status(500).json({
        message: "SOS partially/fully failed",
        details,
      });
    }

    res.status(201).json({
      message: "SOS sent successfully",
      details,
    });
  } catch (error) {
    console.error("❌ SOS send failed", error);
    res.status(500).json({
      message: "SOS failed to send",
      error: error?.message,
    });
  }
};
