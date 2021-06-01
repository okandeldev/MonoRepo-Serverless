require('custom-env').env();
const fs = require("fs");
 
// Configruation for Product DB (DB #1)
module.exports = {
    username: process.env.DB1_USERNAME,
    password: process.env.DB1_PASSWORD,
    database: process.env.DB1_NAME,
    host: process.env.DB1_HOST,
    dialect: "mysql",
    port: "3306", 
};
