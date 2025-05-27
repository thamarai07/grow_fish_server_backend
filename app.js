const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

app.use(
  cors({
    origin: "http://localhost:3000", // React's default port
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);

module.exports = app;
