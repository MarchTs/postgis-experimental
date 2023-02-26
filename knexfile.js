require("dotenv").config();

module.exports = {
    client: "postgresql",
    connection: {
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    migrations: {
        directory: "./db/migrations",
        tableName: "knex_migrations",
    },
    seeds: {
        directory: "./db/seeds/dev",
    },
};
