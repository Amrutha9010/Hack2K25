import React, { useState, useEffect } from "react";
import { sendSOS } from "../services/sosService";

const SOSButton = () => {
  const [location, setLocation] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  /* ================= GET LOCATION ================= */
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => alert("Location permission denied")
    );
  };

  /* ================= START COUNTDOWN ================= */
  const startCountdown = () => {
    setCountdown(5);

    const iId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const tId = setTimeout(async () => {
      try {
        const res = await sendSOS({
          latitude: location.lat,
          longitude: location.lng,
        });

        alert("🚨 SOS SENT!\nEmergency contacts have been notified.");
        console.log("SOS response:", res.data);
      } catch (err) {
        alert("❌ Failed to send SOS. Please try again.");
        console.error("SOS error:", err);
      } finally {
        resetSOS();
      }
    }, 5000);

    setIntervalId(iId);
    setTimeoutId(tId);
  };

  /* ================= CANCEL SOS ================= */
  const cancelSOS = () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    alert("❌ SOS Cancelled");
    resetSOS();
  };

  const resetSOS = () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    setCountdown(null);
    setLocation(null);
  };

  /* ================= SAFETY CLEANUP ================= */
  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalId);
    }
  }, [countdown, intervalId]);

  return (
    <>
      {/* SOS BUTTON */}
      <button onClick={getLocation} style={styles.sosBtn}>
        🚨 SOS
      </button>

      {/* CONFIRM LOCATION */}
      {location && countdown === null && (
        <div style={styles.popup}>
          <h3>Confirm Emergency Location</h3>

          <p>
            📍 Latitude: <b>{location.lat}</b>
            <br />
            📍 Longitude: <b>{location.lng}</b>
          </p>

          {/* GOOGLE MAPS LINK (NO API, NO CARD) */}
          <a
            href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            View Location on Google Maps
          </a>

          <br />
          <br />

          <button onClick={startCountdown} style={styles.confirmBtn}>
            Confirm SOS
          </button>
        </div>
      )}

      {/* COUNTDOWN */}
      {countdown !== null && (
        <div style={styles.popup}>
          <h3>🚨 Sending SOS in {countdown} seconds</h3>
          <button onClick={cancelSOS} style={styles.cancelBtn}>
            Cancel SOS
          </button>
        </div>
      )}
    </>
  );
};

/* ================= STYLES ================= */
const styles = {
  sosBtn: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "red",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    zIndex: 999,
  },
  popup: {
    position: "fixed",
    top: "20%",
    left: "30%",
    width: "40%",
    background: "#fff",
    padding: "20px",
    zIndex: 1000,
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
  },
  confirmBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  cancelBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "gray",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default SOSButton;
