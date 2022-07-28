const express = require('express');
const budgets = express.Router();

const budgetsData = require('../models/budget.js');

budgets.get('/', (req, res) => {
  res.json(budgetsData);
});
budgets.get('/:arrayIndex', (req, res) => {
  // console.log(req.params);
  const { arrayIndex } = req.params;
  if (budgetsData[arrayIndex]) {
    res.json(budgetsData[arrayIndex]);
  } else {
    res.redirect(404).send({ error: 'Not found' });
  }
});
budgets.post('/', (req, res) => {
  budgetsData.push(req.body);
  res.json(budgetsData[budgetsData.length - 1]);
});

budgets.delete('/:arrayIndex', (request, response) => {
  console.log('Delete /logs');
  const { arrayIndex: index } = request.params;
  budgetsData.splice(index, 1);
  response.json(budgetsData);
});

budgets.put('/:arrayIndex', (req, res) => {
  budgetsData[req.params.arrayIndex] = req.body;
  res.status(200).json(budgetsData[req.params.arrayIndex]);
});


module.exports = budgets;