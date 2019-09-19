
module.exports = {
  db: {
    //operatorsAliases: false,
    dialect: 'mysql',
    name: 'agencia',
    host: process.env.POSTGRES_LGP_HOST || 'localhost',
    username: process.env.POSTGRES_LGP_USER || 'root',
    password: process.env.POSTGRES_LGP_PASSWORD || 'root',
    database: process.env.POSTGRES_LGP_DATABASE || 'agencia',
    port: process.env.POSTGRES_LGP_PORT || 3306,
    pool: {
      min: process.env.POSTGRES_LGP_MIN_POOL || 5,
      max: process.env.POSTGRES_LGP_MAX_POOL || 150,
      idle: 10000
    },
    logging: false,
    timezone: 'America/Sao_Paulo'
  },
  log: 'info',
  secret: 'secret'
}