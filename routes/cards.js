const cardsRouter = require('express').Router();
const path = require('path');
const readJson = require('./utils/readJsonFromFile.js');

cardsRouter.get('/cards', (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = cardsRouter;
