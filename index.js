const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const os = require("os"); // Import os module
const app = express();

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = socketIo(server);

// Set Pug as the template engine
app.set("view engine", "pug");
app.set("views", "./views");

// Serve static files from the public directory
app.use(express.static("public"));

// Route to render the OS details (Initial page load)
app.get("/", (req, res) => {
  const totalmem = os.totalmem() / (1024 * 1024); // Convert to MB
  const freemem = os.freemem() / (1024 * 1024); // Convert to MB
  const usedMemory = totalmem - freemem;
  const usedMemoryPercentage = (usedMemory / totalmem) * 100;
  const freeMemoryPercentage = (freemem / totalmem) * 100;

  // Gathering other os info
  const uptime = os.uptime();
  const platform = os.platform();
  const arch = os.arch();
  const hostname = os.hostname();
  const cpus = os.cpus();
  const networkInterfaces = os.networkInterfaces();
  const osRelease = os.release();
  const osType = os.type();
  const loadAvg = os.loadavg();
  const userInfo = os.userInfo();

  res.render("i", {
    totalmem,
    freemem,
    usedMemory,
    usedMemoryPercentage,
    freeMemoryPercentage,
    uptime,
    platform,
    arch,
    hostname,
    cpus,
    networkInterfaces,
    osRelease,
    osType,
    loadAvg,
    userInfo,
  });
});

// Function to gather system data
const getSystemData = () => {
  const totalmem = os.totalmem() / (1024 * 1024); // Convert to MB
  const freemem = os.freemem() / (1024 * 1024); // Convert to MB
  const usedMemory = totalmem - freemem;
  const usedMemoryPercentage = (usedMemory / totalmem) * 100;
  const freeMemoryPercentage = (freemem / totalmem) * 100;

  // Gathering other os info
  const uptime = os.uptime();
  const cpus = os.cpus();

  return {
    totalmem,
    freemem,
    usedMemory,
    usedMemoryPercentage,
    freeMemoryPercentage,
    uptime,
    cpus,
  };
};

// Emit real-time updates every 1 second
setInterval(() => {
  const systemData = getSystemData();
  io.emit("systemData", systemData); // Emit to all connected clients
}, 1000); // Update every 1 second

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server running on port ${port}`));
