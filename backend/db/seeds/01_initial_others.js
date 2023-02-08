const Knex = require('knex'); 
const { knex } = require('../../src/api/addresses/addresses.model');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex
 */

exports.seed  = async (knex) => {
    // for foreign key we should get the id dynamically:
    // const [tera_hertz1, tera_hertz2] = await Promise.all([
    //     knex(tableNames.itemType).where({
    //         name: 'THZ_project'
    //      }).first(),
    //      knex(tableNames.itemType).where({
    //         name: 'THZ_project'
    //      }).first()
    // ]);
           
    const [address] = await knex(tableNames.address).insert({
        id: 1,
		street_address_1: 'Giborei Israel 5',
		street_address_2: '',
		zipcode: '4250405',
		city: 'Netanya',
		state: '',
		country: 'Israel',
        // for foreign key
        // item_type_id: tera_hertz.id,
    }).returning('id');


    
    await knex(tableNames.manufacturer).insert({
        //for logo https://imgur.com/ can be used. 
        name:'Coretigo',
        description:'CoreTigo provides high-performance IO-Link Wireless communication solutions.',
        website_url:'https://www.coretigo.com/',
        address_id: address.id,
    });

    await knex(tableNames.item_type).insert({
        name:'Accessories',
    });
};
