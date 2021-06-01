require('custom-env').env();
const fs = require("fs");

// Configruation for Order System DB (DB #2)
module.exports = {
    username: process.env.DB2_USERNAME,
    password: process.env.DB2_PASSWORD,
    database: process.env.DB2_NAME,
    host: process.env.DB2_HOST,
    dialect: "mysql",
    port: "3306", 
};
