/**
 * @module Users
 * @type model
 * @description DB model for users
 * @author Divesh Agarwal
 */

 module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return User;
};
