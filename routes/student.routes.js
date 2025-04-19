const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Endpoints para gestionar estudiantes
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Lista de estudiantes
 */
router.get('/', controller.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Obtener un estudiante por ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudiante encontrado
 */
router.get('/:id', controller.getStudentById);

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Crear un nuevo estudiante (requiere ID de una Persona existente)
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estudiante creado
 */
router.post('/', controller.createStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Actualizar el contador de cursos del estudiante
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courses:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Estudiante actualizado
 */
router.put('/:id', controller.updateStudent);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Eliminar un estudiante
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estudiante eliminado
 */
router.delete('/:id', controller.deleteStudent);

module.exports = router;
