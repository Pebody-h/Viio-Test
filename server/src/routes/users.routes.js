import { Router } from 'express'
import { createUserHandler } from '../handlers/users/createUserHandler.js';
import { loginHandler } from '../handlers/users/loginHandler.js';

const user = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     description: Ruta para el registro de un usuario.
 *     post:
 *     summary: Crear un usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Nombre.
 *                 example: test
 *               lastName:
 *                 type: string
 *                 description: Apellido.
 *                 example: test
 *               email:
 *                 type: string
 *                 description: Correo.
 *                 example: test@yopmail.com
 *               password:
 *                 type: string
 *                 description: Contraseña.
 *                 example: test
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                        type: string
 *                        description: id.
 *                        example: id
 *                       firstName:
 *                        type: string
 *                        description: Nombre.
 *                        example: test
 *                       lastName:
 *                        type: string
 *                        description: Apellido.
 *                        example: test
 *                       email:
 *                        type: string
 *                        description: Correo.
 *                        example: test@yopmail.com
 *                       password:
 *                        type: string
 *                        description: Contraseña.
 *                        example: test
 */
user.post('/register', createUserHandler)

/**
 * @swagger
 * /login:
 *   post:
 *     description: Ruta para el inicio de sesion de un usuario.
 *     post:
 *     summary: Iniciar sesion con usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo.
 *                 example: test@yopmail.com
 *               password:
 *                 type: string
 *                 description: Contraseña.
 *                 example: test
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                dataUser:
 *                 type: object
 *                 properties:
 *                       id:
 *                        type: string
 *                        description: id.
 *                        example: id
 *                       firstName:
 *                        type: string
 *                        description: Nombre.
 *                        example: test
 *                       lastName:
 *                        type: string
 *                        description: Apellido.
 *                        example: test
 *                       email:
 *                        type: string
 *                        description: Correo.
 *                        example: test@yopmail.com
 *                token:
 *                 type: string
 *                 description: token.
 *                 example: token
 */
user.post('/login', loginHandler)

export default user