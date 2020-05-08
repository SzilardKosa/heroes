/**
 * Load all kid from the database
 * The result is saved to res.locals.kids
 * Also checks for filter parameters
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KidModel = requireOption(objectrepository, 'KidModel');

    return function (req, res, next) {
        let query = {};

        if( typeof req.query.universe !== 'undefined' && req.query.universe !== 'All'){
            query = { universe: req.query.universe};
            res.locals.universe = req.query.universe;
        }

        KidModel.find(query, (err, kids) => {
            if (err){
                return next(err);
            }

            res.locals.kids = kids;
            return next();
        });
    };
};