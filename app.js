const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');
const badRequestRouter = require('./routes/badRequest.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Доступ к публичным файлам
app.use('/', express.static(`${__dirname}/public`));

// Мидлвэр для авторизации
app.use((req, res, next) => {
  req.user = {
    _id: '60196aadeb5e4531602bd96d',
  };

  next();
});

// Роутинг
app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('/', badRequestRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
