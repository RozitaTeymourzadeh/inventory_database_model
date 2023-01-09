
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
            table.string('state',30);
            table.string('country', 30);
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
    });

    await knex.schema.createTable(tableNames.item,(table) => {
        table.increments().notNullable();
        table.string('name').notNullable;
        table.string('description', 1000);
        table.string('quantity').notNullable();
        table.string('sku', 254);
        references(table, 'user');
        references(table, 'manufacturer');
        references(table, 'item_type');
    });

    await knex.schema.createTable(tableNames.item_info,(table) => {
        table.increments().notNullable();
        table.datetime('purchase_date');
        table.float('unit_price');
        table.boolean('accessories');
        references(table, 'item_location');
        references(table, 'item');
    });

    await knex.schema.createTable(tableNames.item_image,(table) => {
        table.increments().notNullable();
        url(table, 'image_url');
        references(table, 'item');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await Promise.all([
        tableNames.item_image,
        tableNames.item_info,
        tableNames.item,
        tableNames.manufacturer,
        tableNames.address,
        tableNames.user,
        tableNames.item_type,
        tableNames.item_location,
    ].map((tableName) => knex.schema.dropTable(tableName)));
};
