const db = require("../models");
const Op = db.Sequelize.Op;

// Retrieve all Products from the database BUT NOT on the specified list.
exports.copyItemsFromRecipeToBuyList = async (req, res) => {

    const sourceid = req.body.sourceid;
    const destid = req.body.destid;
console.log("copyItemsFromRecipeToBuyList - sourceid="+sourceid+", destid="+destid);

    try {
        await db.sequelize.query("INSERT INTO items (parentid, name, category, shop, price, unit, amount, value, source, createdAt) "+
                                 " SELECT :buylistid, i.name, i.category, i.shop, i.price, i.unit, i.amount, i.price*i.amount, concat(l.name, ':', i.source), NOW() "+
                                 " FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:recipeid)", 
            { replacements: { buylistid: destid, recipeid: sourceid}  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};

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

exports.testJob = async (req, res) => {
console.log(new Date()+"extra.controller.testJob");
    try {
        await db.sequelize.query("INSERT INTO testjobs (datum) VALUES (NOW())");   
        res.status(200).send( {message: "TEST-OK"} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};
