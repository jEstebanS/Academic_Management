const db = require('../config/db');

const StudentCourse = {
  getAll: (callback) => {
    db.query(
      `SELECT sc.student_id, p.name AS student_name, sc.course_id, c.name AS course_name, sc.enrollment_date, sc.status
       FROM StudentCourse sc
       JOIN Student s ON sc.student_id = s.id
       JOIN Person p ON s.id = p.id
       JOIN Course c ON sc.course_id = c.id`,
      callback
    );
  },

  getByIds: (student_id, course_id, callback) => {
    db.query(
      `SELECT * FROM StudentCourse WHERE student_id = ? AND course_id = ?`,
      [student_id, course_id],
      callback
    );
  },

  create: (data, callback) => {
    const { student_id, course_id, status } = data;
    db.query(
      `INSERT INTO StudentCourse (student_id, course_id, status) VALUES (?, ?, ?)`,
      [student_id, course_id, status || 'active'],
      callback
    );
  },

  updateStatus: (student_id, course_id, status, callback) => {
    db.query(
      `UPDATE StudentCourse SET status = ? WHERE student_id = ? AND course_id = ?`,
      [status, student_id, course_id],
      callback
    );
  },

  delete: (student_id, course_id, callback) => {
    db.query(
      `DELETE FROM StudentCourse WHERE student_id = ? AND course_id = ?`,
      [student_id, course_id],
      callback
    );
  }
};

module.exports = StudentCourse;

