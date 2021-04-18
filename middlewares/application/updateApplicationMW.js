/**
 * Using POST params update an application in the database
 * Redirects to /applications if it was successfull
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KidModel = requireOption(objectrepository, 'KidModel');

    return function (req, res, next) {
        if (typeof req.body.status === 'undefined') {
            return next('req.body.status is missing');
        }
        res.locals.application.status = req.body.status;

        res.locals.application.save(err => {
            if (err) {
                return next(err);
            }
            // if it was approved set kid status to taken
            if (req.body.status === 'approved'){
                KidModel.updateOne({_id:res.locals.application._kid}, {status: 'Taken'}, {}, (err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/applications');
                });
            }
            else {
                return res.redirect('/applications');
            }            
        });
    };
};