const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    // eslint-disable-next-line no-throw-literal
    throw `File ${path} not found`;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      // eslint-disable-next-line no-throw-literal
      throw 'Json is invalid';
    }
  });

module.exports = readJson;
