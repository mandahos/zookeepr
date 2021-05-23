//midle ware so that the app knows about the routes in animalRoutes.js

const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);

module.exports = router;