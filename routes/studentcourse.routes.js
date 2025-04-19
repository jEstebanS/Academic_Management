const express = require('express');
const router = express.Router();

const controller = require('../controllers/studentcourse.controller'); // 👈 Asegúrate de esto

const { authenticateToken, checkRole } = require('../middlewares/auth.middleware');

// Rutas
router.get('/', controller.getAllStudentCourses);
router.get('/:student_id/:course_id', controller.getStudentCourse);
router.post('/', controller.createStudentCourse);
router.put('/:student_id/:course_id', authenticateToken, checkRole('admin'), controller.updateStudentCourse);
router.delete('/:student_id/:course_id', authenticateToken, checkRole('admin'), controller.deleteStudentCourse);

module.exports = router;
