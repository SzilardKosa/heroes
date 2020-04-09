/**
 * Load an application from the database using the :appID param
 * The result is saved to res.locals.application
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};