const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://admin:shorterURL@cluster0.oxq5o.mongodb.net/urls?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
module.exports = connection