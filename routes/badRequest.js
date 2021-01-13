const badRequestRrouter = require('express').Router();

badRequestRrouter.get('/*', (req, res) => {
  res.status(404).send({ 'message': "Запрашиваемый ресурс не найден" });
});

module.exports = badRequestRrouter;