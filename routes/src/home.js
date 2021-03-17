const express = require('express');
const router = express.Router();
const dataset = require('../../dataset/enquete.json');


router.get('/', (req, res) => {
    res.render('index')
});


router.post('/enquete', (req, res) => {
    const postvalue = req.body.nummer;

    console.log(postvalue)

    return res.render('dashboard.ejs', {
        data: dataset,
        student: postvalue
    })
})

module.exports = router;