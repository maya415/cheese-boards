const { User, Cheese, Board } = require('./models');
const db = require('./db/db')
//----------------------CRUD TESTS FOR USER-----------------------

describe('User Model Crud', () => {

//----------create-----------

    test('can create a new user', async () => {
        
        await User.create({
            name: 'peter parker',
            email: 'spideysense@gmail.com'
        });
        
        expect(await User.count({
            where:{
                name: 'peter parker'
            }
        })).toBe(1);
    });

//----------read-----------

test('can read from User Model', async() => {
    const toRead = (await User.findAll({
        where: {
            id: 1
        }, 
        attributes:  ['name', 'email']
        }
    )).map(p=>p.toJSON());
    
    expect(toRead).toEqual([ { name: 'June Summer', email: 'june@gmail.com' } ]);


    
});
//----------update-----------

    test('can update a user instance', async () => {
        
        let createdUser = await User.findOne({where:{
            name: 'peter parker'
        }})

        let createdUserPk = await createdUser.pk;

        await createdUser.update({
            name: 'spiderman'
        })   

        // let updatedUser = await User.findByPk(createdUserPk);
        expect(await User.count({
            where:{
                name: 'spiderman'
            }
        })).toBe(1);

        expect(await User.count({
            where:{
                name: 'peter parker'
            }
        })).toBe(0);
    });

//----------delete-----------

    test('can delete a user instance', async () => {

        await User.destroy({where:{
            name:'spiderman'
        }});

        expect(await User.count({
            where:{
                name: 'spiderman' 
            }
        })).toBe(0);
    });



});

//----------------------CRUD TESTS-----------------------


//----------------------ASSOCIATION TESTS-----------------------

//----------------------ASSOCIATION TESTS-----------------------