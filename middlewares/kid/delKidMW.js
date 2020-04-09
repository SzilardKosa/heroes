/**
 * Removes a kid from the database, the entity used here is: res.locals.kid
 * Redirects to /kids after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};