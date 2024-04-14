const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    available: { type: Boolean, required: true }
});

productSchema.index({ name: 'text' });

const Product = mongoose.model("product", productSchema);

module.exports = Product;