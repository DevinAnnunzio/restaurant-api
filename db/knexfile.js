const dotenv = require('dotenv').config();
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "paidy",
      user: process.env.DB_USER,
    },
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //     directory: "./migrations",
  //   },
  // },
};