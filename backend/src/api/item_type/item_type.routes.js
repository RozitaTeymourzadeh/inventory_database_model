const express = require('express');

const queries = require('./item_type.queries');

const router = express.Router();

router.get('/', async (req, res) => {
    const item_type = await queries.find();
    res.json(item_type);
});

module.exports = router;