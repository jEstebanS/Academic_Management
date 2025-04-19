const express = require('express');
const router = express.Router();

const courseController = require('../controllers/course.controller');
const { authenticateToken, checkRole } = require('../middlewares/auth.middleware');

// Obtener todos los cursos
router.get('/', courseController.getAllCourses);

// Obtener un curso por ID
router.get('/:id', courseController.getCourseById);

// Crear un nuevo curso
router.post('/', courseController.createCourse);

// Actualizar un curso
router.put('/:id', authenticateToken, checkRole('admin'), courseController.updateCourse);

// Eliminar un curso (requiere token + admin)
router.delete('/:id', authenticateToken, checkRole('admin'), courseController.deleteCourse);

module.exports = router;

