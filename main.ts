import dotenv from "dotenv";
import Knex from "knex";

dotenv.config();

const config = {
    client: "pg",
    version: "7.2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
};

const knex = Knex(config);
