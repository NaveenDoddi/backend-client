require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const connectDB = require('./db');

const app = express();

// Connect to MongoDB
// connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
      res.send("Server deployed and running on vercel.");
});
app.use(cors({
      origin: 'http://localhost:9000'  //to be changed later to vercel url
}));

// You can add more route files here as your application grows
// app.use('/api/users', require('./routes/users'));
// app.use('/api/posts', require('./routes/posts'));

const port = process.env.PORT || 9000;

app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
});