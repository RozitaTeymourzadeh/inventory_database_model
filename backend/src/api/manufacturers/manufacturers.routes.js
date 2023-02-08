const express = require('express');
const { manufacturer } = require('../../constants/tableNames');

const Manufacturer = require('./manufacturers.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const manufacturers = await Manufacturer
        .query()
        .where('deleted_at', null);
        res.json(manufacturers);
    } catch (error) {
        next(error);
    }
});

// router.post('/', async (req, res, next) => {
//     try {
//       ['name', 'description', 'website_url', 'address_id'].forEach(
//         (prop) => {
//           if (req.body[prop]) {
//             req.body[prop] = req.body[prop].toString().toLowerCase().trim();
//           }
//         }
//       );
//       const manufacture = await Manufacturer
//         .query()
//         .insert(req.body);
//       res.json(manufacturer);
//     } catch (error) {
//       next(error);
//     }
//   });


module.exports = router;