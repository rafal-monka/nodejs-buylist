module.exports = app => {
    const items = require("../controllers/item.controller.js");
  
    var router = require("express").Router();
  
    // Create a new items
    router.post("/", items.create);
  
    // Retrieve all items
    router.get("/", items.findAll);
  
    // Retrieve a single items with id
    router.get("/:id", items.findOne);
  
    // Retrieve items for list id
    router.get("/parent/:parentid", items.findItems);

    // Update an items with id
    router.put("/:id", items.update);
  
    // Delete an items with id
    router.delete("/:id", items.delete);
  
    // delete all items
    //router.delete("/", items.deleteAll);
  
    app.use('/api/items', router);
  };