/**
 * Using POST params update a user in the database
 * Redirects to /profile after update
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        console.log(req.body);
        console.log(req.file);
        next();
        // TODO: from register and savekid
    };
};