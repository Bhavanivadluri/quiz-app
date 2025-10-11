const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Load questions from JSON
app.get('/questions', (req, res) => {
  const questions = JSON.parse(fs.readFileSync('questions.json'));
  res.json(questions);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
