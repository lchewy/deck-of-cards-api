const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define("card", {
    img: Sequelize.STRING,
    val: Sequelize.STRING,
    suit: Sequelize.STRING,
    code: Sequelize.STRING
  });

  return Card;
};
