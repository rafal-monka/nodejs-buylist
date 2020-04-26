module.exports = {
    HOST: "localhost",
    options: {
        port: 3308
    },
    USER: "buylist",
    PASSWORD: "rafal",
    DB: "buylist",
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