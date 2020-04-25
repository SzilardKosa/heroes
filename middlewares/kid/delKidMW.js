/**
 * Removes a kid from the database, the entity used here is: res.locals.kid
 * Redirects to /kids after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.kid === 'undefined') {
            return next();
        }

        res.locals.kid.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/kids');
        });
    };
};