const config = require("config");
const DB_PASSWORD = config.get("dbpassword");

const db_knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "vahe",
    password: DB_PASSWORD,
    database: "annaniks",
  },
});

module.exports = require("bookshelf")(db_knex);
