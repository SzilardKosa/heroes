/**
 * Load an application from the database using the :appID param
 * The result is saved to res.locals.application
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicationModel = requireOption(objectrepository, 'ApplicationModel');

    return function (req, res, next) {
        ApplicationModel.findOne({_id:req.params.appID}, (err, application) => {
            if (err || !application){
                return next(err);
            }

            res.locals.application = application;
            return next();
        });
    };
};