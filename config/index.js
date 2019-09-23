
const envroment = process.env.NODE_ENV;  // npm run start:local

let database;

// config envroment
if (envroment === 'production') {
  database = require('./databasePrd');
} else {
  database = require('./databaseDev');
}


// filter file database
module.exports = {
  database
}
