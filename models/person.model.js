const db = require('../config/db');

const Person = {
  getAll: (callback) => {
    db.query('SELECT * FROM Person', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM Person WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    const { document, name, age } = data;
    db.query(
      'INSERT INTO Person (document, name, age) VALUES (?, ?, ?)',
      [document, name, age],
      callback
    );
  },

  update: (id, data, callback) => {
    const { document, name, age } = data;
    db.query(
      'UPDATE Person SET document = ?, name = ?, age = ? WHERE id = ?',
      [document, name, age, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Person WHERE id = ?', [id], callback);
  }
};

module.exports = Person;

