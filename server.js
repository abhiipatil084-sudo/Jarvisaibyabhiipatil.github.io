
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve frontend files

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://api.example.com/your-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 100
      })
    });

    const data = await response.json();
    res.json({ reply: data.choices ? data.choices[0].text : "No reply." });
  } catch (error) {
    res.status(500).json({ reply: "Error contacting API." });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
