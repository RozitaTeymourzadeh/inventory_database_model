const express = require('express');


const item_type = require('./item_type/item_type.routes')


const router = express.Router();


router.use('/item_type', item_type); // register router to item_type and then we need tomount it to the app.js



module.exports = router;