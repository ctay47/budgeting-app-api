const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const budgetsController = require('./controllers/budgetsController.js');

app.get('/', (req, res) => {
  res.send('Welcome to the Budget APP');
});



app.use('/budgets', budgetsController);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'page not found' });
});

module.exports = app;
