const express = require('express');
const router = express.Router();


const pelanggan_controller = require('../controllers/pelanggan.controller');

router.get('', pelanggan_controller.getAll);
router.post('/post', pelanggan_controller.create);

module.exports = router;
