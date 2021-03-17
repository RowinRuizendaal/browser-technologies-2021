const express = require('express');
const router = express.Router();


router.get('/enquete/:id', async(req, res) => {
    const name = req.params.id;

    res.render('enquete')
});


module.exports = router;