/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.uuid("id").primary();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.string("email").nullable();
        table.string("name").notNullable();
        table.string("first_name").nullable();
        table.string("last_name").nullable();
        table.string("phone_number").nullable();
        table.string("address").nullable();
        table.string("zip_code").nullable();
        table.string("role").notNullable();
        table.string("status").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
