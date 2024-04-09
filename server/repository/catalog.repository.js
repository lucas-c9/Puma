const Catalog = require('../models/catalog.model');

exports.getAllCatalogs = async () => {
    return await Catalog.find();
}

exports.getCatalog = async (id) => {
    return await Catalog.findById(id);
}

exports.createCatalog = async (data) => {
    const catalog = new Catalog(data);
    return await catalog.save();
}


exports.updateCatalog = async (id, data) => {
    return await Catalog.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteCatalog = async (id) => {
    return await Catalog.findByIdAndDelete(id);
}