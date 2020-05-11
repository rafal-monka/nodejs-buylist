module.exports = app => {
    const extra = require("../controllers/extra.controller.js");
  
    var router = require("express").Router();
  
    // Create buylist items from recipe items
    router.post("/copyrecipe", extra.copyItemsFromRecipeToBuyList);

    // Copy active items from another list
    router.post("/copyactiveitems", extra.copyActiveItemsFromBuyList);    
  
    // Update recipe items prices from product items
    router.post("/updateprices", extra.updatePrices);

    //testing Openshift jobs
    router.get("/job", extra.testJob);

    app.use('/api/extra', router);
  };