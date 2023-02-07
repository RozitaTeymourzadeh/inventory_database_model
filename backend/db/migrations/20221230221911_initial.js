
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const {
    addDefaultColumns,
    createNameTable,
    url,
    email,
    references,
} = require('../../src/lib/tableUtils');

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
            table.string('city', 30);
            table.string('state',30);
            table.string('country', 30);
            // to avoid identical address in the db
            table.unique([
                'street_address_1',
                'street_address_2',
                'city',
                'zipcode',
                'state',
                'country',
            ]);
            addDefaultColumns(table);
        }),

        knex.schema.createTable(tableNames.item_location,(table) => {
            table.increments().notNullable();
            table.string('name').notNullable;
            table.string('description', 1000);
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
        addDefaultColumns(table);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.address,
        tableNames.manufacturer,
        tableNames.user,
        tableNames.item_type,
        tableNames.item_location,
    ].reverse().map((tableName) => knex.schema.dropTableIfExists(tableName)));
};
