import express from 'express';
import cors from 'cors';

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
// ❗ GLOBAL ERROR HANDLER (MUST)
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err);

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

export default app;
