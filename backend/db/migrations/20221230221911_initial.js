
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table)=>{
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('name').notNullable();
    table.string('password', 127).notNullable();
    table.datetime('last_login');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTable(tableNames.user);
  
};
