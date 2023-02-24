const { getAllProducts, postProduct, removeProduct, getProduct } = require("../controller/productController");

const productRoute = require("express").Router();

//* Get Product & Post Product controller

productRoute.route("/").get(getAllProducts).post(postProduct);


//* Update & Delete Product Controller
productRoute.route("/:id").get(getProduct).delete(removeProduct)


module.exports = productRoute;