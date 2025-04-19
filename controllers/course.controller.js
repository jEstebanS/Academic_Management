const Course = require('../models/course.model');

exports.getAllCourses = (req, res) => {
  Course.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getCourseById = (req, res) => {
  const id = req.params.id;
  Course.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Curso no encontrado' });
    res.json(results[0]);
  });
};

exports.createCourse = (req, res) => {
  const course = req.body;
  Course.create(course, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Curso creado', id: result.insertId });
  });
};

exports.updateCourse = (req, res) => {
  const id = req.params.id;
  const course = req.body;
  Course.update(id, course, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Curso actualizado' });
  });
};

exports.deleteCourse = (req, res) => {
  const id = req.params.id;
  Course.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Curso eliminado' });
  });
};

