module.exports = app => {
    const lists = require("../controllers/list.controller.js");
  
    var router = require("express").Router();
  
    // Create a new buylist
    router.post("/", lists.create);
  
    // Retrieve all lists
    router.get("/", lists.findAll);
  
    // ### Retrieve all published lists
    router.get("/published", lists.findAllPublished);
  
    // Retrieve a single buylist with id
    router.get("/:id", lists.findOne);
  
    // Update a buylist with id
    router.put("/:id", lists.update);
  
    // Delete a buylist with id
    router.delete("/:id", lists.delete);
  
    // delete all lists
    //router.delete("/", lists.deleteAll);
  
    app.use('/api/lists', router);
  };