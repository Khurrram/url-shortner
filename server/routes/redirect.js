const express = require('express')
const router = express.Router()
const URL = require('../models/urlModel')

router.get('/:urlId(*)', async (req,res) => {
    try {
        const url = await URL.findOne({urlId: req.params.urlId})
        if (url) {
            console.log("valid url ", url.originURL);
            return res.redirect(url.originURL)
        } else {
            return res.status(404).json("ERROR 404 not found")
        }
    }
    catch (err) {
        res.status(500).json("Server Error!");
    }
})

module.exports = router