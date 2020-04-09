/**
 * Using the template engine render the values into the template
 * In some cases(/kids, /applications) it uses different templates based on authentication role (user, admin)
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.render(viewName, res.tpl);
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };

};