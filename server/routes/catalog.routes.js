const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalog.controller');


router.get('/catalogs', catalogController.getAllCatalogs)
router.post('/catalogs', catalogController.createCatalog)//agregar dsp authe
router.put('/catalogs/:id',  catalogController.updateCatalog)
router.delete('/catalogs/:id', catalogController.deleteCatalog)

module.exports = router