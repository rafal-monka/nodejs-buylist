//Recipe
module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Recipe;
  };