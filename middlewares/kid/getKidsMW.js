/**
 * Load all kid from the database
 * The result is saved to res.locals.kids
 * Also checks for filter parameters
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.kids = [
            {
                _id: 'kidid1',
                status: 'taken',
                name: 'Toby Nonerealboy',
                age: '12',
                gender: 'male',
                universe: 'DC',
                abilities: 'Communing with squirrels, Knowing the Bible by heart',
                profile:'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'kidid2',
                status: 'free',
                name: 'Bruce Wayne',
                age: '11',
                gender: 'male',
                universe: 'DC',
                abilities: 'Afraid of bats, money',
                profile:'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'kidid3',
                status: 'taken',
                name: 'Peter Benjamin Parker',
                age: '14',
                gender: 'male',
                universe: 'Marvel',
                abilities: 'Being young and irresponsible',
                profile:'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'kidid4',
                status: 'free',
                name: 'Space baby',
                age: '1',
                gender: 'male',
                universe: 'DC',
                abilities: 'Supermanlike',
                profile:'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            }
        ],

        next();
    };
};