/*
 * Title: Chat App
 * Description: all setup here
 * Author: Nazmul Haque
 * Date: 09/13/2021
 */

// Dependencies
// external import
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
// internal import
const { routeNotFound, defaultErrorHandler } = require('./middlewares/404-middleware/errorHandler');

const app = express();
dotenv.config();

// database connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('mongoDB connection successful...'))
    .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// cookies parse
app.use(cookieParser(process.env.COOKIE_SECRET));

// route setup

// 404 not found route
app.use(routeNotFound);

// default error handler
app.use(defaultErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`);
});
