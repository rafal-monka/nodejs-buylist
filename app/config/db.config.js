require('dotenv').config();

module.exports = {
    HOST: process.env.HOST,
    options: {
        port: process.env.DB_PORT
    },
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,    
    dialect: "mysql",
    dialectOptions: { 
      charset: "utf8", 
      collate: "utf8_polish_ci" 
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };