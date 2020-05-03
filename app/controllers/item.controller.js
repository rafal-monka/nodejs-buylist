const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

// Create and Save a new Item
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Item
    const item = {
        parentid: req.body.parentid, 
        name: req.body.name,
        category: req.body.category,
        shop: req.body.shop,
        source: req.body.source ? req.body.source : "manual",
        unit: req.body.unit.toUpperCase(),
        price: req.body.price ? req.body.price : 0.0,
        amount: req.body.amount ? req.body.amount : 0.0,
        value: (+req.body.price * +req.body.amount)
    };

    //Save Item in the database
    Item.create(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Item."
            });
        });  
};

// Retrieve all Item from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
//console.log("findAll");  
    Item.findAll({ where: condition })
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

// Find a single Item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Item with id=" + id
        });
      });  
};

//Find items for given list 
exports.findItems = async (req, res) => {
  const parentid = req.params.parentid;
  //res.send( {"hello": "yes"} );

    try {
        let items = await db.sequelize.query("SELECT * FROM items WHERE parentid = :parentid ORDER BY status, shop, category, name, source", { 
          replacements: { parentid: parentid }, 
          type: db.sequelize.QueryTypes.SELECT
        });   
        res.status(200).send( items );

    } catch (e) {
        res.send( {message: e.toString()} );
    }  
}


// Update a Item by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Item with id=" + id
        });
      });  
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
    //console.log("delete (Item)/"+req.params.id);
    const id = req.params.id;

    Item.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Item was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Item with id=" + id
        });
      });  
};

// Delete all Items from the particular List.
exports.deleteAllItemsFromList = (req, res) => {
  Item.destroy({
    where: {parentid: req.params.parentid},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Items were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });  
};


// // Delete all Items from the database.
// exports.deleteAll = (req, res) => {
//       console.log("delete All (Item)");
//       Item.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Items were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all tutorials."
//           });
//         });  
// };


// // Find all published BuyListItems
// exports.findAllPublished = (req, res) => {
//     Item.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     }); 
// };