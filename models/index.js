//import models
const Classics = require('./Classics');
const Comment = require('./Comment');

//create associations
// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });

// Recipe.hasMany(Comment, {
//     foreignKey: 'recipe_id'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Comment.belongsTo(Recipe, {
//     foreignKey: 'recipe_id'
// });

module.exports = { Classics, Comment };