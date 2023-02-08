const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');
// const schema = require('./manufacturers.schema.json');

class Manufacturer extends Model {
  static get tableName() {
    return tableNames.manufacturer;
  }

  // static get jsonSchema() {
  //   return schema;
  // }
}

module.exports = Manufacturer;