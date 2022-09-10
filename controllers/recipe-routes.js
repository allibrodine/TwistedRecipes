const router = require('express').Router();
const { response } = require('express');
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//     res.render('recipes', { loggedIn: true });
// });

router.get('/', (req, res) => {
  Recipe.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'recipe_name',
      'ingredients',
      'method',
      'created_at',
    ],
    include: {
      model: User,
      attributes: ['username']
    },
    order: [['created_at', 'DESC']]
  })
  .then(dbRecipeData => {
    console.log(dbRecipeData);
    const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
    res.render('recipes', { recipes, loggedIn: true });
  })  
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

