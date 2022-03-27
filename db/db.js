require("dotenv").config();
const knex = require('knex')
const knexfile = require('./knexfile')
const config = process.env.DB_ENVIRONMENT || "development";

const db = require("./knexfile.js")[config];

module.exports = db

