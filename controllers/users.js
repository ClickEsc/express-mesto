const path = require('path');
const readJson = require('../utils/readJsonFromFile.js');
const User = require('../models/user');

// Запрос списка пользователей
module.exports.getUsers = (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Запрос информации о пользователе по id
module.exports.getUserById = (req, res) => {
  const { userId } = req.params;
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      const userToFind = users.find((user) => user._id === userId);
      if (!userToFind) {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
      res.send(userToFind);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Запрос на создание пользователя
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};
