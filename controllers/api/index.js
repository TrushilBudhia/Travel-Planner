
const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travellersRoutes = require('./travellers-routes');
const tripsRoutes = require('./trips-routes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellersRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
