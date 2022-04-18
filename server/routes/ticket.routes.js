const express = require('express');
const controller = require('../controller/ticket.controller');

const router = express.Router();

router.get('/', controller.getTickets);
router.get('/:id', controller.getTicket);
router.post('/', controller.addTicket);
router.put('/:id', controller.updateTicket);
router.delete('/:id', controller.deleteTicket);

module.exports = router;