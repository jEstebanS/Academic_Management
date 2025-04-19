const db = require('../config/db');

const Course = {
  getAll: (callback) => {
    db.query(
      `SELECT c.id, c.name, c.teacher_id, p.name AS teacher_name, c.students
       FROM Course c
       LEFT JOIN Teacher t ON c.teacher_id = t.id
       LEFT JOIN Person p ON t.id = p.id`,
      callback
    );
  },

  getById: (id, callback) => {
    db.query(
      `SELECT c.id, c.name, c.teacher_id, p.name AS teacher_name, c.students
       FROM Course c
       LEFT JOIN Teacher t ON c.teacher_id = t.id
       LEFT JOIN Person p ON t.id = p.id
       WHERE c.id = ?`,
      [id],
      callback
    );
  },

  create: (course, callback) => {
    const { name, teacher_id } = course;
    db.query('INSERT INTO Course (name, teacher_id) VALUES (?, ?)', [name, teacher_id], callback);
  },

  update: (id, course, callback) => {
    const { name, teacher_id } = course;
    db.query('UPDATE Course SET name = ?, teacher_id = ? WHERE id = ?', [name, teacher_id, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM Course WHERE id = ?', [id], callback);
  }
};

module.exports = Course;

