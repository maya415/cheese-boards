const { User, Cheese, Board } = require ('../models')
const Selections = require('../json_files/selections.json');
//7 users
//9 boards
//17 cheeses
//assigning each user board/s:

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

async function main (){
    //assigning each user board/s:

    const userCount= await User.count();

    for (let pk=1; pk<=userCount; pk++){
        let currentUser = await User.findByPk(pk)
        // console.table(currentUser.toJSON());
        const numBoards = getRandomIntInclusive(1,9);
        for (let i = 1; i<=numBoards; i++){
            currentUser.addBoard(await Board.findByPk(getRandomIntInclusive(1,9)))
        }
    }

    //assigning each board several cheeses:
    /*object containing the name of the board as the key, 
    and an array of the primary keys of the corressponding cheeses as the value*/

    const boardCount = await Board.count();
    for (let j = 1; j<=boardCount; j++){
        let chosenBoard = await Board.findByPk(j);

        for (let pkOfCheeseChosen of Selections[j]){
            // console.log(pkOfCheeseChosen)
            let chosenCheese = await Cheese.findByPk(pkOfCheeseChosen);
            // console.log(chosenCheese.toJSON())
            await chosenBoard.addCheese(chosenCheese);
        }

    }

}

main();


// async function tests(){
//     const test = await Board.findOne({where:{
//         type: 'extremely Basic'
//     }
//     });
//     console.table(test.toJSON())
//     const mediterraneanCheeses = await test.getCheeses();
// }


// tests();

