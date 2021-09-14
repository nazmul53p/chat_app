/*
 * Title: inbox router
 * Description: inbox router
 * Author: Nazmul Haque
 * Date: 09/14/2021
 */

// Dependencies
const express = require('express');
const inboxController = require('../controllers/inboxController');
const decodedHtmlResponse = require('../middlewares/common/decodedHtmlResponse');

const router = express.Router();

// inbox page
router.get('/', decodedHtmlResponse('Inbox Page'), inboxController);

module.exports = router;
