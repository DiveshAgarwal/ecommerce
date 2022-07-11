const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dbConfig = require("../../config/database");
const { modelRelations } = require("./modelRelations");

const basename = path.basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.log,
    operatorsAliases: 0,
    port: dbConfig.port,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    if (file !== "modelRelations.js")
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
  })
  .forEach((file) => {
    // const model = sequelize['import'](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

modelRelations(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync();

module.exports = db;
