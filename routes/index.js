var menu = require('../menu.json');

exports.viewIndex = function (req, res) {
    res.render("index", menu);
};