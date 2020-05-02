/**
 * Using POST params update or save a kid to the database
 * If res.locals.kid is there, it's an update otherwise this middleware creates an entity
 * Redirects to /kids after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KidModel = requireOption(objectrepository, 'KidModel');

    return function (req, res, next) {
        if (
            typeof req.body.status === 'undefined' ||
            typeof req.body.name === 'undefined' ||
            typeof req.body.age === 'undefined' ||
            typeof req.body.gender === 'undefined' ||
            typeof req.body.universe === 'undefined' ||
            typeof req.body.abilities === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.kid === 'undefined') {
            res.locals.kid = new KidModel();
        }

        res.locals.kid.status = req.body.status;
        res.locals.kid.name = req.body.name;
        res.locals.kid.age = req.body.age;
        res.locals.kid.gender = req.body.gender;
        res.locals.kid.universe = req.body.universe;
        res.locals.kid.abilities = req.body.abilities;
        if (typeof req.file !== 'undefined'){
            res.locals.kid.profile = req.file.filename;
        }

        res.locals.kid.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/kids');
        });
    };
};