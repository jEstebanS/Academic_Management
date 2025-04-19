const db = require('../config/db');

const Student = {
  getAll: (callback) => {
    db.query(
      `SELECT s.id, p.document, p.name, p.age, s.courses
       FROM Student s JOIN Person p ON s.id = p.id`,
      callback
    );
  },

  getById: (id, callback) => {
    db.query(
      `SELECT s.id, p.document, p.name, p.age, s.courses
       FROM Student s JOIN Person p ON s.id = p.id
       WHERE s.id = ?`,
      [id],
      callback
    );
  },

  create: (id, callback) => {
    db.query('INSERT INTO Student (id) VALUES (?)', [id], callback);
  },

  update: (id, courses, callback) => {
    db.query('UPDATE Student SET courses = ? WHERE id = ?', [courses, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Student WHERE id = ?', [id], callback);
  }
};

module.exports = Student;

