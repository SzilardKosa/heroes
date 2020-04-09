/**
 * Removes an application from the database, the entity used here is: res.locals.application
 * Redirects to /applications after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};