// const { User, Cheese, Board } = require('../models');
// const { Op } = require('sequelize');

// describe('testing associations', () => {

//     test('assigning a new user 3 boards', async() => {
//         const newUser = await User.create({
//             name: 'peter parker',
//             email: 'spideysense@gmail.com'
//         });
//         const cheeses = await Cheese.findAll({
//             where: {
//                 id:  {
//                     [Op.or]: [2,9, 13]
//                 }
//             }
//         }
//     );

//     await newUser.addCheeses(cheeses);


//     console.log((await newUser.getCheese).map(p=>p.toJSON()));

//     expect(2).toBe(2);



        
//     });
    
// });