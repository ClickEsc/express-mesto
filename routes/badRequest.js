const badRequestRrouter = require('express').Router();

badRequestRrouter.get('/*', (req, res) => {
  res.status(404).json({ 'message': "Запрашиваемый ресурс не найден" });
});

badRequestRrouter.use('/*', (req, res) => {
  res.status(404).json({ 'message': `Невозможно выполнить действие ${req.method} для http://localhost:3000${req.path + req.params[0]}` });
});

module.exports = badRequestRrouter;