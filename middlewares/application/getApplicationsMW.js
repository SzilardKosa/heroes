/**
 * Load all application from the database
 * If current authrole is user, then only the user's applicatins are loaded
 * The result is saved to res.locals.applications
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.applications = [
            {
                _id: 'id1',
                kidId: 'kidid2',
                kidName: 'Bruce Wayne',
                userId: 'userid2',
                userName: 'Alfred Pennyworth',
                status: 'Approved'
            },
            {
                _id: 'id2',
                kidId: 'kidid2',
                kidName: 'Bruce Wayne',
                userId: 'userid4',
                userName: 'Joaquin Phoenix',
                status: 'Denied'
            },
            {
                _id: 'id3',
                kidId: 'kidid4',
                kidName: 'Space baby',
                userId: 'userid15',
                userName: 'Jonathan Kent',
                status: 'Approved'
            },
            {
                _id: 'id4',
                kidId: 'kidid1',
                kidName: 'Toby Nonerealboy',
                userId: 'userid29',
                userName: 'Toby from The Office',
                status: 'Not processed'
            },
        ];

        next();
    };
};