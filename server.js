// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { sendOpenaiReq } = require("./lib/dall_e");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname))); // Serve your static files

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Ensure 'index.html' exists in your project directory
});

app.post("/submit", async (req, res) => {
  const prompt = req.body.prompt;
  // Process the 'prompt' and prepare 'img_url', for example purposes let's just send a placeholder image

  try {
    const img_url = await sendOpenaiReq(prompt);
    res.json({ img_url }); // Send back the image URL
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
