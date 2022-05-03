const { DataTypes } = require("sequelize");
const db = require("../db/sqlite");

const User = db.define("User", {
  // Sequelize will look at the model name and create an inferred table name 'Users'
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true here
  },
});

(async () => {
  await db.sync({ force: true });
  // Code here
})();

exports.defaults = User;
