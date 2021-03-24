const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: true,
}));

let postvalue = ''



// Pages required
const homepage = require('./src/home');
const dashboard = require('./src/dashboard')
const enquete = require('./src/enquete')

// Make routes
router.use('/', homepage);
router.use('/', dashboard);
router.use('/', enquete);

module.exports = router;