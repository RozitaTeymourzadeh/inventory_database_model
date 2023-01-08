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
    // await knex.schema.dropdown(tableNames.size);

};
