const productRepository = require('../repository/product.repository');

exports.getAllProducts = async (req, res) => {
    try {
        const name = req.query.name;
        const products = await productRepository.getAllProducts(name);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}

exports.createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const product = await productRepository.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error imprevisto en POST: ' + error })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        console.log(req.body);
        console.log('Id: ' + req.params.id);
            const productId = req.params.id;
            const product = await productRepository.updateProduct(productId, req.body);
            res.status(200).json(product);
    } catch (error) {
            res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
            const productId = req.params.id;
            const product = await productRepository.deleteProduct(productId);
            res.status(204).json({ message: 'Producto eliminado' });
    } catch (error) {
            res.status(500).json({ error: 'Error imprevisto:' + error })
    }
}