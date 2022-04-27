const express = require('express');
const controller = require('../controller/hall.controller');

const router = express.Router();

router.get('/', controller.getHalls);
router.get('/:id', controller.getHall);
router.get('/:hallId/:showId/seats', controller.getHallSeats);
router.post('/', controller.addHall);
router.put('/:id', controller.updateHall);
router.put('/seats/book', controller.bookHallSeats);
router.delete('/:id', controller.deleteHall);

module.exports = router;