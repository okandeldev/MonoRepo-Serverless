require('custom-env').env();   
module.exports = {
  development: {
    username: process.env.DB1_USERNAME,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME,
    host: process.env.DB1_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  },
  test: {
    username: process.env.DB1_USERNAME,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME,
    host: process.env.DB1_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  },
  production: {
    username: process.env.DB1_USERNAME,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME,
    host: process.env.DB1_HOST,
    dialect: "mysql",
    port: process.env.DB2_PORT
  }
};