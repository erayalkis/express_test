const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./db",
});

export default db;
