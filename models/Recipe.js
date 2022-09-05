const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Recipe model
class Recipe extends Model {
  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id,
  //     recipe_id: body.recipe_id
  //   }).then(() => {
  //     return Recipe.findOne({
  //       where: {
  //         id: body.recipe_id
  //       },
  //       attributes: [
  //         'id',
  //         'recipe_name',
  //         'ingredients',
  //         'method',
  //         'created_at',
  //         // [
  //         //   sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
  //         //   'vote_count'
  //         // ]
  //       ],
  //       include: [
  //         {
  //           model: Comment,
  //           attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
  //           include: {
  //             model: User,
  //             attributes: ['username']
  //           }
  //         }
  //       ]
  //     });
  //   });
  // }
}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        ingredients: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        method: {
          type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'recipe'
        }
);
      
module.exports = Recipe;