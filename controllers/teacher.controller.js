const Teacher = require('../models/teacher.model');

exports.getAllTeachers = (req, res) => {
  Teacher.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getTeacherById = (req, res) => {
  const id = req.params.id;
  Teacher.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Docente no encontrado' });
    res.json(results[0]);
  });
};

exports.createTeacher = (req, res) => {
  const { id, specialty } = req.body;
  Teacher.create(id, specialty, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Docente creado', id });
  });
};

exports.updateTeacher = (req, res) => {
  const id = req.params.id;
  const { specialty } = req.body;
  Teacher.update(id, specialty, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Docente actualizado' });
  });
};

exports.deleteTeacher = (req, res) => {
  const id = req.params.id;
  Teacher.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Docente eliminado' });
  });
};

