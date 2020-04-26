//Buy list/recipe item
module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      parentid: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },      
      category: {
        type: Sequelize.STRING
      },
      shop: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(10),
        defaultValue: "ACTIVE",
        allowNull: false
      }            
    });
  
    return Item;
  };