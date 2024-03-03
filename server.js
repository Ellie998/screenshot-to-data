// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname))); // Serve your static files

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Ensure 'index.html' exists in your project directory
});

app.post("/submit", (req, res) => {
  const prompt = req.body.prompt;
  // Process the 'prompt' and prepare 'img_url', for example purposes let's just send a placeholder image
  const img_url =
    "https://postfiles.pstatic.net/MjAyMDEyMjhfMjU0/MDAxNjA5MTM4ODk0NTA2.yL3vIiUwgOG2lDaTZcWV5pI9yuy8YoPb-TQOMa6rA8gg.lI3ES1h15PflRAgO59klvHsnF2a_aPdlnCOUy4Ip0zAg.JPEG.quest_kor/BlogPost-IM-MonitoringMetrics-AR-63874.jpg-1100x500x2.jpg?type=w966"; // Replace this with actual image processing logic

  res.json({ img_url }); // Send back the image URL
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
