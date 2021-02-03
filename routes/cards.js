const cardsRouter = require('express').Router();
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

// Запрос списка карточек
cardsRouter.get('/cards', getCards);

// Запрос на создание карточки
cardsRouter.post('/cards', createCard);

// Запрос на удаление карточки
cardsRouter.delete('/cards/:cardId', deleteCard);

// Запрос на добавление лайка карточке
cardsRouter.put('/cards/:cardId/likes', likeCard);

// Запрос на удаление лайка с карточки
cardsRouter.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRouter;
