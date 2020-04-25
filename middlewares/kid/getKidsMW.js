/**
 * Load all kid from the database
 * The result is saved to res.locals.kids
 * Also checks for filter parameters
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KidModel = requireOption(objectrepository, 'KidModel');

    return function (req, res, next) {

        // TODO: Check for filters

        KidModel.find({}, (err, kids) => {
            if (err){
                return next(err);
            }

            res.locals.kids = kids;
            return next();
        });
    };
};