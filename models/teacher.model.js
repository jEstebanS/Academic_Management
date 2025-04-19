const db = require('../config/db');

const Teacher = {
  getAll: (callback) => {
    db.query(
      `SELECT t.id, p.document, p.name, p.age, t.specialty
       FROM Teacher t JOIN Person p ON t.id = p.id`,
      callback
    );
  },

  getById: (id, callback) => {
    db.query(
      `SELECT t.id, p.document, p.name, p.age, t.specialty
       FROM Teacher t JOIN Person p ON t.id = p.id
       WHERE t.id = ?`,
      [id],
      callback
    );
  },

  create: (id, specialty, callback) => {
    db.query('INSERT INTO Teacher (id, specialty) VALUES (?, ?)', [id, specialty], callback);
  },

  update: (id, specialty, callback) => {
    db.query('UPDATE Teacher SET specialty = ? WHERE id = ?', [specialty, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Teacher WHERE id = ?', [id], callback);
  }
};

module.exports = Teacher;

