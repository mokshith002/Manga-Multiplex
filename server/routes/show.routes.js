const express = require('express');
const controller = require('../controller/show.controller');

const router = express.Router();

router.get('/', controller.getShows);
router.get('/:id', controller.getShow);
//router.get('/:id/theater-hall', controller.getTheaterHall);
router.post('/', controller.addShow);
router.put('/:id', controller.updateShow);
router.delete('/:id', controller.deleteShow);

module.exports = router;