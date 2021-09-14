/*
 * Title: login controller
 * Description: login controller
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies

module.exports = function loginController(req, res, next) {
    res.render('index', {
        title: 'Chat Application',
    });
};
