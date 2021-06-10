require('custom-env').env();   
module.exports = {
  development: {
    username: process.env.DB2_USERNAME,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    host: process.env.DB2_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  },
  test: {
    username: process.env.DB2_USERNAME,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    host: process.env.DB2_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  },
  production: {
    username: process.env.DB2_USERNAME,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    host: process.env.DB2_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  }
};