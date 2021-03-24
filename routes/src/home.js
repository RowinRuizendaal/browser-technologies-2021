const express = require('express');
const router = express.Router();
const dataset = require('../../dataset/enquete.json');
const studenten = require('../../dataset/studenten.json')
const utils = require('../../utils/utils')



router.get('/', (req, res) => {
    res.render('index', {
        error: undefined
    })
});


router.post('/enquete', (req, res) => {
    postvalue = req.body.nummer;

    // Convert postvalue to number strings will be converted to NAN
    const integer = parseInt(postvalue)

    // check how long the integer is
    const len = Math.ceil(Math.log10(integer + 1));

    const setnummer = utils.test(integer)

    // Check if Student is in the list for participating
    const checkstudent = utils.checkstudent(studenten, postvalue)

    // Check for error and return feedback
    if (!postvalue || len < 9 || len > 9 || isNaN(len) || !checkstudent[0]) {
        return res.render('index.ejs', {
            error: 'Studentnummer niet bekend of niet geautoriseerd'
        })
    }


    // Check if form can be filled in based on dates
    const checkAvailability = utils.map(dataset)

    if (postvalue && !isNaN(len)) {
        return res.render('dashboard.ejs', {
            data: checkAvailability,
            student: postvalue
        })
    }

})

module.exports = router;