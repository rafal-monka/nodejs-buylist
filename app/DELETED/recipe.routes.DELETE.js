module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");
  
    var router = require("express").Router();
  
    // Create a new recipe
    router.post("/", recipes.create);
  
    // Retrieve all recipes
    router.get("/", recipes.findAll);
  
    // Retrieve all active recipes
    router.get("/active", recipes.findAllActive);
  
    // Retrieve a single recipe with id
    router.get("/:id", recipes.findOne);
  
    // Update a recipe with id
    router.put("/:id", recipes.update);
  
    // Delete a recipe with id
    router.delete("/:id", recipes.delete);
  
    // delete all recipes
    router.delete("/", recipes.deleteAll);
  
    app.use('/api/recipes', router);
  };