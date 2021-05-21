const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlId: String,
    originURL: String,
    shortURL: String,
});

module.exports = mongoose.model('URL', URLSchema);