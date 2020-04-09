/**
 * If auth role is user, then removes the current user from database and redirects to /
 * If auth role is admin, the removes res.locals.user and redirects to /users
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};