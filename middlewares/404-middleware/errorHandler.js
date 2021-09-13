/*
 * Title: error handler
 * Description: route and default error handler
 * Author: Nazmul Haque
 * Date: 09/13/2021
 */

// Dependencies
const createError = require('http-errors');

// module scaffolding
const errors = {};

// route error
errors.routeNotFound = (req, res, next) => {
    next(createError(404, 'Your request content not found!'));
};

// default error
errors.defaultErrorHandler = (err, req, res, next) => {
    if (!res.locals.html) {
        const error = {};
        error.err = err;
        error.mode = process.env.NODE_ENV === 'development';
        error.list = process.env.NODE_ENV === 'development' ? err.stack.split(/ at /) : err.message;
        error.status = err.status || 500;
        res.status(error.status);
        res.locals = error;
        // html response
        res.render('error', { title: 'Error Page' });
    } else {
        // json response
        res.json(err);
    }
};

// module export
module.exports = errors;
