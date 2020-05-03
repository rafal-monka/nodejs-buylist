//list
module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return List;
  };