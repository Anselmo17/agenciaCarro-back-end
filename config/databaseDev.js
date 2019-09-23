
module.exports = {
  db: {
    //operatorsAliases: false,
    dialect: 'postgres',
    name: 'agencia',
    host: process.env.HOST || 'localhost',
    username: process.env.USER || 'postgres',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'agencia_carros',
    port: process.env.PORT || 5432,
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