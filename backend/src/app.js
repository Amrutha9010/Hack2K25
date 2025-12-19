import express from 'express';
import cors from 'cors';
import doctorRoutes from "./routes/doctor.routes.js";
import slotRoutes from "./routes/slot.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running 🚑' });
});

// Routes (we will add later)
import authRoutes from './routes/auth.routes.js';
app.use('/api/v1/auth', authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/appointments", appointmentRoutes);
import remedyRoutes from "./routes/remedyRoutes.js";
app.use("/api", remedyRoutes);

import sosRoutes from "./routes/sosRoutes.mjs";
app.use("/api/sos", sosRoutes);

// ❗ GLOBAL ERROR HANDLER (MUST)
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

export default app;
