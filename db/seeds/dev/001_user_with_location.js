const { randomUUID } = require("crypto");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users").del();
    await knex("users").insert([
        {
            id: randomUUID(),
            username: "admin",
            password: "admin",
            email: "admin@localhost",
            name: "Admin",
            first_name: "",
            last_name: "",
            phone_number: "1234567890",
            address: "123 Main St",
            zip_code: "12345",
            role: "admin",
            status: "active",
        },
        {
            id: randomUUID(),
            username: "user1",
            password: "user1",
            email: "user1@localhost",
            name: "ร้านผัดไทย อาหารตามสั่ง ป้านอม",
            first_name: "",
            last_name: "",
            phone_number: "1234567890",
            address: "123 Main St",
            zip_code: "12345",
            role: "admin",
            status: "active",
        },
        {
            id: randomUUID(),
            username: "user1",
            password: "user1",
            email: "user1@localhost",
            name: "เจ้สมนึกอร่อยเยาวราชสาย1",
            first_name: "",
            last_name: "",
            phone_number: "1234567890",
            address: "123 Main St",
            zip_code: "12345",
            role: "admin",
            status: "active",
        },
    ]);
};
