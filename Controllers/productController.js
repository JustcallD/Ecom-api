const Product = require("../Models/Product");

const createProduct = async (req, res) => {
  try {
    const product = req.body;
    if (!product || !product.category || !product.name || !product.price) {
      return res.status(422).json({ error: "Unprocessable entity" });
    }
    const saveProduct = await Product.create(product);
    res.status(200).json(saveProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createProduct };
