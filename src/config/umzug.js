const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./database');
const path = require('path');

const umzug = new Umzug({
  migrations: {
    path: path.join(__dirname, '../migrations'),
    params: [sequelize.getQueryInterface()]
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console
});

module.exports = umzug; 