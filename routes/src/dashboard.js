const express = require('express');
const router = express.Router();
const dataset = require('../../dataset/enquete.json');
const utils = require('../../utils/utils')


router.get('/dashboard', (req, res) => {
    const checkAvailability = utils.map(dataset)

    return res.render('dashboard.ejs', {
        data: checkAvailability
    })
});



module.exports = router;