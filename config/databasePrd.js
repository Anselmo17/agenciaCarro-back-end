
module.exports = {
  db: {
    dialect: 'postgres',
    name: 'agencia',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT || 5432,
    pool: {
      min: process.env.MIN_POOL || 5,
      max: process.env.MAX_POOL || 150,
      idle: 10000
    },
    dialectOptions: { 
      ssl: true
    },
    logging: false,
    timezone: 'America/Sao_Paulo'
  },
  log: 'info',
  secret: 'secret'
}