const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS setup (for separate frontend deployment)
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",  // e.g. "https://my-frontend.vercel.app"
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(express.json());

// API routes
app.use('/ai', aiRoutes);

// ---------- Integrated Deployment (Frontend served by backend) ----------
if (process.env.SERVE_FRONTEND === "true") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
  });
}
// -----------------------------------------------------------------------

module.exports = app;
