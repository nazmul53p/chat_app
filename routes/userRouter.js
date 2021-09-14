/*
 * Title: user router
 * Description: user router
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// login page
router.get('/', userController);

module.exports = router;
