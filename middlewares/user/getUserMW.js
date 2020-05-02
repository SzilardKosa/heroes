/**
 * If current auth role is user, load the user data from the database using the session
 * If current auth role is admin, load a user from the database using the :userID param
 * The result is saved to res.locals.user
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        let userId;
        if(req.session.currentAuthRole === 'user'){
            userId = req.session.currentUserId;
        } else if (req.session.currentAuthRole === 'admin') {
            userId = req.params.userID;
        }
        UserModel.findOne({_id:userId}, (err, user) => {
            if (err || !user){
                return next(err);
            }

            res.locals.user = user;
            return next();
        });
    };
};