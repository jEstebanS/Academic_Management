const Student = require('../models/student.model');

exports.getAllStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getStudentById = (req, res) => {
  const id = req.params.id;
  Student.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Estudiante no encontrado' });
    res.json(results[0]);
  });
};

exports.createStudent = (req, res) => {
  const { id } = req.body;
  Student.create(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Estudiante creado', id });
  });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { courses } = req.body;
  Student.update(id, courses, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Estudiante actualizado' });
  });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Estudiante eliminado' });
  });
};

