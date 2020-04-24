/**
 * Load a kid from the database using the :kidID param
 * The result is saved to res.locals.kid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.kid = {
            _id: 'kidid1',
            status: 'taken',
            name: 'Emy Nonerealgirl',
            age: '14',
            gender: 'female',
            universe: 'DC',
            abilities: 'she can become invisible, but only when no one is looking at her',
            profile:'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        };

        next();
    };
};