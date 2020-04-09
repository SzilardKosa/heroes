/**
 * Using POST params update or save a kid to the database
 * If res.locals.kid is there, it's an update otherwise this middleware creates an entity
 * Redirects to /kids after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};