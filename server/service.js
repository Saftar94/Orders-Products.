const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3007;
const { Server } = require("socket.io");

const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessions", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessions", activeSessions);
  });
});

http.listen(PORT, () => {
  console.log("Server is running on http://localhost:3005");
});
