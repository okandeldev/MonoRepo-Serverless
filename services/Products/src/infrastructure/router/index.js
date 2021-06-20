// const path = require("path"); 
const { container, setup } = require('../config/di-setup');
const ProductController = container.resolve('ProductController');
const ProductVariantController = container.resolve('ProductVariantController');

const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

export let routers = function (app) {
  app.get("/", jsonParser ,(req, res) => {
    ProductController.getProductsAndSuggestions(req, res)
  });

  app.get("/variant/product", jsonParser, (req, res) => {
    ProductVariantController.getVariantProduct(req, res)
  });
};
