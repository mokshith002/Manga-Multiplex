const express = require('express');
const controller = require('../controller/decide.controller');

const router = express.Router();

router.get('/', controller.getDecides);
router.get('/search', controller.getDecide);
router.post('/', controller.addDecide);
router.delete('/delete', controller.deleteDecide);

module.exports = router;