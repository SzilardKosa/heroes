/**
 * Checks for login/registration error message in the url, if there is one, then saves it to the response
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.query['login-error'] !== 'undefined'){
            res.locals.loginError = req.query['login-error']
        }
        next();
    };
};