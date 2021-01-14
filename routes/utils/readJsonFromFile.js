const fs = require('fs').promises;

const readJson = (path) => {
  return fs.readFile(path)
    .catch(() => {
      throw `File ${path} not found`;
    })
    .then((text) => {
      try {
        return JSON.parse(text);
      }
      catch (_) {
        throw 'Json is invalid';
      }
    });
};

module.exports = readJson;
