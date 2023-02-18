const dbConfig = require("../config/databaseConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false, // override errors
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });

  sequelize.authenticate()
  .then(() => {
    console.log("Authenticated and connected");
  })
  .catch((error) => {
    console.log("Error" + error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./usersModel.js")(sequelize, DataTypes);
db.equipment = require("./equipmentModel")(sequelize, DataTypes);
db.gymusage = require("./gymUsageModel")(sequelize, DataTypes);
db.equipmenttag = require("./equipmentTagModel")(sequelize, DataTypes);
db.equipmentusage = require("./equipmentUsage")(sequelize, DataTypes);

// table will not be created again -> to keep info
db.sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("Re-sync complete");
  });

// export
module.exports = db;