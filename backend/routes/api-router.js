//-------IMPORTS-------
const apiRouter = require('express').Router();

const {
    getEndpoints
} = require('../db/helpers/utils');

//-----SERVER METHODS-----
apiRouter.get('/', getEndpoints);

//-------ROUTERS-------


//-------EXPORTS-------
module.exports = apiRouter;