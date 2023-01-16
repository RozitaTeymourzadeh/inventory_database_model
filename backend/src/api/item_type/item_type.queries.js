const db = require('../../db');

const tableNames = require('../../constants/tableNames');
const fields = ['id', 'name'];

module.exports = {
    find(){
        return db(tableNames.item_type).select(fields);
    },

    async get(id) {
        const [item_type] = await db(tableNames.item_type)
            .select(fields)
            //.where('id', '=', id);
            .where({
                id: id, 
            });
        return item_type;

        // return db(tableNames.table_item)
        //     .select(fields)
        //     .where({
        //         id,
        //     }).first();
    },
};