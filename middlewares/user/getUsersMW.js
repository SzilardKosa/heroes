/**
 * Load all user from the database
 * The result is saved to res.locals.users
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};