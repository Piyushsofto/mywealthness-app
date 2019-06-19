'use strict';

const Sequelize = require('sequelize');
let config = require(__dirname + '/../config/db-config');

let db = {};
let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models
db.User = require('../models/user')(sequelize, Sequelize);


// //Mapping
// db.User.hasOne(db.UserSentimentIndex, { foreignKey: 'userId', sourceKey: 'id' });
// db.User.hasOne(db.Account, { foreignKey: 'userId', sourceKey: 'id' });
// db.User.hasOne(db.AlpacaAPI, { foreignKey: 'userId', sourceKey: 'id' });
// db.Organization.hasOne(db.YouTrackAuth, { foreignKey: 'orgId', sourceKey: 'organizationId' });
// db.Organization.hasMany(db.User, { foreignKey: 'organizationId', sourceKey: 'organizationId' });
// db.UserRole.hasMany(db.User, { foreignKey: 'roleId', sourceKey: 'id' });
// db.User.belongsToMany(db.YouTrackClientProjects, { through: 'UserProject' });
// db.YouTrackClientProjects.belongsToMany(db.User, { through: 'UserProject' });
// db.User.hasMany(db.Portfolio,{foreignKey:'userId',sourceKey:'id' });
// db.Portfolio.hasMany(db.Position,{foreignKey:'portfolioId',sourceKey:'portfolioId' });
// db.Position.hasMany(db.Order,{foreignKey:'positionId',sourceKey:'positionId' });
// db.User.hasMany(db.Position,{foreignKey:'userId',sourceKey:'id' });
// db.User.hasMany(db.Order,{foreignKey:'userId',sourceKey:'id' });




module.exports = db;