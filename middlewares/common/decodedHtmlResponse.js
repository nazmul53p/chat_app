/*
 * Title: set response
 * Description: set HTML title and make sure response is HTML
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

module.exports = function decoderHtmlResponse(pageTitle) {
    return function (req, res, next) {
        res.locals.title = `${pageTitle}`;
        res.locals.html = true;
        next();
    };
};
