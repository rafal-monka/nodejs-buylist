//Product
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },      
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shop: {
        type: Sequelize.STRING,
        allowNull: true
      },
      unit: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      }
    });
  
    return Product;
  };