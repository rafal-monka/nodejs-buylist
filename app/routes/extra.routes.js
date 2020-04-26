module.exports = app => {
    const extra = require("../controllers/extra.controller.js");
  
    var router = require("express").Router();
  
    // Create a new items
    router.post("/copyrecipe", extra.copyItemsFromRecipeToBuyList);
  
    app.use('/api/extra', router);
  };