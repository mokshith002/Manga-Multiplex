const express = require('express');
const controller = require('../controller/theater.controller');

const router = express.Router();

router.get('/', controller.getTheaters);
router.get('/:id', controller.getTheater);
router.post('/', controller.addTheater);
router.put('/:id', controller.updateTheater);
router.delete('/:id', controller.deleteTheater);

module.exports = router;