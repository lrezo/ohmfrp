const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const corsOptions = {
    origin: true,
    credentials: true
}


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.options('*', cors(corsOptions));

app.use('/api/v1/landen', require('./routes/routes'))

app.listen(port);