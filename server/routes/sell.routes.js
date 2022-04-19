const express = require('express');
const controller = require('../controller/sell.controller');

const router = express.Router();

router.get('/', controller.getSells);
router.get('/search', controller.getSell);
router.post('/', controller.addSell);
router.delete('/delete', controller.deleteSell);

module.exports = router;