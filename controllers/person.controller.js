const Person = require('../models/person.model');

exports.getAllPersons = (req, res) => {
  Person.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getPersonById = (req, res) => {
  const id = req.params.id;
  Person.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Persona no encontrada' });
    res.json(results[0]);
  });
};

exports.createPerson = (req, res) => {
  Person.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Persona creada', id: result.insertId });
  });
};

exports.updatePerson = (req, res) => {
  const id = req.params.id;
  Person.update(id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Persona actualizada' });
  });
};

exports.deletePerson = (req, res) => {
  const id = req.params.id;
  Person.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Persona eliminada' });
  });
};

