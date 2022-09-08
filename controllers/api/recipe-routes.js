const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Recipe, User, Comment } = require('../../models');

// get all recipes
router.get('/', (req, res) => {
  Recipe.findAll({
    attributes: [
      'id',
      'recipe_name',
      'ingredients',
      'method',
      'created_at'
    ],
    order: [['created_at', 'DESC']],
    include: 
      {
        model: User,
        attributes: ['username']
      }
  })
    .then(dbReceipeData => res.json(dbReceipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one recipe
router.get('/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'recipe_name',
      'ingredients',
      'method',
      'created_at',
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create recipe
router.post('/', (req, res) => {
  Recipe.create({
    recipe_name: req.body.recipe_name,
    ingredients: req.body.ingredients,
    method: req.body.method,
    user_id: req.session.user_id
  })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update recipe
router.put('/:id', (req, res) => {
  Recipe.update(
    {
      recipe_name: req.body.recipe_name,
      ingredients: req.body.ingredients,
      method: req.body.method
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete recipe
router.delete('/:id', (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;