
module.exports = {
  db: {
    //operatorsAliases: false,
    dialect: 'mysql',
    name: 'agencia',
    host: process.env.HOST || 'localhost',
    username: process.env.USER || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'agencia',
    port: process.env.PORT || 3306,
    pool: {
      min: process.env.MIN_POOL || 5,
      max: process.env.MAX_POOL || 150,
      idle: 10000
    },
    logging: false,
    timezone: 'America/Sao_Paulo'
  },
  log: 'info',
  secret: 'secret'
}