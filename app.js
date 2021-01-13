const express = require('express');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

// Доступ к публичным файлам
app.use(express.static(BASE_PATH.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
