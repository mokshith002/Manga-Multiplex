const express = require('express');
const controller = require('../controller/employee.controller');

const router = express.Router();

router.get('/', controller.getEmployees);
router.get('/:id', controller.getEmployee);
router.post('/', controller.addEmployee);
router.put('/:id', controller.updateEmployee);
router.delete('/:id', controller.deleteEmployee);
router.post('/authenticate/details', controller.authenticateEmployee);

module.exports = router;