// server/server.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Simple test route
app.get('/', (req, res) => {
  res.send('Toy store backend is running!');
});
console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);

// Connect to MongoDB (we’ll set this up soon)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
