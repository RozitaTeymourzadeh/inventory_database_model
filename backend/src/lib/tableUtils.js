
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

function references(table, tableName, notNullable = true, columnName = ''){
    const defination = table
        .integer(`${columnName || tableName}_id`)
        .unsigned()
        .references('id')
        .inTable(tableName)
        .onDelete('cascade');
    // allow table notNullable, if false can be null    
    if (notNullable){
        defination.notNullable();
    }
    return defination;
}

function url(table, columnName){
    table.string(columnName, 2000);
}

function email(table, columnName){
    return table.string(columnName, 254);
}

module.exports = {
    addDefaultColumns,
    createNameTable,
    url,
    email,
    references,
};