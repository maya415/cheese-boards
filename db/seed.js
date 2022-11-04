const { User, Cheese, Board } = require('../models');
const db = require('./db');
const users = require('../json_files/users.json');
const cheeses = require('../json_files/cheeses.json');
const boards = require('../json_files/boards.json');

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