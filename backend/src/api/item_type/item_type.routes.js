const express = require('express');

const queries = require('./item_type.queries');

const router = express.Router();

router.get('/', async (req, res) => {
    const item_type = await queries.find();
    res.json(item_type);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    // try {
    //     if (isNaN(id)){
    //         const error = new Error('invalid ID');
    //         res.status(422);
    //         throw error;
    //     } else {
    //         const item_type = await queries.get(id);
    //         if (item_type){
    //             return res.json(item_type);
    //         }
    //         return next();
    //     }
    // } catch (error) {
    //     next(error);
    // }

    try {
        //TODO: validate ID
        const item_type = await queries.get(parseInt(id, 10)); // base 10
        if (item_type){
            return res.json(item_type);
        }
        return next();
    } catch (error) {
        return next(error);
    }
});

module.exports = router;