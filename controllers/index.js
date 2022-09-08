const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/api/', apiRoutes);
router.use('/', homeRoutes);
router.use('/recipes', recipeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;