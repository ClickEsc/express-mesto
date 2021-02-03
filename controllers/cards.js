const Card = require('../models/card');

// Запрос списка карточек
module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send({ data: cards }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};

// Запрос на создание карточки
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).json({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).json({ message: 'На сервере произошла ошибка' });
      }
    });
};

// Запрос на удаление карточки по идентификатору
module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).json({ message: 'Нет карточки с таким id' });
      } else {
        res.status(500).json({ message: 'На сервере произошла ошибка' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).json({ message: 'Нет карточки с таким id' });
      } else {
        res.status(500).json({ message: 'На сервере произошла ошибка' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).json({ message: 'Нет карточки с таким id' });
      } else {
        res.status(500).json({ message: 'На сервере произошла ошибка' });
      }
    });
};
