const router = require('express').Router();
const { Classics } = require('../../models');

//GET all classic recipes
router.get('/', (req, res) => {
    Classics.findAll({
        attributes: ['id', 'recipe_name', 'ingredients', 'method']
    })
    .then(dbClassicsData => res.json(dbClassicsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET one classic recipe...not working
router.get('/classics/:id', (req, res) => {
    Classics.findOne({
        where:  {
            id: req.params.id
        },
        attributes: ['recipe_name', 'ingredients', 'method']
    })
    .then(dbClassicsData => {
        if (!dbClassicsData) {
            res.status(404).json({ message: 'No recipe found with this ID' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;