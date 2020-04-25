/**
 * Check the login data (from POST), if it's correct, create a session for the user and redirect to /kids
 * Saves the auth role(user/admin) to the session
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.body.email === 'undefined'){
            return res.redirect('/?login-error='+encodeURIComponent('Email is missing!'));
        }

        if (typeof req.body.password === 'undefined'){
            return res.redirect('/?login-error='+encodeURIComponent('Password is missing!'));
        }

        if (req.body.email === 'admin' &&
            req.body.password === 'admin'){
            return res.redirect('/kids');
        }

        res.redirect('/?login-error='+encodeURIComponent('Wrong login data'));

    };
};