const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const mysql2 = require("mysql2");
const config = {
  username: process.env.DB2_USERNAME,
  password: process.env.DB2_PASSWORD,
  database: process.env.DB2_NAME,
  host: process.env.DB2_HOST,
  dialect: "mysql",
  port: process.env.DB2_PORT 
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
// console.log('step 1 =========================== cwd',__dirname);
// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//       console.log('step 2 ===========================',file,__dirname);
//       if (file=='Product'){
//         console.log('===========================');
//         //const model = sequelize["import"](path.join(__dirname, file));
//         const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//         console.log('===========================', model);
//         db[model.name] = model;
//       }
//     db['Product'] = 123;
//   });

import { Pharmacy} from "./pharmacy"
import { PharmacyUser} from "./pharmacyuser"
import { Supplier} from "./supplier"
import { SupplierUser} from "./supplieruser"
import { Cart} from "./cart"
import { CartItem} from "./cartitem" 
import { Order} from "./order"
import { Request} from "./request"

db['Pharmacy'] = Pharmacy(sequelize, Sequelize.DataTypes);
db['PharmacyUser'] = PharmacyUser(sequelize, Sequelize.DataTypes);
db['Supplier'] = Supplier(sequelize, Sequelize.DataTypes);
db['SupplierUser'] = SupplierUser(sequelize, Sequelize.DataTypes);
db['Cart'] = Cart(sequelize, Sequelize.DataTypes);
db['CartItem'] = CartItem(sequelize, Sequelize.DataTypes);
db['Order'] = Order(sequelize, Sequelize.DataTypes);
db['Request'] = Request(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
