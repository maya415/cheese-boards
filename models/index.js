const User = require ('./user.model');
const Cheese = require ('./cheese.model');
const Board = require ('./board.model');

//establishing associations between classes i.e tables

//----------------one to many--------------------
//one user can have many boards, each board belongs to a single user
//source: User, target: Board

User.hasMany(Board);
Board.belongsTo(User);

//----------------one to many--------------------

//----------------many to many--------------------
//one board can have many cheeses
//one cheese can be on many boards

Board.belongsToMany(Cheese, {through: 'Board_Cheese'});
Cheese.belongsToMany(Board, {through: 'Board_Cheese'});

//----------------many to many--------------------


module.exports = { User, Cheese, Board }


