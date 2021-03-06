/**
 * There are two authentication roles: user/admin.
 * There are three enpoint types: only for users/ only for admins/ for both.
 * If the current user role is acceptable then next, else redirects.
 * If it was both, then save it, so the render will use different templates according auth role.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository, acceptableAuthRoles) {
    return function (req, res, next) {
        console.log('acceptableAuthRoles: '+ acceptableAuthRoles);
        if ( acceptableAuthRoles === 'both'){
            res.locals.doubleView = true;
        }

        if (
            typeof req.session.loggedIn === 'undefined' ||
            req.session.loggedIn !== true ||
            typeof req.session.currentAuthRole === 'undefined' ||
            (req.session.currentAuthRole === 'user' && acceptableAuthRoles === 'admin') ||
            (req.session.currentAuthRole === 'admin' && acceptableAuthRoles === 'user')
        ) {
            return res.redirect('/');
        }

        next();
    };
};