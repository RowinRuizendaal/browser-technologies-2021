const express = require('express');
const router = express.Router();
const dataset = require('../../dataset/enquete.json');


router.get('/', (req, res) => {
    res.render('index', {
        error: undefined
    })
});


router.post('/enquete', (req, res) => {
    const postvalue = req.body.nummer;

    // Convert postvalue to number
    const integer = parseInt(postvalue)

    // check how long the integer is
    const len = Math.ceil(Math.log10(integer + 1));



    if (!postvalue || len < 9 || len > 9) {
        return res.render('index.ejs', {
            error: 'Studentnummer niet bekend'
        })
    }

    if (postvalue) {
        return res.render('dashboard.ejs', {
            data: dataset,
            student: postvalue
        })
    }

})

module.exports = router;