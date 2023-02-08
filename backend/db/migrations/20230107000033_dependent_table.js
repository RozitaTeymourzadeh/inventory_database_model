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
 * @param {Knex} knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    // to remove the row in any table:
    //await knex.schema.table(tableNames.address, (table) => {
    //  table.dropColumn('country_id');
    //});

    // add a ref cell
    // await knex.schema.table(tableNames.state, (table) => {
    //     references(table, tableNames.country);
    // });
    await knex.schema.createTable(tableNames.item,(table) => {
        table.increments().notNullable();
        table.string('name', 254).notNullable;
        table.text('description');
        table.string('quantity').notNullable();
        table.string('sku', 42);
        references(table, 'user');
        references(table, 'manufacturer');
        references(table, 'item_type');
        addDefaultColumns(table);
    });

    await knex.schema.createTable(tableNames.item_info,(table) => {
        table.increments().notNullable();
        table.datetime('purchase_date').notNullable;
        table.float('unit_price').notNullable().defaultTo(0);
        table.boolean('accessories');
        table.string('purchaser')
        references(table, 'item_location');
        references(table, 'item');
        addDefaultColumns(table);
    });
   
    await knex.schema.createTable(tableNames.item_image,(table) => {
        table.increments().notNullable();
        url(table, 'image_url');
        references(table, 'item');
        addDefaultColumns(table);
    });
};

/**
 * @param {Knex} knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    // to reverse up side:
    //await knex.schema.table(tableNames.address, (table) => {
    //  references(table, tableNames.country)
    //});

    // drop a ref cell
    // await knex.schema.table(tableNames.state, (table) => {
    //     table.dropColumn('country_id');
    // });
    
    // to remove created table:
    // // await knex.schema.dropdown(tableNames.size);
    await Promise.all([
        tableNames.item_image,
        tableNames.item_info,
        tableNames.item,
    ].map((name) => knex.schema.dropTableIfExists(name)));

};
