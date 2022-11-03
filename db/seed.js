const { User, Cheese, Board } = require('../models');
const db = require('./db');
const users = require('./users.json');
const cheeses = require('./cheeses.json');
const boards = require('./boards.json');

async function seed (){
    await db.sync({
        force: true
    });

    //seeding the user table:

    await User.bulkCreate(users, {validate: true});

    //seeding the cheese table:

    await Cheese.bulkCreate(cheeses, {validate: true});

    //seeding the board table:

    await Board.bulkCreate(boards, {validate: true});


}

seed();