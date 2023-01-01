
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames')

function addDefaultColumns(table){
    // table.datetime('created_at').notNullable().default(Knex.fn.now());
    // table.datetime('updated_at').notNullable().default(Knex.fn.now());
    table.timestamps(false, true);
    table.datetime('deleted_at');
}

function createNameTable(knex, table_name){
    return knex.schema.createTable(table_name, (table)=>{
        table.increments().notNullable();
        table.string('name').notNullable().unique();
        addDefaultColumns(table);
    });
}

/**
 * Tables
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await Promise.all([
        knex.schema.createTable(tableNames.user, (table)=>{
            table.increments().notNullable();
            table.string('email', 254).notNullable().unique();
            table.string('name').notNullable();
            table.string('password', 127).notNullable();
            table.datetime('last_login');
            addDefaultColumns(table);
        }),
        createNameTable(knex, tableNames.item_type),

        knex.schema.createTable(tableNames.address, (table)=>{
            table.increments().notNullable();
            table.string('street_address_1', 254);
            table.string('street_address_2', 254);
            table.string('zipcode', 254);
            table.string('state',254);
            table.string('country', 254);
            addDefaultColumns(table);
        }),
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.user,
        tableNames.item_type,
        tableNames.address,
    ].map((tableName) => knex.schema.dropTable(tableName)));
};
