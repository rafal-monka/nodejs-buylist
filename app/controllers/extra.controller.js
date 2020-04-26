const db = require("../models");
const Op = db.Sequelize.Op;

// Retrieve all Products from the database BUT NOT on the specified list.
exports.copyItemsFromRecipeToBuyList = async (req, res) => {

    const sourceid = req.body.sourceid;
    const destid = req.body.destid;
console.log("copyItemsFromRecipeToBuyList - sourceid="+sourceid+", destid="+destid);

    try {
        await db.sequelize.query("INSERT INTO items (parentid, name, category, shop, source, createdAt) "+
                                 " SELECT :buylistid, i.name, i.category, i.shop, concat(l.name, ':', i.source), NOW() "+
                                 " FROM items i INNER JOIN lists l ON (l.id = i.parentid AND l.id=:recipeid)", 
            { replacements: { buylistid: destid, recipeid: sourceid}  }
        );   
        res.status(200).send( {message: JSON.stringify(req.body)} ) ; 

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};