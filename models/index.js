const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../helpers/logger');
const mysql = require('mysql');

const config = require('../config/database').db;

// teste de conexao 
// connection.connect(function(err){
//   if(err) return console.log('Houve um erro : ', err);
//   console.log('Conectado ao DATABASE MYSQL');
// })


logger.debug('Connecting to database Mysql', {
  host: config.host,
  user: config.username,
  database: config.database,
});

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
