const Sequelize = require("sequelize");
const keys = require("../config/keys");

const sequelize = new Sequelize(
  keys.sequelizeURI,
  keys.sequelizeUserName,
  keys.sequelizePassword,
  {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,
    logging: false
  }
);

const models = {
  card: sequelize.import("./Card"),
};

Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
