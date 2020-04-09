/**
 * Using POST params update or save an application to the database
 * If res.locals.application is there, it's an update otherwise this middleware creates an entity
 * Redirects to /applications if it was an edit, to /kids if it was a new
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};