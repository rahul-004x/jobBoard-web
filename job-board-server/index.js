const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Endpoint to fetch job listings
app.get('/api/jobs', async (req, res) => {
  const { query } = req.query;

  try {
    const serpApiUrl = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&api_key=${process.env.SERP_API_KEY}`;
    const response = await axios.get(serpApiUrl);
    res.json(response.data.jobs_results || []);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});