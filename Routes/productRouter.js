const express = require("express");
const productRouter = express.Router();
const { createProduct } = require("../Controllers/productController");

productRouter.post("/addProduct", createProduct);

module.exports = productRouter;
