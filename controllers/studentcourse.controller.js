const StudentCourse = require('../models/studentcourse.model');

exports.getAllStudentCourses = (req, res) => {
  StudentCourse.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getStudentCourse = (req, res) => {
  const { student_id, course_id } = req.params;
  StudentCourse.getByIds(student_id, course_id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Inscripción no encontrada' });
    res.json(results[0]);
  });
};

exports.createStudentCourse = (req, res) => {
  const data = req.body;
  StudentCourse.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Inscripción creada' });
  });
};

exports.updateStudentCourse = (req, res) => {
  const { student_id, course_id } = req.params;
  const { status } = req.body;
  StudentCourse.updateStatus(student_id, course_id, status, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Estado actualizado' });
  });
};

exports.deleteStudentCourse = (req, res) => {
  const { student_id, course_id } = req.params;
  StudentCourse.delete(student_id, course_id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Inscripción eliminada' });
  });
};

