/*
 * Title: error handler
 * Description: route and default error handler
 * Author: Nazmul Haque
 * Date: 09/13/2021
 */

// Dependencies
const createError = require('http-errors');

// module scaffolding
const error = {};

// route error
error.routeNotFound = (req, res, next) => {
    next(createError(404, 'Your request content not found!'));
};

// default error
error.defaultErrorHandler = (err, req, res, next) => {
    if (res.locals.html) {
        const status = err.status || 500;
        if (process.env.NODE_ENV === 'development') {
            res.locals.errors = {
                message: err.message,
                list: err.stack.split(/ at /),
                env: true,
                status,
            };
        } else {
            res.locals.errors = {
                env: false,
                message: err.message,
            };
        }
        res.status(status);

        // html response
        res.render('error', { title: 'Error Page' });
    } else {
        // json response
        res.json(err);
    }
};

// module export
module.exports = error;
