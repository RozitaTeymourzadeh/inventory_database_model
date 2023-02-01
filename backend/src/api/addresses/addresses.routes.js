const express = require('express');

const Address = require('./addresses.model');

const router = express.Router();

router.get('/', async (req, res) => {
    const addresses = await Address
    .query()
    .where('deleted_at', null);
    res.json(addresses);
});

// router.post('/', async (req,res)=>{
//     try{
//         const user = await User
//         .query()
//         .insert(req.body);
//     } catch (error){

//     }

// })


module.exports = router;