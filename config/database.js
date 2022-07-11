const config = require("./index");

module.exports = {
  database: config.DB_NAME,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  port: config.DB_PORT,
  dialect: config.DB_DIALECT,
  pool: {
    max: 30,
    min: 0,
    acquire: 60000,
    idle: 5000,
  },
  environment: config.ENV,
  log: config.SQL_LOG,
};
