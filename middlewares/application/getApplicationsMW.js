/**
 * Load all application from the database
 * The result is saved to res.locals.applications
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};