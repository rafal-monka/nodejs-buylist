module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
    
    // Create a new product item
    router.post("/", products.create);

    // Retrieve all product items
    router.get("/", products.findAll);
  
    // Retrieve a single product with id
    router.get("/:id", products.findOne);

    // Update a product with id
    router.put("/:id", products.update);

    // Retrieve all product items
    router.get("/parent/:parentid", products.findAllNotOnList);

    // Delete an product item with id
    router.delete("/:id", products.delete);

    app.use('/api/products', router);
  };