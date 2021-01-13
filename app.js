const express = require('express');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');
const badRequestRouter = require('./routes/badRequest.js');

const { PORT = 3000 } = process.env;

const app = express();

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('/', badRequestRouter);

// Доступ к публичным файлам
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});