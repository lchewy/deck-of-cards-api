const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define("deck", {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true
    }
  });

  return Deck;
};
