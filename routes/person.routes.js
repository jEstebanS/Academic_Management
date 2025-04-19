const express = require('express');
const router = express.Router();
const controller = require('../controllers/person.controller');

/**
 * @swagger
 * tags:
 *   name: Persons
 *   description: Endpoints para gestionar personas
 */

/**
 * @swagger
 * /api/persons:
 *   get:
 *     summary: Obtener todas las personas
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: Lista de personas
 */
router.get('/', controller.getAllPersons);

/**
 * @swagger
 * /api/persons/{id}:
 *   get:
 *     summary: Obtener una persona por ID
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona encontrada
 */
router.get('/:id', controller.getPersonById);

/**
 * @swagger
 * /api/persons:
 *   post:
 *     summary: Crear una nueva persona
 *     tags: [Persons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - document
 *               - name
 *               - age
 *             properties:
 *               document:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Persona creada
 */
router.post('/', controller.createPerson);

/**
 * @swagger
 * /api/persons/{id}:
 *   put:
 *     summary: Actualizar una persona
 *     tags: [Persons]
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
 *             required:
 *               - document
 *               - name
 *               - age
 *             properties:
 *               document:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Persona actualizada
 */
router.put('/:id', controller.updatePerson);

/**
 * @swagger
 * /api/persons/{id}:
 *   delete:
 *     summary: Eliminar una persona
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona eliminada
 */
router.delete('/:id', controller.deletePerson);

module.exports = router;

