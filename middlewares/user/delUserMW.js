/**
 * If auth role is user, then removes res.locals.user and redirects to /
 * If auth role is admin, the removes res.locals.user and redirects to /users
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.user === 'undefined') {
            return next();
        }
        console.log(res.locals.user);
        
        res.locals.user.remove(err => {
            if (err) {
                return next(err);
            }

            if(req.session.currentAuthRole === 'user'){
                return res.redirect('/');
            } else if (req.session.currentAuthRole === 'admin') {    
                return res.redirect('/users');
            }
        });

    };
};