const log = process.env.SQL_LOG == "true" ? console.log : false;

module.exports = {
  PUBLIC_URLS: {
    "/api/auth/login": ["POST"],
    "/api/auth/register": ["POST"],
  },
  SELLER_URLS: {
    "/create-catalog": ["POST"],
    "/orders": ["GET"],
  },
  BUYER_URLS: {
    "/list-of-sellers": ["GET"],
    "/seller-catalog/:seller_id": ["GET"],
    "/create-order/:seller_id": ["POST"],
  },
  SERVER_PORT: process.env.SERVER_PORT,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_DIALECT: process.env.DB_DIALECT,
  ENV: process.env.ENV,
  SQL_LOG: log,
};
