const crypto = require('crypto');
const bcrypt = require('bcrypt');
const Knex = require('knex'); 

const orderedTableNames = require('../../src/constants/orderedTableNames');
const tableNames = require('../../src/constants/tableNames');
const { item_type } = require('../../src/constants/tableNames');
const itemType = require('../../src/constants/itemType');

/**
 * 
 * @param {Knex} knex
 * 
 */
exports.seed = async (knex) => {
  await orderedTableNames
    .reduce(async (promise,table_name)=>{
      console.log('Clearing', table_name)
      await promise;
      return knex(table_name).del();
    }, Promise.resolve());
  
  const password = crypto.randomBytes(15).toString('hex');
  const user = {
    email: 'rose@gmail.com',
    name: 'Rose',
    password: await bcrypt.hash(password, 12),
  };

  const [createdUser] = await knex(tableNames.user)
    .insert(user)
    .returning('*');

  if(process.env.NODE_ENV !== 'test'){
    console.log('User created:', {
      password,
    }, createdUser);
  }


  await knex(tableNames.item_type)
    .insert(itemType);
};
