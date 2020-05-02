/**
 * Checks for message in the url, if there is one, then saves it to the response
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.query['reg-success'] !== 'undefined'){
            res.locals.regSuccess = req.query['reg-success']
        }
        next();
    };
};