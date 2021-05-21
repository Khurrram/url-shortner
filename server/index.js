const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connect = require('../server/config/db.config')
connect.once('open', () => console.log("Connected to Database"));
connect.on('error', () => console.log("Didn't connect to DB error"));

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/createURL'))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))