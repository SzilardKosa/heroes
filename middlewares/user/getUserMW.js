/**
 * If current auth role is user, load the user data from the database using the session
 * If current auth role is admin, load a user from the database using the :userID param
 * The result is saved to res.locals.user
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.user = {
            _id: 'userid1',
            name: 'Toby Nonerealman',
            email: 'toby56@gmail.com',
            password: 'password123',
            phone: '+36 00 000 0000',
            universe: 'DC',
            profile: 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        };

        next();
    };
};