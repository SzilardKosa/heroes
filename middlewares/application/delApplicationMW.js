/**
 * Removes an application from the database, the entity used here is: res.locals.application
 * Redirects to /applications after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.application === 'undefined') {
            return next();
        }

        res.locals.application.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/applications');
        });
    };
};