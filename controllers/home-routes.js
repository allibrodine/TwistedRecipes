const { Recipe, User, Comment } = require('../models');
const router = require('express').Router();
const sequelize = require('../config/connection');

//render homepage
router.get('/', (req, res) => {
    res.render('homepage');
});

//route to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/', (req, res) => {
    res.render('recipes', { loggedIn: true });
});

//route to signup page
router.get('/signup', (req, res) => { 
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } 
    res.render('signup');
});

//route to meatloaf page
router.get('/meatloaf', (req, res) => {
    res.render('meatloaf');
});

//route to fried rice page
router.get('/fried-rice', (req, res) => {
    res.render('fried-rice');
});

//route to chicken soup page
router.get('/chicken-soup', (req, res) => {
    res.render('chicken-soup');
});

//route to mac & cheese page
router.get('/mac-cheese', (req, res) => {
    res.render('mac-cheese');
});

//route to chocolate cake
router.get('/chocolate-cake', (req, res) => {
    res.render('chocolate-cake');
});

module.exports = router;