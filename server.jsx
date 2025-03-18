const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;
const API_KEY = "your_new_valid_api_key";

app.use(cors());  // Enable CORS for all origins

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get(`https://superheroapi.com/api/${API_KEY}/all`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching superhero data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
