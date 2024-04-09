const CatalogRepository = require('../repository/catalog.repository');

exports.getAllCatalogs = async (req, res) => {
    try {
        const Catalogs = await CatalogRepository.getAllCatalogs();
        res.status(200).json(Catalogs);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en get All Catalogs:' + error })
    }
}

exports.createCatalog = async (req, res) => {
    try {
        const Catalog = await CatalogRepository.createCatalog(req.body);
        res.status(201).json(Catalog);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en Create Catalog:' + error })
    }
}


exports.updateCatalog = async (req, res) => {
    try {
        const CatalogId = req.params.id;
        const Catalog = await CatalogRepository.updateCatalog(CatalogId, req.body);
        res.status(200).json(Catalog);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en Up Date catalog:' + error })
    }
}

exports.deleteCatalog = async (req, res) => {
    try {
        const CatalogId = req.params.id;
        const Catalog = await CatalogRepository.deleteCatalog(CatalogId);
        res.status(204).json({ message: 'Catalogo eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en Delete catalog:' + error })
    }
}