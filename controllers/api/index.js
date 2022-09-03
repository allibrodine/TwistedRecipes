const router = require('express').Router();
const classicRoutes = require('./classics-routes');
const commmentRoutes = require('./comment-routes');

router.use('/classics', classicRoutes);
router.use('/comments', commmentRoutes);

module.exports = router;