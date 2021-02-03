const User = require('../models/user');

// Запрос списка пользователей
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};

// Запрос информации о пользователе по id
module.exports.getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};

// Запрос на создание пользователя
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};

// Запрос на обновление информации в профиле
module.exports.updateProfileInfo = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};

// Запрос на обновление аватара пользователя
module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).json({ message: `Произошла ошибка: ${err}` }));
};
