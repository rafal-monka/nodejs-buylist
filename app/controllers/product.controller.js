const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Catalog item
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a catalog item
    const product = {
        name: req.body.name,
        category: req.body.category.toUpperCase(),
        shop: req.body.shop.toUpperCase(),//###toInitCap
        unit: req.body.unit.toUpperCase(),
        price: req.body.price
    };

    //Save catalog item in the database
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Catalog."
            });
        });  

};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    // var data = [{id:1, name: "test"}, {id:2, name: "test2"}];
    // res.send(data);

    Product.findAll( {order: ["category"]} )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });  
};

// Retrieve all Products from the database BUT NOT on the specified list.
exports.findAllNotOnList = async (req, res) => {
    // var data = [{id:1, name: "test"}, {id:2, name: "test2"}];
    // res.send(data);
    const parentid = req.params.parentid;

    try {
        let records = await db.sequelize.query("SELECT c.* FROM products c "
                                              +" WHERE (name, category) "
                                                 +"NOT IN (SELECT name, category "
                                                        +"   FROM items b "
                                                        +"  WHERE b.parentid = :parentid)"
                                              +" ORDER BY category, name", 
        { replacements: { parentid: parentid} });   
        res.send( records[0] ); //###??? dlaczego bez [0] zwraca podwójne rekordy ???

    } catch (e) {
        res.send( {message: e.toString()} );
    }  

};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
    console.log("delete (Product)/"+req.params.id);
    const id = req.params.id;

    Product.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Product was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Product with id=" + id
        });
    });  
};

    // Product.findAll( {order: ["name"]} )
    //   .then(data => {
    //     res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving tutorials."
    //     });
    //   });  
