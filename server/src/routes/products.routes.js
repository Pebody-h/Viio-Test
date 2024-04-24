import { Router } from 'express'
import { checkToken } from '../middlewares/token.js';
import { getProductsHandler } from '../handlers/products/getProductsHandler.js';

const products = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener productos.
 *     description: Ruta para pedir productos solo sirve si se esta logeado enviadno el token en los headers.
 *     responses:
 *       200:
 *         description: lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                       id:
 *                        type: string
 *                        description: id.
 *                        example: id
 *                       title:
 *                        type: string
 *                        description: Nombre.
 *                        example: test
 *                       quantity:
 *                        type: number
 *                        description: Cantidad.
 *                        example: 10
 *                       total:
 *                        type: number
 *                        description: Total.
 *                        example: 22
 *                       discountPercentage:
 *                        type: number
 *                        description: Total.
 *                        example: 2
 *                       discountedPrice:
 *                        type: number
 *                        description: Total.
 *                        example: 55
 *                       thumbnail:
 *                        type: string
 *                        description: Total.
 *                        example: https://cdn.dummyjson.com/product-images/59/thumbnail.jpg
 */
products.get('/products', checkToken, getProductsHandler)

export default products