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
      },     
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true 
      }
    });
  
    return List;
  };