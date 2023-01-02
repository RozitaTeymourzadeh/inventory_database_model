
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

function references(table, tableName){
    table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');
}

function url(table, columnName){
    table.string(columnName, 2000);
}

function email(table, columnName){
    return table.string(columnName, 254);
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
            email(table, 'email').notNullable().unique(); 
            table.string('name').notNullable();
            table.string('password', 127).notNullable();
            table.datetime('last_login');
            addDefaultColumns(table);
        }),
        knex.schema.createTable(tableNames.address, (table)=>{
            table.increments().notNullable();
            table.string('street_address_1', 50);
            table.string('street_address_2', 50);
            table.string('zipcode', 15);
            table.string('state',30);
            table.string('country', 30);
            addDefaultColumns(table);
        }),
        createNameTable(knex, tableNames.item_type),
    ]);

    await knex.schema.createTable(tableNames.manufacturer,(table) => {
        table.increments().notNullable();
        table.string('name').notNullable;
        table.string('description', 1000);
        url(table, 'website_url');
        references(table, 'address');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.manufacturer,
        tableNames.address,
        tableNames.user,
        tableNames.item_type,
    ].map((tableName) => knex.schema.dropTable(tableName)));
};
