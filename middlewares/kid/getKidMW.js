/**
 * Load a kid from the database using the :kidID param
 * The result is saved to res.locals.kid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KidModel = requireOption(objectrepository, 'KidModel');

    return function (req, res, next) {
        KidModel.findOne({_id:req.params.kidID},
            (err, kid) => {
            if (err || !kid){
                return next(err);
            }

            res.locals.kid = kid;
            return next();
        });
    };
};