const usersRouter = require('express').Router();
const {
  getUsers, getUserById, createUser, updateProfileInfo, updateAvatar,
} = require('../controllers/users');

// Запрос списка пользователей
usersRouter.get('/users', getUsers);

// Запрос информации о пользователе по id
usersRouter.get('/users/:userId', getUserById);

// Запрос на создание пользователя
usersRouter.post('/users', createUser);

// Запрос на обновление информации в профиле
usersRouter.patch('/users/me', updateProfileInfo);

// Запрос на обновление аватара пользователя
usersRouter.patch('/users/me/avatar', updateAvatar);

module.exports = usersRouter;
