const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Route to fetch data from Incredible India
app.get('/api/inc-home', async (req, res) => {
  try {
    const response = await axios.get('https://www.incredibleindia.gov.in/en');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching Incredible India page:', error);
    res.status(500).send('Error fetching Incredible India page');
  }
});

app.get('/api/wiki', async (req, res) => {
  const title = req.params.title
  try {
    const response = await axios.get(`https://www.wikipedia.com/${title}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching wikipedia page');
  }
});



// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
