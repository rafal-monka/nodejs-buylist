//testjob
module.exports = (sequelize, Sequelize) => {
    const Testjob = sequelize.define("testjob", {
      datum: {
        type: Sequelize.DATE,
        allowNull: false
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
  
    return Testjob;
  };