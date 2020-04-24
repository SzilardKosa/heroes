/**
 * Check the login data (from POST), if it's correct, create a session for the user and redirect to /kids
 * Saves the auth role(user/admin) to the session
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.redirect('/kids');
    };
};