const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../helpers/logger');

const config = require('../config/index').database.db;

logger.warn('Config Database Postgres : ', {
  host: config.host,
  user: config.username,
  database: config.database,
});

const connect = new Sequelize(config.database, config.username, config.password, { ...config });

// teste de conexao ao banco de dados 
connect.authenticate()
  .then(function () {
    logger.warn('Enviroment:', process.env.NODE_ENV, '\n',
      'Conectado com sucesso ao Postgres')
  })
  .catch(function (e) {
    logger.warn('Enviroment:', process.env.NODE_ENV, '\n',
      'Não foi possível conectar ao banco de dados Postgres : ', e.message)
  });


const db = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = connect.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
