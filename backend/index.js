const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const http = require("http"); // Required for socket.io
const { Server } = require("socket.io");
const applicantRoutes = require("./routes/applicantRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const filterRoutes = require("./routes/filterRoutes");

const app = express();
const server = http.createServer(app);

//**CORS Configuration** (Define before using `cors()`)
const corsOptions = {
  origin: ["http://localhost:5173", "https://celebrated-granita-06a2ae.netlify.app"], //   https://celebrated-granita-06a2ae.netlify.app
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials
};

// 🔹 **Apply Middleware**
app.use(cors(corsOptions)); // CORS should come before defining routes
app.use(express.json()); // Ensure JSON parsing is set up

// 🔹 **Initialize WebSocket Server**
const io = new Server(server, {
  cors: corsOptions, // Ensure proper CORS for WebSocket
});

// 🔹 **Store `io` instance in Express app (For future use)**
app.set("io", io);

// 🔹 **MongoDB Connection**
const mongoURL = process.env.MONGO_URL;
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }) // Ensure MongoDB best practices
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection failed:", err));

// 🔹 **Use Routes (AFTER MIDDLEWARE & DB Connection)**
app.use("/api/applicants", applicantRoutes);// 
app.use("/api/doctors", doctorRoutes);
app.use("/api/filters", filterRoutes);

// 🔹 **WebSocket Connection**
io.on("connection", (socket) => {
  console.log("🔗 Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// 🔹 **Start Server**
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`🚀 Server is running on port ${port}`));
