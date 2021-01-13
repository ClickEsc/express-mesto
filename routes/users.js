const usersRouter = require('express').Router();
const users = require('../data/users.json');

// Запрос списка пользователей
usersRouter.get('/users', (req, res) => {
  res.send(users);
});

// Запрос информации о пользователе по id
usersRouter.get('/users/:_id', (req, res) => {
  const { _id } = req.params;

  for (let i = 0; i < users.length; i += 1) {
    for (let j = 0; j < users.length; j += 1) {
      if (_id !== users[j]._id) {
        res.status(404).send({ "message": "Нет пользователя с таким id"});
        return;
      }
    }
    if (_id === users[i]._id) {
      res.send(users[i]);
      return;
    }
  }
});

module.exports = usersRouter;
