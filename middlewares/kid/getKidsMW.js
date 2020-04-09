/**
 * Load all kid from the database
 * The result is saved to res.locals.kids
 * Also checks for filter parameters
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};