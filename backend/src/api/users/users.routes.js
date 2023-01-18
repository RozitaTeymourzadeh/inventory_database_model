const express = require('express');

const User = require('./users.model');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User
    .query()
    .select('id', 'name','email', 'created_at', 'updated_at')
    .where('deleted_at', null);
    res.json(users);
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