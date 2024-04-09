const mongoose = require("mongoose");

const CatalogSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
});

module.exports = mongoose.model('Catalog', CatalogSchema);