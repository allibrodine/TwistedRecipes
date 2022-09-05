const router = require('express').Router();
const userRoutes = require('./user-routes');
const commmentRoutes = require('./comment-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comments', commmentRoutes);

module.exports = router;