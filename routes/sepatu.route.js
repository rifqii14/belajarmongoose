const express = require('express');
const router = express.Router();


const sepatu_controller = require('../controllers/sepatu.controller');

router.get('',sepatu_controller.getAll);
router.post('/post', sepatu_controller.create);
router.get('/:id', sepatu_controller.getID);
router.put('/update/:id',sepatu_controller.put)
router.delete('/delete/:id',sepatu_controller.delete)




module.exports = router;
