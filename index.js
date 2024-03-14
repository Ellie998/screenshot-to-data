// server.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { sendOpenaiReq } = require("./server/lib/dall_e");

const app = express();
const PORT = process.env.PORT || 3000; // Heroku가 할당하는 포트 또는 기본 포트 3000 사용

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname))); // Serve your static files

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Ensure 'index.html' exists in your project directory
});

app.post("/newImg", async (req, res) => {
  const prompt = req.body.prompt;
  // Process the 'prompt' and prepare 'img_url', for example purposes let's just send a placeholder image

  try {
    const img_url = await sendOpenaiReq(prompt);
    res.json({ img_url }); // Send back the image URL
  } catch (error) {
    console.log(error);
  }
});
app.post("/screenData", async (req, res) => {
  const files = req.body.files;
  // Process the 'prompt' and prepare 'img_url', for example purposes let's just send a placeholder image

  try {
    // const img_url = await sendOpenaiReq(prompt);
    // res.json({ img_url }); // Send back the image URL
    res.json({ data: "result" });
  } catch (error) {
    console.log(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
