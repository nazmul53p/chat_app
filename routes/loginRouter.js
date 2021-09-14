/*
 * Title: login router
 * Description: login router
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies
const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

// login page
router.get('/', loginController);

module.exports = router;
