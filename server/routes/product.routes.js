const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const swaggerJSDoc = require('swagger-jsdoc');
const authenticationToken = require('../middleware/authenticationToken')
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Devuelve una lista de productos JSON.
 *     description: Devuelve una lista de productos JSON.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: PUMA X
 *                       price:
 *                         type: integer
 *                         description: The product's price.
 *                         example: 20
 *                       description:
 *                         type: string
 *                         description: The product's description.
 *                         example: Descripcion
 *                       catalog:
 *                         type: string
 *                         description: The product's catalog.
 *                         example: Calzado
 * 
 *
*/
router.get('/products', productController.getAllProducts)

router.post('/products', authenticationToken, productController.createProduct)
router.put('/products/:id', authenticationToken, productController.updateProduct)
router.delete('/products/:id', authenticationToken, productController.deleteProduct)
module.exports = router