/**
 * Check the login data (from POST), if it's correct, create a session for the user and redirect to /kids
 * Saves the auth role(user/admin) to the session
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        // save body to rerender in case of an error
        res.locals = req.body;

        if (
            typeof req.body.loginEmail === 'undefined' || req.body.loginEmail === '' ||
            typeof req.body.loginPassword === 'undefined' || req.body.loginPassword === ''
        ) {
            res.locals.loginError = 'Please fill in all the fields!';
            return next();
        }

        if (req.body.loginEmail === 'admin' && req.body.loginPassword === 'admin'){
            req.session.loggedIn = true;
            req.session.currentAuthRole = 'admin';
            return req.session.save(err => res.redirect('/kids'));
        }

        UserModel.findOne({email: req.body.loginEmail}, (err, user)=>{
            if (err){
                return next(err);
            }

            if (!user){
                res.locals.loginError = 'Wrong emial address!';
                return next();
            }

            if (user.password === req.body.loginPassword){
                req.session.loggedIn = true;
                req.session.currentAuthRole = 'user';
                req.session.currentUserId = user._id;
                return req.session.save(err => res.redirect('/kids'));
            } else {
                res.locals.loginError = 'Wrong password!';
                return next();
            }
        });
    };
};