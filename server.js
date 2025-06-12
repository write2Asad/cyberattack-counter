const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/cyberfeed", async (req, res) => {
  const feedUrl = "https://threatmap-api.checkpoint.com/ThreatMap/api/feed";

  try {
    const response = await fetch(feedUrl);

    if (!response.ok) {
      console.error("Feed request failed:", response.statusText);
      return res.status(500).send("Feed request failed");
    }

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Pipe the SSE stream to client
    response.body.pipe(res);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Failed to fetch event stream");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
