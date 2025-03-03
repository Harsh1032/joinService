const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const http = require("http"); // Required for socket.io
const { Server } = require("socket.io");

const applicantRoutes = require('./routes/routes'); 

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

// Store `io` instance in the Express app
app.set("io", io);

// MongoDB Connection
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

app.use(express.json());
app.use(cors());

// Use the routes
app.use('/api/applicants', applicantRoutes);

// Handle socket connection
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
