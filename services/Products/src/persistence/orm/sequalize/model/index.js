const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize"); 
const mysql2 = require("mysql2");

const config = {
  username: process.env.DB1_USERNAME,
  password: process.env.DB1_PASSWORD,
  database: process.env.DB1_NAME,
  host: process.env.DB1_HOST,
  dialect: "mysql",
  port: process.env.DB1_PORT 
}  
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else { 
  config.dialectModule = mysql2
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config);
}
// Todo : solve __dirname with serverless
// console.log('111 =========================== cwd',__dirname);
// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//       console.log('222 ===========================',file,__dirname);
//       if (file=='Product'){
//         console.log('===========================');
//         //const model = sequelize["import"](path.join(__dirname, file));
//         const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//         console.log('===========================', model);
//         db[model.name] = model;
//       }
//     db['Product'] = 123;
//   });

  import { Product} from "./product"
  db['Product'] = Product(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
