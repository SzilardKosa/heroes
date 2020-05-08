/**
 * Using POST params update an application in the database
 * Redirects to /applications if it was successfull
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof req.body.status === 'undefined') {
            return next('req.body.status is missing');
        }
        res.locals.application.status = req.body.status;

        res.locals.application.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/applications');
        });
    };
};