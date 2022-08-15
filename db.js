const dotenv = require("dotenv").config();

const connectionString = process.env.PGCONNECTIONSTRING;

const pg = require("knex")({
  client: "pg",
  connection: connectionString,
  searchPath: ["knex", "public"],
  pool: { min: 0, max: 7 },
});

module.exports = pg;
