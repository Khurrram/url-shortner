const express = require('express');
const validURL = require('valid-url');
const shortid = require('shortid');

const router = express.Router();

const URL = require('../models/urlModel');

const base = 'http://localhost:3001';

router.post('/short', async (req,res) => {
    const originURL = req.body.URL;
    if (!validURL.isUri(base)) {
        return res.status(401).json("Invalid base url");
    }

    const urlId = shortid.generate();

    if (validURL.isUri(originURL)) {
        console.log(originURL + "inside validURL is uri");
        try {
            let url = await URL.findOne({originURL});
            console.log(url);
            if (url) {
                res.json(url);
            } else {
                const shortURL = base + '/' + urlId;
                url = new URL({
                    originURL,
                    shortURL,
                    urlId
                })
                await url.save()
                res.json(url)
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json("Server Error");
        }
    } else {
        res.json("Invalid origin URL");
    }
})

module.exports = router