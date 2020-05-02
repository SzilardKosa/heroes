/**
 * Using POST params save a user to the database
 * If there is an error then saves it and the req.body to res.locals for the render
 * Else saves the user and redirects to /
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        console.log(req.body);
        console.log(req.file);
        if (
            typeof req.body.name === 'undefined' || req.body.name === '' ||
            typeof req.body.email === 'undefined' || req.body.email === '' ||
            typeof req.body.phone === 'undefined' || req.body.phone === '' ||
            typeof req.body.password === 'undefined' || req.body.password === '' ||
            typeof req.body.universe === 'undefined' || req.body.universe === ''
        ) {
            res.locals = req.body;
            res.locals.regError = 'Please fill in all the fields!';
            return next();
        }

        // checking if email is free
        UserModel.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                return next(err);
            }
            // if the email isn't taken yet then save new user
            if(!user){
                res.locals.user = new UserModel();
        
                res.locals.user.name = req.body.name;
                res.locals.user.email = req.body.email;
                res.locals.user.phone = req.body.phone;
                res.locals.user.password = req.body.password;
                res.locals.user.universe = req.body.universe;
                if (typeof req.file !== 'undefined'){
                    res.locals.user.profile = req.file.filename;
                }
        
                res.locals.user.save(err => {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/?reg-success='+encodeURIComponent('Registration was successfull!'));
                });
            } else {
                res.locals = req.body;
                res.locals.regError = 'Email address is already in use!';
                return next();
            }
        });

    };
};