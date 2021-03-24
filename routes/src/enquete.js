const express = require('express');
const router = express.Router();
const utils = require('../../utils/utils')
const dataset = require('../../dataset/enquete.json');
let id = ''


if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./localstorage');
}

router.get('/enquete/:id', async(req, res) => {
    id = req.params.id;
    console.log(id)

    const test = utils.test()

    console.log(test)

    res.render('enquete')
});


router.post('/submit', (req, res) => {

    const test = utils.test()

    localStorage.setItem(`${test}-${id}`, JSON.stringify(req.body));


    // Check if form can be filled in based on dates
    const checkAvailability = utils.map(dataset)


    return res.render('dashboard', {
        data: checkAvailability
    })
})


module.exports = router;