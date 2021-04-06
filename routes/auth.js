const express = require('express');
const postAuth = require('../controllers/auth');
const router = express.Router();

router.post('/', postAuth)

module.exports = router