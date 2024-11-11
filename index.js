const express = require("express");
const os = require("os"); // Import os module
const app = express();

// Set Pug as the template engine
app.set("view engine", "pug");
app.set("views", "./views");

// Serve static files from the public directory
app.use(express.static("public"));

// Route to render the OS details
app.get("/", (req, res) => {
  const osDetails = {
    platform: os.platform(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    cpus: os.cpus(),
    uptime: os.uptime(),
  };
  res.render("i", { osDetails });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
