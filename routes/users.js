const usersRouter = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');

// Запрос списка пользователей
usersRouter.get('/users', getUsers);

// Запрос информации о пользователе по id
/*usersRouter.get('/users/:userId', getUserById);*/

// Запрос на создание пользователя
usersRouter.post('/users', createUser);

module.exports = usersRouter;
