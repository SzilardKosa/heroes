/**
 * Using POST params update or save a user to the database
 * If res.locals.user is there, it's an update otherwise this is a registration attempt
 * Redirects to /profile after update, to / after registration
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log(req.body);
        next();
    };
};