/**
 * Using the template engine render the values into the template
 * In some cases(/kids, /applications) it uses different templates based on authentication role (user, admin)
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        if (
            typeof res.locals.doubleView !== 'undefined' &&
            res.locals.doubleView === true
        ){
            if (req.session.currentAuthRole === 'admin'){
                console.log('render: ' + 'admin' + viewName);
                return res.render('admin'+viewName, res.locals);
            }
        }

        console.log('render: ' + viewName);
        return res.render(viewName, res.locals);
    };

};