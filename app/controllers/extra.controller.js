const db = require("../models");
const Op = db.Sequelize.Op;

//Copy items from recipe list
exports.copyItemsFromRecipeToBuyList = async (req, res) => {
    const sourceid = req.body.sourceid;
    const destid = req.body.destid;
console.log("copyItemsFromRecipeToBuyList - sourceid="+sourceid+", destid="+destid);
    try {
        await db.sequelize.query("INSERT INTO items (parentid, name, category, shop, price, unit, amount, value, source, createdAt) "+
                                 " SELECT :buylistid, i.name, i.category, i.shop, i.price, i.unit, i.amount, i.price*i.amount, concat(i.source, ':', l.name), NOW() "+
                                 " FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:recipeid)", 
            { replacements: { buylistid: destid, recipeid: sourceid}  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  
};

//Update prices on list from product catalog
exports.updatePrices = async (req, res) => {
    const listid = req.body.listid;
console.log("updatePrices - listid="+listid);
    try {
        await db.sequelize.query("UPDATE items i"
                                  +" SET price = (select price from products p where p.name = i.name and p.category = i.category and p.shop = i.shop),"
                                      +" updatedAt = NOW() "
                                 +"WHERE parentid = :listid", 
            { replacements: { listid: listid }  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 
    } catch (e) {
        res.send( {message: e.toString()} );
    }  
};

//Copy active items from one list to another
exports.copyActiveItemsFromBuyList = async (req, res) => {
    const sourceid = req.body.sourceid;
    const destid = req.body.destid;
console.log("copyActiveItemsFromBuyList - sourceid="+sourceid+", destid="+destid);
    let sql = "INSERT INTO items (parentid, name, category, shop, price, unit, amount, value, source, createdAt) "+
              "SELECT :destid, i.name, i.category, i.shop, i.price, i.unit, i.amount, i.price*i.amount, concat(i.source, ':', l.name), NOW() "+
              "  FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:sourceid) "+
              " WHERE i.status = 'ACTIVE'";
    try {
        await db.sequelize.query(
            sql, 
            { replacements: { destid: destid, sourceid: sourceid}  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    } 
}

//------------------------------------------------------
exports.testJob = async (req, res) => {
console.log(new Date()+"extra.controller.testJob");
    try {
        await db.sequelize.query("INSERT INTO testjobs (datum) VALUES (NOW())");   
        res.status(200).send( {message: "TEST-OK"} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};
