/*
 * Title: inbox router
 * Description: inbox router
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies
const express = require('express');
const inboxController = require('../controllers/inboxController');

const router = express.Router();

// login page
router.get('/', inboxController);

module.exports = router;
