// routes/teacher.routes.js
const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teacher.controller');
const { authenticateToken, checkRole } = require('../middlewares/auth.middleware');

// Obtener todos los docentes
router.get('/', teacherController.getAllTeachers);

// Obtener un docente por ID
router.get('/:id', teacherController.getTeacherById);

// Crear un nuevo docente (opcional: puedes agregar seguridad aquí también)
router.post('/', teacherController.createTeacher);

// Actualizar un docente
router.put('/:id', authenticateToken, checkRole('admin'), teacherController.updateTeacher);

// Eliminar un docente (requiere token + ser admin)
router.delete('/:id', authenticateToken, checkRole('admin'), teacherController.deleteTeacher);

module.exports = router;



