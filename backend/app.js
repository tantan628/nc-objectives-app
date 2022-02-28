//-------IMPORTS-------
const express = require('express');
const app = express();
app.use(express.json());
const apiRouter = require('./routes/api-router');

const {
    handleBadPath,
    handleServerError
} = require('./controllers/error-controllers');

//-------ROUTER-------
app.use('/api', apiRouter);

//-----ERROR HANDLERS-----
app.all('/*', handleBadPath);

app.use(handleServerError);

//-------EXPORTS-------
module.exports = app;