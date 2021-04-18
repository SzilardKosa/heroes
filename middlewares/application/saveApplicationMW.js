/**
 * Save an application to the database based on the req.session.currentUserId and :kidID
 * Redirects to /applications if it was successfull
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const ApplicationModel = requireOption(objectrepository, 'ApplicationModel');

    return function (req, res, next) {
        // Check if they are from the same universe
        if(res.locals.user.universe !== res.locals.kid.universe){
            return res.redirect('/kids?app-error='+
            encodeURIComponent('You have to choose from your own universe!'));
        }
        // Check if the kid is free
        if(res.locals.kid.status !== 'Free'){
            return res.redirect('/kids?app-error='+
            encodeURIComponent('This kid is not free anymore!'));
        }
        // Deny application for the same kid, by the same user
        ApplicationModel.findOne(
                {
                    _kid: req.params.kidID,
                    _user: req.session.currentUserId
                }, (err, application)=>{
            if(err){
                return next(err);
            } 
            if(!application){
                let application = new ApplicationModel();
                application.status = 'not processed';
                application._kid = req.params.kidID;
                application._user = req.session.currentUserId;
    
                application.save(err => {
                    if (err) {
                        return next(err);
                    }
    
                    return res.redirect('/applications');
                });
            } else {
                return res.redirect('/kids?app-error='+
                encodeURIComponent('You have already applied for this kid!'));
            }
        });
    };
};