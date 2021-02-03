const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards');

// Запрос списка карточек
cardsRouter.get('/cards', getCards);

// Запрос на создание карточки
cardsRouter.post('/cards', createCard);

// Запрос на создание карточки
cardsRouter.delete('/cards/:cardId', deleteCard);

module.exports = cardsRouter;
