/**
 * Load all user from the database
 * The result is saved to res.locals.users
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.users = [
            {
                _id: 'userid1',
                name: 'Toby Nonerealman',
                email: 'toby56@gmail.com',
                password: 'password123',
                phone: '+36 00 000 0000',
                universe: 'DC',
                profile: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'userid2',
                name: 'Alfred Pennyworth',
                email: 'alfred@we.com',
                password: 'password123',
                phone: '+36 00 000 0001',
                universe: 'DC',
                profile: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'userid3',
                name: 'Charles Xavier',
                email: 'charlie@gmail.com',
                password: 'password123',
                phone: '+36 00 000 0002',
                universe: 'Marvel',
                profile: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
            {
                _id: 'userid4',
                name: 'Joaquin Phoenix',
                email: 'joker@gmail.com',
                password: 'password123',
                phone: '+36 00 000 0003',
                universe: 'DC',
                profile: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
            },
        ];

        next();
    };
};