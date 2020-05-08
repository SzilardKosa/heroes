/**
 * Load all application from the database
 * If current authrole is user, then only the user's applicatins are loaded
 * The result is saved to res.locals.applications
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicationModel = requireOption(objectrepository, 'ApplicationModel');

    return function (req, res, next) {
        let query = {};

        if(req.session.currentAuthRole === 'user'){
            query = { _user: req.session.currentUserId};
        }

        ApplicationModel.find(query).populate('_kid').populate('_user')
        .exec((err, applications) => {
            if (err) {
                return next(err);
            }
            console.log(applications);

            res.locals.applications = applications;
            return next();
        });
    };
};