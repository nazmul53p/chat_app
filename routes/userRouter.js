/*
 * Title: user router
 * Description: user router
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies
const express = require('express');
const userController = require('../controllers/userController');
const decodedHtmlResponse = require('../middlewares/common/decodedHtmlResponse');

const router = express.Router();

// login page
router.get('/', decodedHtmlResponse('User'), userController);

module.exports = router;
