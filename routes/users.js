const usersRouter = require('express').Router();
const path = require('path');
const readJson = require('./utils/readJsonFromFile.js');

// Запрос списка пользователей
usersRouter.get('/users', (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Запрос информации о пользователе по id
usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      const userToFind = users.find((user) => user._id === id);
      if (!userToFind) {
        res.status(404).json({ "message": "Нет пользователя с таким id" });
      }
      res.send(userToFind);
    });
});

module.exports = usersRouter;
