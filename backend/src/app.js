const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('tiny')); // re-start and update browser after any change 
app.use(compression());
app.use(helmet());
app.use(express.json()); // body parser req.body

app.get('/', (req, res) => {
    res.json({
        message: '👣 Azbil Inventory App 👩‍💻👩‍💻',
    });
});

app.use('/api/v1', api); // mount all api to app

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
