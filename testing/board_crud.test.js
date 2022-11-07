const { Board } = require('../models');
//----------------------CRUD TESTS FOR Board-----------------------

describe('Board Model Crud', () => {

//----------create-----------

    test('can create a new Board', async () => {
        
        await Board.create({
            type: 'french cheeses',
            description: 'cheeses from france, bonjour'
        });
        
        expect(await Board.count({
            where:{
                type: 'french cheeses'
            }
        })).toBe(1);
    });

//----------read-----------

test('can read from Board Model', async() => {
    const toRead = (await Board.findAll({
        where: {
            id: 1
        }, 
        attributes:  ['type', 'description']
        }
    )).map(p=>p.toJSON());

    
    expect(toRead).toEqual([ { type: 'extremely basic', description: 'for people who are scared of interesting cheese' } ]);
    
});
//----------update-----------

    test('can update a Board instance', async () => {
        
        let createdBoard = await Board.findOne({where:{
            type: 'extremely basic'
        }})

        await createdBoard.update({
            type: 'pretty basic'
        })   

        // let updatedBoard = await Board.findByPk(createdBoardPk);
        expect(await Board.count({
            where:{
                type: 'pretty basic'
            }
        })).toBe(1);

        expect(await Board.count({
            where:{
                type: 'extremely basic'
            }
        })).toBe(0);
    });

//----------delete-----------

    test('can delete a Board instance', async () => {

        await Board.destroy({where:{
            type:'pretty basic'
        }});

        expect(await Board.count({
            where:{
                type: 'pretty basic' 
            }
        })).toBe(0);
    });
});
