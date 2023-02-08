const express = require('express');

const project = require('../constants/project');
const item_type = require('./item_type/item_type.routes');
const users = require('./users/users.routes');
const auth = require('./auth/auth.routes');
const addresses = require('./addresses/addresses.routes');
const manufacturers = require('./manufacturers/manufacturers.routes');
const items = require('./items/items.routes');



const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: project.message, 
    });
});

router.use('/item_type', item_type); // register router to item_type and then we need tomount it to the app.js
router.use('/users', users);
router.use('/auth', auth);
router.use('/addresses', addresses);
router.use('/manufacturers', manufacturers);
router.use('/items', items);


module.exports = router;