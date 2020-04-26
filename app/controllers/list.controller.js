const db = require("../models");
const List = db.lists;
const Op = db.Sequelize.Op;

// Create and Save a new List
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a List
    const list = {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        active: req.body.active ? req.body.active : false
    };

    //Save List in the database
    List.create(list)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the List."
            });
        });  

};

// Retrieve all List from the database.
exports.findAll = (req, res) => {
  //res.send( {"hello":"yes"} );
  //return;

    const type = req.query.type;
    // var condition = name ? {
    //   // where: {
    //     [Op.or]: [
    //       {name: { [Op.like]: `%${name}%` } }, 
    //       {description: { [Op.like]: `%${name}%` } },
    //       {createdAt: { [Op.like]: `%${name}%` } }
    //     ] 
    //   // }
    // } : null;
    var condition = type ? { type: type } : null;
//console.log("findAll");  
    List.findAll({ where: condition })
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

// Find a single List with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    List.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving List with id=" + id
        });
      });  
};

// Update a List by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    List.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update List with id=${id}. Maybe List was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating List with id=" + id
        });
      });  
};

// Delete a List with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    List.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "List was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete List with id=${id}. Maybe List was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete List with id=" + id
        });
      });  
};

// Delete all BuyLists from the database.
exports.deleteAll = (req, res) => {
      List.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} BuyLists were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });  
};

// ### Find all active BuyLists
exports.findAllPublished = (req, res) => {
    List.findAll({ where: { active: true } })
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