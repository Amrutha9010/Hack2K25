import { useState, useRef } from "react";
import axios from "axios";
import "./ForgotPassword.css";

function ForgotPassword({ onClose }) {
  const [identifier, setIdentifier] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const otpRefs = useRef([]);

  const clearAfter = (fn) => setTimeout(fn, 4000);

  /* ================= SEND OTP ================= */
  const sendOtp = async () => {
    if (!identifier.trim()) {
      setMessage("❗ Please enter your email");
      clearAfter(() => setMessage(""));
      return;
    }

    try {
      await axios.post("/api/v1/auth/send-otp", { identifier });
      setMessage(`OTP sent to ${identifier}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to send OTP");
    }

    clearAfter(() => setMessage(""));
  };

  /* ================= OTP INPUT ================= */
  const handleOtpInput = (index, e) => {
    const value = e.target.value.replace(/\D/, ""); // numbers only

    if (!value) return;

    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);

    if (index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace") {
      const updated = [...otpDigits];
      updated[index] = "";
      setOtpDigits(updated);

      if (index > 0) otpRefs.current[index - 1]?.focus();
    }
  };

  /* ================= VERIFY OTP ================= */
  const verifyOtp = async () => {
    const otp = otpDigits.join("");

    if (otp.length !== 6) {
      setOtpMessage("❗ Enter complete 6-digit OTP");
      clearAfter(() => setOtpMessage(""));
      return;
    }

    try {
      await axios.post("/api/v1/auth/verify-otp", { identifier, otp });
      setOtpVerified(true);
      setOtpMessage("✅ OTP verified");
    } catch (error) {
      setOtpMessage(error.response?.data?.message || "Invalid OTP");
    }

    clearAfter(() => setOtpMessage(""));
  };

  /* ================= RESET PASSWORD ================= */
  const resetPassword = async () => {
    if (!otpVerified) {
      setMessage("❗ Verify OTP first");
      clearAfter(() => setMessage(""));
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("❗ Passwords do not match");
      clearAfter(() => setMessage(""));
      return;
    }

    try {
      await axios.post("/api/v1/auth/reset-password", {
        identifier,
        otp: otpDigits.join(""),
        newPassword,
        confirmPassword,
      });

      setMessage("🎉 Password reset successful");
      clearAfter(onClose);
    } catch (error) {
      setMessage(error.response?.data?.message || "Reset failed");
      clearAfter(() => setMessage(""));
    }
  };

  return (
    <div className="forgot-wrapper">
      <div className="forgot-container">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="forgot-heading">Forgot Password</h2>

        <input
          type="text"
          placeholder="Enter registered email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="input-field"
        />

        <button
          type="button"
          className="action-button"
          onClick={sendOtp}
        >
          Send OTP
        </button>

        {/* OTP INPUT */}
        <div className="otp-group">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (otpRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className="otp-input"
              value={digit}
              onChange={(e) => handleOtpInput(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
          ))}
        </div>

        <button type="button" className="action-button" onClick={verifyOtp}>
          Verify OTP
        </button>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input-field"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input-field"
        />

        <button type="button" className="action-button" onClick={resetPassword}>
          Reset Password
        </button>

        <p className="back-login" onClick={onClose}>
          ← Back to Login
        </p>

        {otpMessage && <p className="message">{otpMessage}</p>}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
