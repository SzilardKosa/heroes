/**
 * If current auth role is user, load the user data from the database using the session
 * If current auth role is admin, load a user from the database using the :userID param
 * The result is saved to res.locals.user
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};