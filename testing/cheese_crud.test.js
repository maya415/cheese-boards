const { Cheese } = require('../models');
//----------------------CRUD TESTS FOR Cheese-----------------------

describe('Cheese Model Crud', () => {

//----------create-----------

    test('can create a new Cheese', async () => {
        
        await Cheese.create({
            title: 'asiago',
            description: 'versatile: sometimes soft, sometimes crumbly; sometimes sharp, sometimes mild'
        });
        
        expect(await Cheese.count({
            where:{
                title: 'asiago'
            }
        })).toBe(1);
    });

//----------read-----------

test('can read from Cheese Model', async() => {
    const toRead = (await Cheese.findAll({
        where: {
            id: 1
        }, 
        attributes:  ['title', 'description']
        }
    )).map(p=>p.toJSON());

    
    expect(toRead).toEqual([ { title: 'feta', description: 'the only good cheese; tangy, crumbly, creamy' } ]);


    
});
//----------update-----------

    test('can update a Cheese instance', async () => {
        
        let createdCheese = await Cheese.findOne({where:{
            title: 'asiago'
        }})

        let createdCheesePk = await createdCheese.pk;

        await createdCheese.update({
            title: 'italian asiago'
        })   

        // let updatedCheese = await Cheese.findByPk(createdCheesePk);
        expect(await Cheese.count({
            where:{
                title: 'italian asiago'
            }
        })).toBe(1);

        expect(await Cheese.count({
            where:{
                title: 'asiago'
            }
        })).toBe(0);
    });

//----------delete-----------

    test('can delete a Cheese instance', async () => {

        await Cheese.destroy({where:{
            title:'italian asiago'
        }});

        expect(await Cheese.count({
            where:{
                title: 'italian asiago' 
            }
        })).toBe(0);
    });



});
