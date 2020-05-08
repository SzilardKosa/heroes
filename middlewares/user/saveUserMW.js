/**
 * Using POST params update a user in the database
 * Saves result to res.locals.changeError and res.locals.changeSuccess
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
            typeof req.body.password === 'undefined' || req.body.password === ''
        ) {
            res.locals.changeError = 'Save was unsuccessfull! Please dont leave empty fields!';
            return next();
        }

        // checking if email is free
        UserModel.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                return next(err);
            }
            res.locals.user.name = req.body.name;
            res.locals.user.phone = req.body.phone;
            res.locals.user.password = req.body.password;
            // if the email isn't taken yet then update user
            if((!user || user.email === res.locals.user.email) && req.body.email !== 'admin'){        
                res.locals.user.email = req.body.email;
                if (typeof req.file !== 'undefined'){
                    res.locals.user.profile = req.file.filename;
                }
                
                res.locals.user.save(err => {
                    if (err) {
                        return next(err);
                    }
                    res.locals.changeSuccess = 'Changes were successfully saved!';
                    return next();
                });
            } else {
                res.locals.user.email = req.body.email;
                res.locals.changeError = 'Email address is already in use!';
                return next();
            }
        });
    };
};