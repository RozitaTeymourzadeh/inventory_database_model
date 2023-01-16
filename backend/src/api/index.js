const express = require('express');

const project = require('../constants/project')

const item_type = require('./item_type/item_type.routes')


const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: project.message, 
    });
});

router.use('/item_type', item_type); // register router to item_type and then we need tomount it to the app.js



module.exports = router;