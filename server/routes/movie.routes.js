const express = require('express');
const controller = require('../controller/movie.controller');

const router = express.Router();

router.get('/', controller.getMovies);
router.get('/:id', controller.getMovie);
router.post('/', controller.addMovie);
router.put('/:id', controller.updateMovie);
router.delete('/:id', controller.deleteMovie);

module.exports = router;