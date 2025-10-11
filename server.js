const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint for questions
app.get('/questions', (req, res) => {
  const questions = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions.json')));
  res.json(questions);
});

// Catch-all: for all other routes, serve index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
