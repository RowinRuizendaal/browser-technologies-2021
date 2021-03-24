const express = require('express');
const router = express.Router();
const utils = require('../../utils/utils')
const dataset = require('../../dataset/enquete.json');
let id = ''


router.get('/enquete/:id', async(req, res) => {

    if (typeof localStorage === "undefined" || localStorage === null) {
        const LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./localstorage');
    }


    id = req.params.id;
    const uuid = utils.uuid()

    if (localStorage.getItem(`${uuid}-${id}`)) {
        return res.render('enquete', {
            data: JSON.parse(localStorage.getItem(`${uuid}-${id}`))
        })
    }

    return res.render('enquete', {
        data: ''
    })
});

router.post('/submit', (req, res) => {

    if (typeof localStorage === "undefined" || localStorage === null) {
        const LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./localstorage');
    }

    // Get uuid
    const uuid = utils.uuid()

    const data = [req.body]

    localStorage.setItem(`${uuid}-${id}`, JSON.stringify(data));


    // Check if form can be filled in based on dates
    const checkAvailability = utils.map(dataset)


    return res.render('dashboard', {
        data: checkAvailability
    })
})


module.exports = router;