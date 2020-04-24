/**
 * Using the template engine render the values into the template
 * In some cases(/kids, /applications) it uses different templates based on authentication role (user, admin)
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        // testing admin
        // if (typeof res.locals.authRoles !== 'undefined'){
        //     if (res.locals.authRoles === "both"){
        //         console.log('render: ' + 'admin' + viewName);
        //         return res.render('admin'+viewName, res.locals);
        //     }
        // }

        res.render(viewName, res.locals);
        console.log('render: ' + viewName);
    };

};