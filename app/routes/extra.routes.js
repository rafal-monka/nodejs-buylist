module.exports = app => {
    const extra = require("../controllers/extra.controller.js");
  
    var router = require("express").Router();
  
    // Create buylist items from recipe items
    router.post("/copyrecipe", extra.copyItemsFromRecipeToBuyList);

    // Copy active items from another list
    router.get("/copyitems/:sourceid/:destid/:status", extra.copyItemsBetweenLists);    
  
    // Update recipe items prices from product items
    router.post("/updateprices", extra.updatePrices);

    // Promotions papers
    router.get("/promotion/:name", extra.getPromotion);

    //testing Openshift jobs
    router.get("/job", extra.testJob);

    app.use('/api/extra', router);
  };